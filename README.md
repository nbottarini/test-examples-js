[![npm](https://img.shields.io/npm/v/@nbottarini/test-examples.svg)](https://www.npmjs.com/package/@nbottarini/test-examples)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI Status](https://github.com/nbottarini/test-examples-js/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/nbottarini/test-examples-js/actions)

# Test Examples
Simple javascript/typescript utility class to generate test examples

## Installation

Npm:
```
$ npm install --save @nbottarini/test-examples
```

Yarn:
```
$ yarn add @nbottarini/test-examples
```

## Usage

```typescript
const names = new TestExamples(['alice', 'bob', 'charlie'])
names.one() // returns 'alice'
names.one() // returns 'bob'
names.one() // returns 'charlie'
names.one() // returns 'alice'

const phones = TestExamples.build(3, (number) => new Phone(`111-454${number}`))
phones.one() // returns Phone('111-4540')
phones.one() // returns Phone('111-4541')
phones.one() // returns Phone('111-4542')
phones.one() // returns Phone('111-4540')
```
