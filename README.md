# Description

Functions to convert numbers to base 70 URL-friendly string (e.g. 1520893643779 = "6vv6Bu~") and back.
Provides more efficient way to store big numbers (e.g. for IDs or to reduce JSON size):

| bytes | max value | string representation |
| ----- |:---------:| ---------:|
| 1 | 69 | "~"
| 2 | 4899 | "~~"
| 3 | 342999 | "~~~"
| 4 | 24009999 | "~~~~"
| 5 | 1680699999 | "~~~~~"
| 6 | 117648999999 | "~~~~~~"
| 7 | 8235429999999 | "~~~~~~~"
| 8 | 576480099999999 | "~~~~~~~~"

- `toBase70(number)` - converts a number (int) to a string (radix = 70)
- `fromBase70(string)` - parses a string (result of toBase70 function) and returns an number (int).

*currently works only with unsigned integers

# Encoding

`toBase70()` produces only URL friendly characters. Actually all of them except `-` (which can be used as separator between encoded values)

| Symbol | Value 
| ------ | ----:
| ! | 0
| ' | 1
| ( | 2
| ) | 3
| * | 4
| . | 5
| 0 | 6
| 1 | 7
| 2 | 8
| 3 | 9
| 4 | 10
| 5 | 11
| 6 | 12
| 7 | 13
| 8 | 14
| 9 | 15
| A | 16
| B | 17
| C | 18
| D | 19
| E | 20
| F | 21
| G | 22
| H | 23
| I | 24
| J | 25
| K | 26
| L | 27
| M | 28
| N | 29
| O | 30
| P | 31
| Q | 32
| R | 33
| S | 34
| T | 35
| U | 36
| V | 37
| W | 38
| X | 39
| Y | 40
| Z | 41
| _ | 42
| a | 43
| b | 44
| c | 45
| d | 46
| e | 47
| f | 48
| g | 49
| h | 50
| i | 51
| j | 52
| k | 53
| l | 54
| m | 55
| n | 56
| o | 57
| p | 58
| q | 59
| r | 60
| s | 61
| t | 62
| u | 63
| v | 64
| w | 65
| x | 66
| y | 67
| z | 68
| ~ | 69
