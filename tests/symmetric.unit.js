const test = require('tape')
const git = require('../src/git')

test('commit and revert a changeSet', assert => {
  assert.plan(2)

  let tree = git.commit(
    { message: 'Prototypal inheritance is great!' },
    { message: 'Prototypal inheritance is bad!' }
  )

  assert.same(tree.message, 'Prototypal inheritance is great!')
  assert.same(git.revert(tree).message, 'Prototypal inheritance is bad!')
})