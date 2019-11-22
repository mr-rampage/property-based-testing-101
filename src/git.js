function commit(change, source) {
  console.info('Committing', change)
  return Object.setPrototypeOf(change, source)
}

function revert(source) {
  console.info('Reverting', source)
  return Object.getPrototypeOf(source)
}

module.exports = { commit, revert }