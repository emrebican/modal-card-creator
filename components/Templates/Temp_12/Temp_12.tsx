import * as S from './styled'

import { useSelector } from 'react-redux'
import { RootState } from '../../../features/store'

// Abstracts
import Rounded_Cancel_Btn from '../../../abstracts/Rounded_Cancel_Btn/Rounded_Cancel_Btn'
import Sign_Up_Btn from '../../../abstracts/Sign_Up_Btn/Sign_Up_Btn'
import RadioButton from '../../../tools/Radio Button'

// Constants
import { colors } from '../../../constants/constants'

const Temp_12 = () => {
  const global = useSelector((state: RootState) => state.global)

  const width_value: number = global.templateSize.width
  const height_value: number = global.templateSize.height
  const templateContent = global.templateContent
  const image: any = global.image

  const buttonColor = useSelector(
    (state: RootState) => state.global.buttonColor
  )

  return (
    <S.Temp_12_Container
      width_value={width_value}
      height_value={height_value}
      color={buttonColor}
    >
      <Rounded_Cancel_Btn top_value={'23px'} right_value={'23px'} />

      {/* Top */}
      <div className="temp_12_top">
        <span className="temp_12_center_text">
          {templateContent?.heading || 'Subscribe to our newsletter'}
        </span>
        <span className="temp_12_bottom_text">
          {templateContent?.text || 'Receive the flash news in your inbox.'}
        </span>
      </div>

      {/* Center */}
      <div className="temp_12_form">
        <input
          type="text"
          placeholder={templateContent?.input || 'Enter your email'}
        />
        <div className="radio_label">
          <RadioButton label_text="" info_text="" />
          <span className="temp_12_label">
            {templateContent.radio ||
              'By subscribe this form I agree to Privacy Policy.'}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="temp_12_buttons">
        <Sign_Up_Btn
          text={templateContent?.btn_text || 'Sign up now'}
          clr={
            buttonColor === colors.LightGray || buttonColor === colors.White
              ? colors.Black
              : colors.White
          }
          bg_clr={buttonColor}
          width_value="168px"
          height_value="48px"
          border_value={
            buttonColor == colors.LightGray
              ? `1px solid ${colors.Gray}`
              : `1px solid ${colors.BlueGray}`
          }
        />
      </div>
    </S.Temp_12_Container>
  )
}

export default Temp_12
