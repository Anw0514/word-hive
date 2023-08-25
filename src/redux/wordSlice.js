import { createSlice } from '@reduxjs/toolkit'
import { checkDistance, generateGridArray, randomLetter } from '../utils/gridHelpers'

export const wordSlice = createSlice({
  name: 'word',
  initialState: {
    letters: generateGridArray(),
    currentWord: '',
    currentWordIndexes: [],
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
    replaceLettersAndClearWord: state => {
      state.letters = state.letters.map(letter => ({
        ...letter, 
        clicked: false, 
        letter: state.currentWordIndexes.includes(letter.position) ? randomLetter() : letter.letter
      }))
      state.currentWord = ''
      state.currentWordIndexes = []
    }
  }
})

export const { clearWord, toggleLetter, replaceLettersAndClearWord, removeLastLetter } = wordSlice.actions

export default wordSlice.reducer