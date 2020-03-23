# 🧠 Brainflash - Client

## 📖Table of Contents

- 👀 [What's inside](#whats-inside)
- ⚠️ [Prerequisites](#%EF%B8%8F-prerequisites)
- 📜 [Scripts](#scripts)

## 👀What's inside:

Client for Brainflash application. This project is created for learning purposes of code quality, testing and architecture design.

## ⚠️ Prerequisites

You need to have installed the following software:

- [nodejs](https://nodejs.org/en/) (>=12.13.1)
- [npm](https://npmjs.com/) (>= 6.13.0)

**Note**: All of the external software uses **ENV** parameters, copy _.env.dist_ to _.env_ and set variables.

## 📜Scripts:

### Build

- `build` - Build application by using typescript compiler

### Test

- `test` - Run tests
- `test-watch` - Run tests in watch mode
- `test-ci` - Run tests in CI mode with coverage

### Analyze

- `lint` - Run `eslint`. Output any errors 🚨
- `format` - Run `prettier` to format all the files.
