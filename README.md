# Object progress

know the percentage of advance of an object

## Quick Start

Install:

```sh
$ npm i -S object-progress
```

Example:

```js
const progress = require('object-progress')

const fix = 2
const validItems = ['name', 'email', 'age', 'city']
const doc = {
  name: 'robot',
  email: 'me@robot.local',
  age: null,
  city: ''
}

let { avg, count, invalid } = progress(validItems, doc, fix)
console.log(avg) // 0.60
console.log(count) // 3
console.log(invalid) // [ 'age', 'city' ]
```

### Testing

```sh
$ npm test
```
