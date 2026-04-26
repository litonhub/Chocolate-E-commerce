import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/slices/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
})