const test = require('tape')
const fc = require('fast-check')
const simpleDate = require('../src/simple-date')

test('For all ISO dates, format them to month and day', assert => {
  assert.plan(1)

  assert.doesNotThrow(() => {
    fc.assert(
      fc.property(
        generateIsoDateString(),
        date => simpleDate.refactored(date) == simpleDate.legacy(date)
      )
    )
  })
})

function generateIsoDateString() {
  return fc.date({ min: new Date(0) }).map(toIsoDateString)
}

function toIsoDateString(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getUTCDate()}`
}