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
  // Languages
  languages: [],
  exitIntentTargeting: true,
  // Image
  image: undefined,
  templateNumber: 0,
  disables: {
    disableDevice: false,
    disableSeconds: false,
    disableScroll: false,
    disableSource: false,
    disableLanguage: false
  },
  scrollPosition: 0
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
    getTempNumber: (state, action) => {
      state.templateNumber = action.payload.number
      state.templateSize = {
        width: action.payload.width,
        height: action.payload.height
      }
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
    },
    toggleLanguageDisable: (state) => {
      state.disables.disableLanguage = !state.disables.disableLanguage
    },
    // Languages
    getLanguages: (state, action) => {
      state.languages = [...state.languages, action.payload]
    },
    deleteLanguage: (state, action) => {
      state.languages = state.languages.filter(
        (lang) => lang !== action.payload
      )
    },
    deleteAllLanguages: (state) => {
      state.languages = []
    },
    // Exiting Intent Targeting
    toggleExitIntentTargeting: (state) => {
      state.exitIntentTargeting = !state.exitIntentTargeting
    },
    // Image
    getImage: (state, action) => {
      state.image = action.payload
    },
    // ScrollPosition
    setScrollPosition: (state, action) => {
      state.scrollPosition = action.payload
    }
  }
})

export const {
  changeTempSize,
  changeBtnColor,
  getTempNumber,
  getTempContent,
  getTargeting,
  getTargetValues,
  toggleDeviceDisable,
  toggleSecondsDisable,
  toggleScrollDisable,
  toggleSourceDisable,
  toggleLanguageDisable,
  getLanguages,
  deleteLanguage,
  deleteAllLanguages,
  toggleExitIntentTargeting,
  getImage,
  setScrollPosition
} = globalSlice.actions
export default globalSlice.reducer
