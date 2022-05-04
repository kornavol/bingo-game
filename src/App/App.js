import { useState, useEffect, useRef } from 'react'

/* function to shufle an array */
import arrayShuffle from 'array-shuffle'
/* _.isEqual method to compare two object by values */
import _ from 'lodash'

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
const initPlayerState = {
  player1: { checked: { 12: true }, won: false },
  player2: { checked: { 12: true }, won: false }
}
const initialFlip = { player1: true, player2: true }

function App() {
  /* Full bingo set randomly get a new tile  */
  const [fullSet, setFullSet] = useState(initialSet)
  const [deck, setDeck] = useState({
    player1: sliceNewDeck(initialSet, 25),
    player2: sliceNewDeck(initialSet, 25)
  })
  /* Boar's state. Which tiles are filled, a status of a win   */
  const [state, setState] = useState(initPlayerState)
  const [currItem, setCurrItem] = useState()
  /* For flip animation */
  const [flip, setFlip] = useState(initialFlip)
  /* launch confetti */
  const [confetti, setConfetti] = useState(false)

  const numRef = useRef(null)

  function sliceNewDeck(data, range) {
    return arrayShuffle(data.slice(0, range))
  }

  /* Checking a status based on the current board situation */
  function toggle(id, player) {
    const checked = {
      ...state[player].checked,
      [id]: !state[player].checked[id]
    }
    const won = isWon(checked)

    if (won && !_.isEqual(state[player].won, won)) setConfetti(true)

    setState({ ...state, [player]: { checked, won } })
  }

  /* Detecting if lines are filled in (based on bingo rules) and there is a win*/
  function isWon(checked) {
    const range = [0, 1, 2, 3, 4]

    /* define each case separately and sent it as object of state */
    const row = range.filter((row) =>
      range.every((column) => checked[row * 5 + column])
    )
    const column = range.filter((column) =>
      range.every((row) => checked[row * 5 + column])
    )
    const lDiagonal = range.every((index) => checked[index * 5 + index])
    const rDiagonal = range.every((index) => checked[index * 5 + 4 - index])

    if (row.length > 0 || column.length > 0 || lDiagonal || rDiagonal) {
      return { row, column, lDiagonal, rDiagonal }
    }
    return null
  }

  function getRndNum(data) {
    return data[Math.floor(Math.random() * data.length)]
  }

  const shuffleBtnHandler = (player) => {
    if (player === 'player1') {
      setDeck((prev) => {
        return { ...prev, [player]: sliceNewDeck(initialSet, 25) }
      })
      setState((prev) => {
        return { ...prev, [player]: { checked: { 12: true }, won: false } }
      })
    }

    if (player === 'player2') {
      setDeck((prev) => {
        return { ...prev, [player]: sliceNewDeck(initialSet, 25) }
      })
      setState((prev) => {
        return { ...prev, [player]: { checked: { 12: true }, won: false } }
      })
    }

    setFlip((prev) => {
      return { ...prev, [player]: true }
    })
  }

  useEffect(() => {
    setCurrItem(getRndNum(fullSet))
  }, [fullSet])

  useEffect(() => {
    if (flip.player1 || flip.player2) {
      const resetFlip = { player1: false, player2: false }
      const timeoutFlip = setTimeout(() => {
        setFlip(resetFlip)
      }, 2000)

      return () =>  clearTimeout(timeoutFlip)
    }
  }, [flip])

  useEffect(() => {
    const timeoutFadeIn = setTimeout(() => {
      numRef.current.classList.remove('fade-in')
    }, 1000)
    return () =>  clearTimeout(timeoutFadeIn)
  }, [currItem])

  useEffect(() => {
    if (confetti) {
      const timeoutConf = setTimeout(() => {
        setConfetti(false)
      }, 5000)
      return () => clearTimeout(timeoutConf)
    }
  }, [confetti])

  return (
    <div className="App">
      <h1>Bingo game</h1>

      <div id="content">
        <Box classNames="box-1">
          <Content reference={numRef}>{currItem}</Content>
        </Box>

        <button
          id="getNextNum-btn"
          className="btn-1"
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
        <div className="grid" id="player-1">
          {deck.player1.map((item, i) => {
            if (i === 12) {
              return (
                <ShuffleBtn
                  key="shuffle-btn"
                  disabled={flip.player1}
                  onClick={() => shuffleBtnHandler('player1')}
                />
              )
            }

            return (
              <Box
                key={item}
                classNames={`box-0 ${flip.player1 && 'flip-animation'}`}
              >
                <Tile
                  isSet={!!state.player1.checked[i]}
                  onToggle={(e) => toggle(i, 'player1')}
                >
                  {item}
                </Tile>
              </Box>
            )
          })}
        </div>

        <div className="grid" id="player-2">
          {deck.player2.map((item, i) => {
            if (i === 12) {
              return (
                <ShuffleBtn
                  key="shuffle-btn"
                  disabled={flip.player2}
                  onClick={() => shuffleBtnHandler('player2')}
                />
              )
            }

            return (
              <Box
                key={item}
                classNames={`box-0 ${flip.player2 && 'flip-animation'}`}
              >
                <Tile
                  isSet={!!state.player2.checked[i]}
                  onToggle={(e) => toggle(i, 'player2')}
                >
                  {item}
                </Tile>
              </Box>
            )
          })}
        </div>
      </div>
      {confetti ? <Confetti /> : null}
    </div>
  )
}

export default App
