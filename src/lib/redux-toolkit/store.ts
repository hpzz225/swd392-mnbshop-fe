import chosenSlice from './slices/chosen-slice'
import paginationSlice from './slices/pagination-slice'
import popupSlice from './slices/popup-slice'
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
  reducer: {
    popup: popupSlice,
    pagination: paginationSlice,
    chosen: chosenSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
