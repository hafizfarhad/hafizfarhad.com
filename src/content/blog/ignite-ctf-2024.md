---
title: Ignite National Technology Fund CTF 2024 Writeup
author: Hafiz Farhad
pubDatetime: 2024-11-21T09:12:47.400Z
modDatetime: 2024-12-21T09:12:47.400Z
slug: ignite-ctf-2024
featured: false
draft: false
tags:
  - crypto
  - forensics
  - mobile
description: This is a pre-qualification round write-up for Ignite CTF 2024. In this write-up I have covered crypto, mobile and forensics categories.
---

This was the first time we played a national level ctf hackathon. We ranked 132 out of 800 teams. We managed to solve mobile, crypto, and forensics challenges. But in the competition we also had other categories like web, pwn, rev, and programming too - that we couldn't solve for this time.

## Table of contents


## Mobile

In __mobile__ category we had only one challenge. 

### Challenge: drive

__Description:__ N/A

__Hint:__ N/A

__File:__ Download from [here](https://github.com/hafizfarhad/ctf/blob/main/prequalification_ignite_2024/mobile/drive.apk).

In this challenge we are given a drive.apk file.

So, I decompiled it using ```apktool```.

```bash
apktool  d  drive.apk
# d for decompile
```
Once a decompilation is complete, we get the directory named same as .apk file. In my case it is __drive__.
After that, I tried to find the flag in decoded directory. Because, sometimes the flag is hidden in __smali__ named files. So I used __grep -r "flag{" .__ command in every directory inside the main decoded directory __drive__ but couldn't find anything usefull.


After visiting every directory thoroughly I came across this __assets__ directory.

In the __assets__ directory, I found __logins.db__.

Then, I went on [sqlite-viewer](https://inloop.github.io/sqlite-viewer/) and pasted the __logins.db__ file there.

From there I got username and password.

```sql
"id","username","password"

"2","u_1","3568d6239722baa6431b180902d4abf8"
```

Now install drive.apk on phone using __adb__.

But before this, I have to connect my phone with my laptop via USB cable and make sure to on __USB Debugging__ in the settings.

> In case you don't find __USB Debugging__ option. Go to your phone __Settings__ and find __My Phone__ then look for __Build Number__ and tap __Build Number__ 7 times. 


```bash
adb  install  drive.apk
```

Once installed.

Open your terminal again. And then type the following commands.
 

```bash
adb  shell  pm  list  packages | grep  drive
# output: package:com.dam.drive

adb  shell  monkey  -p com.dam.drive -c  android.intent.category.LAUNCHER  1
# make sure you enter the right package name after -p flag, in my case it is: com.dam.drive
```
Check your phone. Enter username and password. Hit enter.

I think there is a way to enter this huge password using adb and terminal. So, try it yourself.

Now analyze logs.

```bash
# copy all logs into logs.txt 
adb  logcat > logs.txt
```
And finally, use grep and grab your flag.

```bash
grep  -r  "flag{"  logs.txt
```
Flag: __flag{l!on_h@v3_c@uGhT}__


## Forensics

### Challenge: hacked

__Description:__ N/A

__Hint:__ N/A

__File:__ Download from [here](https://github.com/hafizfarhad/ctf/blob/main/prequalification_ignite_2024/forensics/capture_8589960862.pcapng).

Flag: __flag{7b57b8c1–88d4–5267–9907–2581d7fbc3ad}__


## Crypto

### Challenge: RSA times 3

__Description:__ N/A

__Hint:__ N/A

__File:__ Download from [here](https://github.com/hafizfarhad/ctf/blob/main/prequalification_ignite_2024/crypto/chall3.py)

```python
from Crypto.Util.number import long_to_bytes
from sympy import integer_nthroot
from Crypto.Util.number import inverse

n = 137060753414266683727124300324533746859808277718802905258966514238130013561771565432798522407445375580008287762039889622965223715570127912095543787383890490878653583833806193555635802190898083759784122260224483898448068630835118301042504840367699583013087370054046159036176795298499691242545588406127708875721
e = 65537
ct = 113410845629188957579227371352869457004301051925915582875304029548349853590142019644282959494824757862324472848045006078465186534737949478859176545110319069769588896457960089078974657211588549197997169318707867343186155514525345219037171326096909347753386433621856501518247340346769688145254670108829593288701

# Factor n (p = sqrt(n))
p, is_exact = integer_nthroot(n, 2)
assert is_exact  

phi_n = p * (p - 1)

d = inverse(e, phi_n)

# Decrypt the ciphertext after 3 rounds of encryption
# We need to perform modular exponentiation with d three times.
original_ct = pow(ct, d, n)
original_ct = pow(original_ct, d, n)
original_ct = pow(original_ct, d, n)

flag = long_to_bytes(original_ct)
print(flag.decode())
```
Flag: __flag{1b8f63a9963c926c02b2c98b41133c08de3bebba50bbb6015112f4c3ed594e80}__