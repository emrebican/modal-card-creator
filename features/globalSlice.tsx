import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Constants
import { colors } from '../constants/constants'
import { initialInterface } from '../Interfaces/Interfaces'

const initialState: initialInterface = {
  buttonColor: colors.Purple,
  templateSize: { width: 740, height: 443 },
  templateContent: null,
  targetingDevice: {
    desktop: false,
    mobile: false
  }
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeTempSize: (state, action) => {
      state.templateSize.width = action.payload.width
      state.templateSize.height = action.payload.height
    },
    changeBtnColor: (state, action) => {
      state.buttonColor = action.payload
    },
    getTempContent: (state, action) => {
      state.templateContent = action.payload
    },
    getTargeting: (state, action) => {
      state.targetingDevice = action.payload
    }
  }
})

export const { changeTempSize, changeBtnColor, getTempContent, getTargeting } =
  globalSlice.actions
export default globalSlice.reducer
