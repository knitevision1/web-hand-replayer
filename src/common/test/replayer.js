import { hand } from './hand'

export function replay () {
  const store = {}
  const playerAction = /^[\S]*:.*/mg
  const playerStack = /[\S]*\s\([$\d.]*/mg
  const playerActionArr = hand.match(playerAction)
  const playerStackArr = hand.match(playerStack)
  console.log(playerStackArr)
  console.log('asd')

  for (const i of playerActionArr) {
    const player = i.split(':')[0]
    const action = i.split(':')[1].slice(1)
    if (!store[player]) {
      store[player] = {
        ...store[player],
        actions: []
      }
    }
    store[player] = {
      ...store[player],
      actions: [
        ...store[player].actions,
        action
      ]
    }
  }

  console.log(store)
}
