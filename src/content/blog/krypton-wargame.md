---
title: OverTheWire Krypton Wargame Writeup
author: Hafiz Farhad
pubDatetime: 2024-10-21T09:12:47.400Z
modDatetime: 2024-11-21T09:12:47.400Z
slug: krypton-wargame
featured: false
draft: false
tags:
  - crypto
description: Krypton is a wargame designed by the OverTheWire community. It helps you learn cryptography and cryptanalysis.
---


## Table of contents

## Intro

It's been a while since I started learning about cryptography. And I came across OverTheWire community - good-looking hackers.

They have built wargames as fun games to learn security concepts. Today, I will be solving Krypton Wargames.

Krypton (as the name suggests) is all about cryptography and cryptanalysis.

So let's get started!

## Krypton Level 0 → Level 1

There are so many ways to solve this level - you can use online tools i.e, cyberchef, write your own python script, or simply write a terminal command (which ever comfortable you feel with). I am gonna decode this cipher using python scirpt.

```bash
ssh krypton1@krypton.labs.overthewire.org -p 2231
```

```python
import base64

decoded_string = base64.b64decode('S1JZUFRPTklTR1JFQVQ=')

print(decoded_string.decode('utf-8'))
```

Flag: __KRYPTONISGREAT__

Let's move to another level.

## Krypton Level 01 → Level 02

As the description says. It is ‘encrypted’ using a simple rotation.

Once we are logged in successfully. we will cd to __/krypton/__ directory and then into __/krypton1/__.

```bash
cd /krypton/krypton1/
```

Type __ls__ and you'll see 2 files in the __/krypton1/__ directory: __krypton2__ and __README__.

You can read both files in the terminal by using __cat__ command.

```bash
cat README
```

It tells you about the password which is encrypted in the file __krypton2__. It also tells about the encryption algorithm used in the file __krypton2__, ROT13.

```bash
cat krypton2
```
It gives us encrypted password.

Now, let's decrypt the file `krypton2` and get the password.

```python
def rot13(message):
    result = []
    for char in message:
        if 'A' <= char <= 'Z': 
            result.append(chr((ord(char) - ord('A') + 13) % 26 + ord('A')))
        elif 'a' <= char <= 'z': 
            result.append(chr((ord(char) - ord('a') + 13) % 26 + ord('a')))
        else:
            result.append(char)
    return ''.join(result)

message = "YRIRY GJB CNFFJBEQ EBGGRA"
decoded_message = rot13(message)
print(decoded_message)
```

Flag: __LEVEL TWO PASSWORD ROTTEN__

