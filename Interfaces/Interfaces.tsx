export interface AuxProps {
  children: JSX.Element
}

export interface TitleInterface {
  number: number
  title: string
  explanation?: string
}

interface targetInterface {
  desktop: boolean
  mobile: boolean
}

interface settingsInterface {
  submission: boolean
  data: boolean
}

export interface targetingValuesInterface {
  second: number | string
  scroll: number | string
  source: string
  webhook: string
  settings: settingsInterface
}

// Disables
export interface disablesInterface {
  disableDevice: boolean
  disableSeconds: boolean
  disableScroll: boolean
  disableSource: boolean
  disableLanguage: boolean
}

// Input
export interface inputInterface {
  type: string
  place: string
  value: string
  disable: boolean
}

// Radio
export interface radioInterface {
  label_text: string
  info_text: string
}

// Rounded Cancel Btn
export interface RoundedCancelBtnInterface {
  top_value: string
  right_value: string
}

// Sign up Btn
export interface SignUpBtnInterface {
  width_value: number | string
  height_value: number | string
  bg_clr: string
  clr: string
  text: string
  border_value?: string
}

// Initial Interface
export interface initialInterface {
  buttonColor: string
  templateSize: {
    width: number
    height: number
  }
  templateContent: any
  targetingDevice: targetInterface
  targetValues: targetingValuesInterface
  languages: string[]
  exitIntentTargeting: boolean
  image: any
  disables: disablesInterface
  templateNumber: number
  scrollPosition: number
}

// Devices
export interface deviceInterface {
  type: string
  device: boolean
  disable: boolean
}

/* Conversion */
export interface conversionInterface {
  icon: string
  width?: number
  height?: number
  title: string
  content: string
}

/* FAQ Interface */
export interface faqInterface {
  title: string
  content: string
  icon: any
  handleOpen: any
  handleClose: any
}

export interface Props {
  width_value?: any
  height_value?: any
  img?: any
  bg_color?: any
  bg_clr?: any
  clr?: any
  border_value?: any
  scrollPosition?: any
  top_value?: any
  right_value?: any
  isLoad?: any
}
