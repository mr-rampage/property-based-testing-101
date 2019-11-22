const test = require('tape')
const simpleDate = require('../src/simple-date')

test('Format an ISO Date to Month and Day', assert => {
  assert.plan(3)

  assert.same(simpleDate.refactored("2019-06-25"), "Jun 25")
  assert.same(simpleDate.refactored("2019-01-01"), "Jan 1")
  assert.same(simpleDate.refactored("2019-11-03"), "Nov 3")
})