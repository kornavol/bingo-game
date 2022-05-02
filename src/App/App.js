import { useState } from 'react'

import './App.scss'
import Box from '../components/shared/Box'
import Tile from '../components/bingo/Tile'

/* create array from of 100 items as bingo umbers */
const initialSet = [...Array.from({ length: 100 }, (_, i) => i)]
console.log('🚀 ~ file: App.js ~ line 5 ~ initialSet', initialSet)

function App() {
  const [data, setData] = useState(initialSet)
  const [deck, setDeck] = useState(sliceNewDeck(initialSet, 25))
  const [state, setState] = useState({ checked: {} })

  function sliceNewDeck(data, range) {
    return data.slice(0, range)
  }

  function toggle(id) {
    const checked = { ...state.checked, [id]: !state.checked[id] }
    setState({ ...state, checked })
  }

  return (
    <div className="App">
      <h1>Bingo game</h1>
      <div id="board">
        <button>Shuffle</button>
        <div className="grid" id="board">
          {deck.map((item, i) => (
            <Box classNames="box-0">
              <Tile
                isSet={!!state.checked[i]}
                /* add item to state */
                onToggle={(e) => {
                  toggle(i)
                }}
              >
                {item}
              </Tile>
            </Box>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
