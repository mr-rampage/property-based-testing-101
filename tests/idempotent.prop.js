const test = require('tape')
const fc = require('fast-check')
const uppercase = require('../src/uppercase')

test('uppercase is idempotent', assert => {
  assert.plan(1)

  assert.doesNotThrow(() => {
    fc.assert(
      fc.property(
        fc.string(),
        inputString => uppercase(uppercase(inputString)) === uppercase(inputString)
      )
    )
  })
})
