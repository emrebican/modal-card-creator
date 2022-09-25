import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  buttonColor: '#7D4AEA'
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeBtnColor: (state, action) => {
      state.buttonColor = action.payload
    }
  }
})

export const { changeBtnColor } = globalSlice.actions
export default globalSlice.reducer
