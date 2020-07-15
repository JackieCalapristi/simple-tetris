import { useState } from 'react'

import { randomTetromino } from '../tetrominos'

export const usePlayer = () => {
  // these are just two values we have descructured out
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false
  })

  const updatePlayerPos = ({ e, y, collided}) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
      collided
    }))
  } 

  return [player]
}