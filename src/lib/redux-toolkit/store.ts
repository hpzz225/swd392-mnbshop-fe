import popupSlice from './slices/popup-slice'
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
  reducer: {
    popup: popupSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
