import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isHorizontal: false,
    score: 0,
    errorMessage: '',
    errorVisible: false
  },
  reducers: {
    updateIsHorizontal: state => {
      state.isHorizontal = window.innerHeight < window.innerWidth
    },
    wordTooShort: state => {
      state.errorMessage = 'Invalid word. Must be 3 or more characters.'
      state.errorVisible = true
    },
    wordInvalid: state => {
      state.errorMessage = 'Invalid word. Try again.'
      state.errorVisible = true
    },
    clearError: state => {
      state.errorVisible = false
    }
  }
})

export const { updateIsHorizontal, wordTooShort, wordInvalid, clearError } = appSlice.actions

export default appSlice.reducer