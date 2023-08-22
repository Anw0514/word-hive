import { createSlice } from '@reduxjs/toolkit'
import { generateGridArray } from '../utils/gridHelpers'

export const wordSlice = createSlice({
  name: 'word',
  initialState: {
    letters: generateGridArray(),
    currentWord: 'Something'
  },
  reducers: {
    // addLetter, removeLetter, testWord?
    clearWord: state => {
      state.currentWord = ''
    },
    addLetter: (state, action) => {
      state.currentWord += action.payload
    }
  }
})

export const { clearWord, addLetter } = wordSlice.actions

export default wordSlice.reducer