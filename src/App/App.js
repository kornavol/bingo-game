import { useState, useEffect, useRef } from 'react'

/* function to shufle an array */
import arrayShuffle from 'array-shuffle'

import './App.scss'
import '../styles/modules/_animations.scss'
import '../styles/buttons.scss'

import Box from '../components/shared/Box'
import Confetti from '../components/effects/Confetti'

import Tile from '../components/bingo/Tile'
import Content from '../components/bingo/Content'
import ShuffleBtn from '../components/bingo/ShuffleBtn'

/* create array from of 100 items as bingo umbers */
const initialSet = [...Array.from({ length: 100 }, (_, i) => i)]
const initPlayerState = { checked: { 12: true }, won: false }

function App() {
  const [fullSet, setFullSet] = useState(initialSet)
  const [deck, setDeck] = useState(sliceNewDeck(initialSet, 25))
  const [state, setState] = useState(initPlayerState)
  const [currItem, setCurrItem] = useState()
  const [flip, setFlip] = useState(true)

  const numRef = useRef(null)

  function sliceNewDeck(data, range) {
    return arrayShuffle(data.slice(0, range))
  }

  function toggle(id) {
    const checked = { ...state.checked, [id]: !state.checked[id] }
    const won = isWon(checked)
    setState({ ...state, checked, won })
  }

  /*detecting if lines are filled in (based on bingo rules) and there is a win*/
  function isWon(checked) {
    const range = [0, 1, 2, 3, 4]
    return (
      undefined !==
        range.find((row) =>
          range.every((column) => checked[row * 5 + column])
        ) ||
      undefined !==
        range.find((column) =>
          range.every((row) => checked[row * 5 + column])
        ) ||
      range.every((index) => checked[index * 5 + index]) ||
      range.every((index) => checked[index * 5 + 4 - index])
    )
  }

  function getRndNum(data) {
    return data[Math.floor(Math.random() * data.length)]
  }

  const shuffleBtnHandler = () => {
    setDeck(sliceNewDeck(initialSet, 25))
    setState(initPlayerState)
    setFlip(true)
  }

  useEffect(() => {
    setCurrItem(getRndNum(fullSet))
  }, [fullSet])

  useEffect(() => {
    flip &&
      setTimeout(() => {
        setFlip(false)
      }, 2000)
  }, [flip])

  useEffect(() => {
    setTimeout(() => {
      numRef.current.classList.remove('fade-in')
    }, 1000)
  }, [currItem])

  return (
    <div className="App">
      <h1>Bingo game</h1>

      <div id="content">
        <Box classNames="box-1">
          <Content reference={numRef}>{currItem}</Content>
        </Box>

        {/* <button onClick={() => setCurrItem(getRndNum(fullSet))}> */}
        <button
          className='btn-1'
          onClick={() => {
            if (numRef.current.classList.contains('fade-in') === false) {
              numRef.current.classList.add('fade-in')
              setFullSet((prev) => prev.filter((el) => el !== currItem))
            }
          }}
        >
          Next number
        </button>
      </div>

      <div id="board">
        <div className="grid" id="board">
          {deck.map((item, i) => {
            if (i === 12) {
              return <ShuffleBtn key='shuffle-btn' disabled={flip} onClick={shuffleBtnHandler} />
            }

            return (
              <Box
                key={item}
                classNames={`box-0 ${flip && 'flip-animation'}`}
              >
                <Tile isSet={!!state.checked[i]} onToggle={(e) => toggle(i)}>
                  {item}
                </Tile>
              </Box>
            )
          })}
        </div>
      </div>
      {state.won && <Confetti />}
    </div>
  )
}

export default App
