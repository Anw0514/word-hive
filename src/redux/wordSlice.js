import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { calculateScore, checkDistance, generateGridArray } from '../utils/gridHelpers'
import { randomLetter } from '../utils/letterHelpers'

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export const submitWord = createAsyncThunk('word/submitWord', async (currentWord) => {
  const word = await axios(url + currentWord)
  return word
})

export const wordSlice = createSlice({
  name: 'word',
  initialState: {
    letters: generateGridArray(),
    currentWord: '',
    currentWordIndexes: [],
    errorMessage: '',
    errorVisible: false,
    score: 0,
    highScore: 0,
    movingDown: true,
  },
  reducers: {
    clearWord: state => {
      state.currentWord = ''
      state.currentWordIndexes = []
      state.letters = state.letters.map(letter => ({...letter, clicked: false}))
    },
    toggleLetter: (state, action) => {
      const letter = action.payload
      // check if letter is already clicked
      if (letter.clicked) {
        // if last letter in current word, remove from current word
        // if letter is clicked but is not last letter, do nothing
        if (state.currentWordIndexes[state.currentWordIndexes.length - 1] === letter.position) {
          state.currentWordIndexes.pop()
          state.currentWord = state.currentWord.substring(0, state.currentWord.length - 1)
          state.letters.splice(letter.position, 1, {...letter, clicked: false})
        }
      } else {
        if (!state.currentWord) {
          // if letter is first one clicked, add to current word
          state.letters.splice(letter.position, 1, {...letter, clicked: true})
          state.currentWord += letter.letter
          state.currentWordIndexes.push(letter.position)
        } else {
          // if letter is in valid range, add to current word
          const oldLetter = state.letters[state.currentWordIndexes[state.currentWordIndexes.length - 1]]
          if (checkDistance(oldLetter, letter)) {
            state.letters.splice(letter.position, 1, {...letter, clicked: true})
            state.currentWord += letter.letter
            state.currentWordIndexes.push(letter.position)
          }
        }
      }
    },
    removeLastLetter: state => {
      if (state.currentWord) {
        const letter = state.letters[state.currentWordIndexes.pop()]
        state.letters.splice(letter.position, 1, {...letter, clicked: false})
        state.currentWord = state.currentWord.substring(0, state.currentWord.length - 1)
      }
    },
    wordTooShort: state => {
      state.errorMessage = 'Invalid word. Must be 2 or more characters.'
      state.errorVisible = true
    },
    clearError: state => {
      state.errorVisible = false
    },
    setHighScore: (state, action) => {
      state.highScore = action.payload
      localStorage.setItem("highScore", action.payload)
    },
    newRow: state => {
      // call deleteBottomRow from ../utils/gridHelpers
      // update state for new letters, all with new ids
    },
    endGame: state => {
      state.letters = generateGridArray()
      state.score = 0
      state.currentWord = ''
      state.currentWordIndexes = []
    }
  },
  extraReducers: builder => {
    builder
      .addCase(submitWord.pending, (state, action) => {
        // loading state
        state.movingDown = false
      })
      .addCase(submitWord.rejected, (state, action) => {
        state.errorMessage = 'Invalid word. Try again.'
        state.errorVisible = true
        state.movingDown = true
      })
      .addCase(submitWord.fulfilled, (state, action) => {
        state.score += calculateScore(state.currentWord.length)
        state.letters = state.letters.map(letter => ({
          ...letter, 
          clicked: false, 
          id: state.currentWordIndexes.includes(letter.position) ? crypto.randomUUID() : letter.id,
          letter: state.currentWordIndexes.includes(letter.position) ? randomLetter() : letter.letter
        }))
        state.currentWord = ''
        state.currentWordIndexes = []
        state.movingDown = true
      })
  }
})

export const { 
  clearWord, 
  toggleLetter, 
  removeLastLetter,
  wordTooShort,
  wordInvalid,
  clearError,
  setHighScore,
  newRow,
  endGame,
} = wordSlice.actions

export default wordSlice.reducer