import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  name: 'emre'
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {}
})

export const {} = globalSlice.actions
export default globalSlice.reducer
