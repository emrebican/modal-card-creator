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

// Rounded Cancel Btn
export interface RoundedCancelBtnInterface {
  top_value: string
  right_value: string
}

// Sign up Btn
export interface SignUpBtnInterface {
  width_value: string
  height_value: string
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
  disableDevice: boolean
}

// Devices
export interface deviceInterface {
  type: string
  logo: string
  device: boolean
  disable: boolean
}
