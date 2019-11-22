const test = require('tape')
const rbc = require('../src/rbc')

test('should transfer funds between accounts', assert => {
  assert.plan(2)

  let paolo = rbc.account('Paolo', 10);
  let peter = rbc.account('Peter', 5);

  [paolo, peter] = rbc.transfer(5, paolo, peter)

  assert.equals(paolo.funds, 5, 'Paolo now has $5')
  assert.equals(peter.funds, 10, 'Peter now has $10')
})