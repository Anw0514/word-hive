import { createSlice } from '@reduxjs/toolkit'
import { generateGridArray } from '../utils/gridHelpers'

export const wordSlice = createSlice({
  name: 'word',
  initialState: {
    letters: generateGridArray(),
    currentWord: ''
  },
  reducers: {
    // addLetter, removeLetter, testWord?
  }
})

export default wordSlice.reducer