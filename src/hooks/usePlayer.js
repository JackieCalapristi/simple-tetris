import { useState } from 'react'

import { randomTetromino } from '../tetrominos'

export const usePlayer = () => {
  // these are just two values we have descructured out
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false
  })

  return [player]
}