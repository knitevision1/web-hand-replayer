/* eslint-disable no-unused-vars */
export function replay (hand) {
  const store = {}

  const preflopActions = /(?:[^:\s]+:.*\s+)+(?=.*?FLOP)/mg
  const flopActions = /(?:[^:\s]+:.*\s+)+(?=.*?TURN)/mg
  const turnActions = /(?:[^:\s]+:.*\s+)+(?=.*?RIVER)/mg
  const riverActions = /(?:[^:\s]+:.*\s+)+(?=.*?SHOW)/mg

  const playerStack = /[\S]*\s\(\$\d.*(?=\sin)/mg

  const preflopActionsArr = hand.match(preflopActions)[0].split('\n')
  const flopActionsArr = hand.match(flopActions)[0].split('\n')
  const turnActionsArr = hand.match(turnActions)[0].split('\n')
  const riverActionsArr = hand.match(riverActions)[0].split('\n')
  preflopActionsArr.pop()
  flopActionsArr.pop()
  turnActionsArr.pop()
  riverActionsArr.pop()

  const playerStackArr = hand.match(playerStack)

  for (const i of preflopActionsArr) {
    const player = i.split(':')[0]
    const action = i.split(':')[1].slice(1)
    if (!store[player]) {
      store[player] = {
        ...store[player],
        actions: {
          preflop: [],
          flop: [],
          turn: [],
          river: []
        }
      }
    }
    store[player] = {
      ...store[player],
      actions: {
        ...store[player].actions,
        preflop: [
          ...store[player].actions.preflop,
          action
        ]
      }
    }
  }

  for (const i of flopActionsArr) {
    const player = i.split(':')[0]
    const action = i.split(':')[1].slice(1)
    if (!store[player]) {
      store[player] = {
        ...store[player],
        actions: {
          flop: []
        }
      }
    }
    store[player] = {
      ...store[player],
      actions: {
        ...store[player].actions,
        flop: [
          ...store[player].actions.flop,
          action
        ]
      }
    }
  }
  for (const i of turnActionsArr) {
    const player = i.split(':')[0]
    const action = i.split(':')[1].slice(1)
    if (!store[player]) {
      store[player] = {
        ...store[player],
        actions: {
          turn: []
        }
      }
    }
    store[player] = {
      ...store[player],
      actions: {
        ...store[player].actions,
        turn: [
          ...store[player].actions.turn,
          action
        ]
      }
    }
  }

  for (const i of riverActionsArr) {
    const player = i.split(':')[0]
    const action = i.split(':')[1].slice(1)
    if (!store[player]) {
      store[player] = {
        ...store[player],
        actions: {
          river: []
        }
      }
    }
    store[player] = {
      ...store[player],
      actions: {
        ...store[player].actions,
        river: [
          ...store[player].actions.river,
          action
        ]
      }
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
