import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Constants
import { colors } from '../constants/constants'
import { initialInterface } from '../Interfaces/Interfaces'

const initialState: initialInterface = {
  buttonColor: colors.Purple,
  templateSize: { width: 740, height: 443 },
  templateContent: null,
  // Device
  targetingDevice: {
    desktop: false,
    mobile: false
  },
  targetValues: {
    second: '',
    scroll: '',
    source: ''
  },
  disables: {
    disableDevice: false,
    disableSeconds: false,
    disableScroll: false,
    disableSource: false
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
    },
    getTargetValues: (state, action) => {
      state.targetValues = action.payload
    },
    // Disables
    toggleDeviceDisable: (state) => {
      state.disables.disableDevice = !state.disables.disableDevice
    },
    toggleSecondsDisable: (state) => {
      state.disables.disableSeconds = !state.disables.disableSeconds
    },
    toggleScrollDisable: (state) => {
      state.disables.disableScroll = !state.disables.disableScroll
    },
    toggleSourceDisable: (state) => {
      state.disables.disableSource = !state.disables.disableSource
    }
  }
})

export const {
  changeTempSize,
  changeBtnColor,
  getTempContent,
  getTargeting,
  getTargetValues,
  toggleDeviceDisable,
  toggleSecondsDisable,
  toggleScrollDisable,
  toggleSourceDisable
} = globalSlice.actions
export default globalSlice.reducer
