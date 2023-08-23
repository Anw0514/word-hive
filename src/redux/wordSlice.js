import { createSlice } from '@reduxjs/toolkit'
import { generateGridArray } from '../utils/gridHelpers'

export const wordSlice = createSlice({
  name: 'word',
  initialState: {
    letters: generateGridArray(),
    currentWord: '',
    currentWordIndexes: [],
  },
  reducers: {
    // addLetter, removeLetter, testWord?
    clearWord: state => {
      state.currentWord = ''
      state.currentWordIndexes = []
      state.letters = state.letters.map(letter => ({...letter, clicked: false}))
    },
    toggleLetter: (state, action) => {
      const letter = action.payload
      if (letter.clicked) {
        // if letter is clicked AND is last letter in current word, remove from current word
        if (state.currentWordIndexes[state.currentWordIndexes.length - 1] === letter.position) {
          state.currentWordIndexes.pop()
          state.currentWord = state.currentWord.substring(0, state.currentWord.length - 1)
          state.letters.splice(letter.position, 1, {...letter, clicked: false})
        }
        // if letter is clicked but is not last letter, do nothing
      } else {
        // if letter isn't clicked, add to current word
        state.letters.splice(letter.position, 1, {...letter, clicked: true})
        state.currentWord += letter.letter
        state.currentWordIndexes.push(letter.position)
      }
    }
  }
})

export const { clearWord, toggleLetter } = wordSlice.actions

export default wordSlice.reducer