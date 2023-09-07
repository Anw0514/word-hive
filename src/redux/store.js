import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import wordReducer from './wordSlice'

export default configureStore({
  reducer: {
    app: appReducer,
    word: wordReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["word/submitWord/fulfilled"],
      },
    }),
})