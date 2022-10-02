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

export interface targetingValuesInterface {
  second: number | string
  scroll: number | string
  source: string
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
  templateNumber: number
  buttonColor: string
  templateSize: {
    width: number
    height: number
  }
  templateContent: any
  targetingDevice: targetInterface
  targetValues: targetingValuesInterface
  disables: disablesInterface
  languages: string[]
  exitIntentTargeting: boolean
  image: any
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
