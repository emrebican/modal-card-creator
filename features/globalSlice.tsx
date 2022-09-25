import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Constants
import { colors } from '../constants/colors'

const initialState = {
  buttonColor: colors.Purple,
  templateSize: { width: 740, height: 443 }
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeBtnColor: (state, action) => {
      state.buttonColor = action.payload
    },
    changeTempSize: (state, action) => {
      state.templateSize.width = action.payload.width
      state.templateSize.height = action.payload.height
    }
  }
})

export const { changeBtnColor, changeTempSize } = globalSlice.actions
export default globalSlice.reducer
