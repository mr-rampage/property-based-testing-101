const test = require('tape')
const uppercase = require('../src/uppercase')

test('uppercase', assert => {
  assert.plan(1)
  assert.equals(uppercase('Hello'), 'HELLO')
})