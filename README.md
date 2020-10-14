# Test JavaScript Algorithm

## Introduction

This repo is used as a solution example for an algorithmic test in JavaScript.

## Subject

The objective of this test is to see the algorithmic aspect and the structuring of the code. The solution has to be returned within an hour whether the exercise is finished or not.

Here's the challenge:

We have a string of numbers (eg: "12345654355").
Computes the biggest product of all possible adjacent substrings of length ```n```.

Example: For the string ```1127839561``` with ```n=5```, the biggest product will be ```7560``` (```7 * 8 * 3 * 9 * 5```). 
For the same string with ```n=3```, the biggest product will be ```270``` (```9 * 5 * 6```).

It is not necessary to have the digits of the substring numerically consecutive; but just that the numbers are adjacent in the starting string. 
Do not hesitate to take into account borderline cases and situations where several sub-chains lead to the same product.

## Pre-requisite

- npm
- ts-node

## Installation

```bash
npm install
```

## Usage

To launch the calculation, use 
```bash
ts-node src/index.ts <string-to-test> <number-of-digits>
```

Example:
```bash
ts-node src/index.ts 1127839561 5
```
Will produce:
```bash
7560
```

## Tests

To launch the tests, use
 ```bash
 npx jest
 ```

## About

If you see an issue or have some improvements, do not hesitate to create an issue or open a pull request ;)
