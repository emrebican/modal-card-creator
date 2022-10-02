import * as S from './styled'

import { useSelector } from 'react-redux'
import { RootState } from '../../../features/store'
import Image from 'next/image'

// Abstracts
import Rounded_Cancel_Btn from '../../../abstracts/Rounded_Cancel_Btn/Rounded_Cancel_Btn'
import Sign_Up_Btn from '../../../abstracts/Sign_Up_Btn/Sign_Up_Btn'

// Constants
import { colors } from '../../../constants/constants'

const Temp_8 = () => {
  const global = useSelector((state: RootState) => state.global)

  const width_value: number = global.templateSize.width
  const height_value: number = global.templateSize.height
  const templateContent = global.templateContent
  const image: any = global.image

  const buttonColor = useSelector(
    (state: RootState) => state.global.buttonColor
  )

  return (
    <S.Temp_8_Container width_value={width_value} height_value={height_value}>
      <div className="temp_8_section">
        <Rounded_Cancel_Btn top_value={'20px'} right_value={'20px'} />
        <div className="temp_8_wrapper">
          <span className="temp_8_title">
            {templateContent?.heading || "The file is on it's way"}
          </span>
          <span className="temp_8_text1">
            {templateContent?.text1 ||
              'You’ll get an notified when the receiver has opened the email.'}
          </span>
        </div>

        {/* Buttons */}
        <div className="temp_8_buttons">
          <Sign_Up_Btn
            text={templateContent?.btn_text || 'Go to dashboard'}
            clr={
              buttonColor === colors.LightGray || buttonColor === colors.White
                ? colors.Black
                : colors.White
            }
            bg_clr={buttonColor}
            width_value={width_value < 480 ? '306px' : '350px'}
            height_value="48px"
            border_value={
              buttonColor == colors.White
                ? `1px solid ${colors.BlueGray}`
                : 'none'
            }
          />
        </div>
      </div>
    </S.Temp_8_Container>
  )
}

export default Temp_8
