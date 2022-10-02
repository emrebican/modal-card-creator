import * as S from './styled'

import { useSelector } from 'react-redux'
import { RootState } from '../../../features/store'

// Abstracts
import Rounded_Cancel_Btn from '../../../abstracts/Rounded_Cancel_Btn/Rounded_Cancel_Btn'
import Sign_Up_Btn from '../../../abstracts/Sign_Up_Btn/Sign_Up_Btn'
import RadioButton from '../../../tools/Radio Button'

// Constants
import { colors } from '../../../constants/constants'

const Temp_11 = () => {
  const global = useSelector((state: RootState) => state.global)

  const width_value: number = global.templateSize.width
  const height_value: number = global.templateSize.height
  const templateContent = global.templateContent
  const image: any = global.image

  const buttonColor = useSelector(
    (state: RootState) => state.global.buttonColor
  )

  return (
    <S.Temp_11_Container
      width_value={width_value}
      height_value={height_value}
      color={buttonColor}
    >
      <Rounded_Cancel_Btn top_value={'23px'} right_value={'23px'} />

      {/* Top */}
      <div className="temp_11_top">
        <span className="temp_11_top_text">
          {templateContent?.plan || 'plans'}
        </span>
        <span className="temp_11_center_text">
          {templateContent?.heading || 'Choose best for you'}
        </span>
        <span className="temp_11_bottom_text">
          {templateContent?.text || 'Only pay for the capacity that you use.'}
        </span>
      </div>

      {/* Center */}
      <div className="temp_11_form">
        <RadioButton
          label_text="Starter"
          info_text={
            templateContent?.radio_1 || '1 free (then $15 per meember / month)'
          }
        />
        <RadioButton
          label_text="Pro"
          info_text={templateContent?.radio_2 || '$19 per member/month'}
        />
        <RadioButton
          label_text="Business"
          info_text={templateContent?.radio_3 || '$29 per member/month'}
        />
      </div>

      {/* Buttons */}
      <div className="temp_11_buttons">
        <Sign_Up_Btn
          text={templateContent?.btn_text1 || 'Cancel'}
          clr={colors.Black}
          bg_clr="transparent"
          width_value={width_value < 480 ? '150px' : '167px'}
          height_value="48px"
          border_value={`1px solid ${colors.BlueGray}`}
        />
        <Sign_Up_Btn
          text={templateContent?.btn_text2 || 'Continue'}
          clr={
            buttonColor === colors.LightGray || buttonColor === colors.White
              ? colors.Black
              : colors.White
          }
          bg_clr={buttonColor}
          width_value={width_value < 480 ? '150px' : '167px'}
          height_value="48px"
          border_value={
            buttonColor == colors.White
              ? `1px solid ${colors.BlueGray}`
              : 'none'
          }
        />
      </div>
    </S.Temp_11_Container>
  )
}

export default Temp_11
