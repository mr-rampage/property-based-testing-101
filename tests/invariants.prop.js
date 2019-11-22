const test = require('tape')
const fc = require('fast-check')
const rbc = require('../src/rbc')

test('totals between accounts should remain constant during a transfer', assert => {
  assert.plan(1)

  assert.doesNotThrow(() => {
    fc.assert(
      fc.property(

        // Arbitaries: AKA Fuzzer
        fc.integer(), fc.integer(), fc.integer(),

        (amount, account1Funds, account2Funds) => {

          // Pre-conditions
          let paolo = rbc.account('Paolo', account1Funds);
          let peter = rbc.account('Peter', account2Funds);

          // Property
          return rbc.totalFunds(rbc.transfer(amount, paolo, peter)) === account1Funds + account2Funds
        }

      )
    )
  })
})