const moment = require('moment')

function legacy(date) {
  const jsDate = new Date(date)
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
  ]
  return `${monthNames[jsDate.getUTCMonth()]} ${jsDate.getUTCDate()}`
}

function refactored(date) {
  return moment(date).format('MMM D')
}

module.exports = { legacy, refactored }