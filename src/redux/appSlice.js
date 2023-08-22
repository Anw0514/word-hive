import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isHorizontal: false,
    score: 0
  },
  reducers: {
    updateIsHorizontal: state => {
        state.isHorizontal = window.innerHeight < window.innerWidth
    }
  }
})

export const { updateIsHorizontal } = appSlice.actions

export default appSlice.reducer