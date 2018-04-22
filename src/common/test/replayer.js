/* eslint-disable no-unused-vars */
export function replay (hand) {
  const store = {}

  const preflopActions = hand.match(/(?:[^:\s]+:.*\s+)+(?=.*?FLOP)/mg)[0].split('\n')
  const flopActions = hand.match(/(?:[^:\s]+:.*\s+)+(?=.*?TURN)/mg)[0].split('\n')
  const turnActions = hand.match(/(?:[^:\s]+:.*\s+)+(?=.*?RIVER)/mg)[0].split('\n')
  const riverActions = hand.match(/(?:[^:\s]+:.*\s+)+(?=.*?SHOW)/mg)[0].split('\n')
  const playerStack = hand.match(/[\S]*\s\(\$\d.*(?=\sin)/mg)

  preflopActions.pop()
  flopActions.pop()
  turnActions.pop()
  riverActions.pop()

  for (const i of preflopActions) {
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

  for (const i of flopActions) {
    const player = i.split(':')[0]
    const action = i.split(':')[1].slice(1)
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

  for (const i of turnActions) {
    const player = i.split(':')[0]
    const action = i.split(':')[1].slice(1)
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

  for (const i of riverActions) {
    const player = i.split(':')[0]
    const action = i.split(':')[1].slice(1)
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

  for (const i of playerStack) {
    const player = i.split('($')[0].replace(' ', '')
    const stack = i.split('($')[1]
    store[player] = {
      ...store[player],
      stack
    }
  }

  console.log(store)
}
