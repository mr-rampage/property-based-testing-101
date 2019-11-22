function account(holder, funds) {
  return { holder, funds }
}

function transfer(amount, from, to) {
  return [
    debit(amount, from),
    credit(amount, to)
  ]
}

function debit(amount, account) {
  console.info(`Debit to ${account.holder} of ${amount}`)
  return { ...account, funds: account.funds - amount }
}

function credit(amount, account) {
  console.info(`Credit to ${account.holder} of ${amount}`)
  return { ...account, funds: account.funds + amount }
}

function totalFunds(accounts) {
  return accounts.reduce((total, account) => total + account.funds, 0)
}

module.exports = { account, transfer, totalFunds }