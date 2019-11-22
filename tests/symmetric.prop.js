const test = require('tape')
const fc = require('fast-check')
const git = require('../src/git')

test('reverting a commit should result in no change', assert => {
  assert.plan(1)

  assert.doesNotThrow(() => {
    fc.assert(
      fc.property(
        fc.object(), fc.object(),
        (changeSet, sourceTree) =>
          git.revert(git.commit(changeSet, sourceTree)) === sourceTree
      ),
    )
  })
})