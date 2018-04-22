export function replay (hand) {
  const store = {}
  const playerAction = /^[\S]*:.*/mg
  const playerStack = /[\S]*\s\(\$\d.*(?=\sin)/mg
  const playerActionArr = hand.match(playerAction)
  const playerStackArr = hand.match(playerStack)

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

  for (const i of playerStackArr) {
    const player = i.split('($')[0].replace(' ', '')
    const stack = i.split('($')[1]
    store[player] = {
      ...store[player],
      stack
    }
  }

  console.log(store)
}
