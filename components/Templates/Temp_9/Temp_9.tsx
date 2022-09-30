import * as S from './styled'

import { useSelector } from 'react-redux'
import { RootState } from '../../../features/store'
import Image from 'next/image'

// Abstracts
import Rounded_Cancel_Btn from '../../../abstracts/Rounded_Cancel_Btn/Rounded_Cancel_Btn'
import Sign_Up_Btn from '../../../abstracts/Sign_Up_Btn/Sign_Up_Btn'

// Constants
import { colors } from '../../../constants/constants'

const Temp_9 = () => {
  /* Width & Height */
  const width_value: number = useSelector(
    (state: RootState) => state.global.templateSize.width
  )
  const height_value: number = useSelector(
    (state: RootState) => state.global.templateSize.height
  )

  const templateContent = useSelector(
    (state: RootState) => state.global.templateContent
  )

  const buttonColor = useSelector(
    (state: RootState) => state.global.buttonColor
  )

  return (
    <S.Temp_9_Container
      width_value={width_value}
      height_value={height_value}
      bg_color={buttonColor}
    >
      <S.Temp_9_Section bg_color={buttonColor}>
        <Rounded_Cancel_Btn top_value={'23px'} right_value={'23px'} />
        <span className="temp_9_title">
          {templateContent?.heading || 'Hi, stranger'}
        </span>
        <span
          className="temp_9_text"
          style={{
            width: width_value < 480 ? '260px' : '100%',
            marginBottom: width_value < 480 ? '20px' : '41.5px'
          }}
        >
          {templateContent?.text || 'Sign up now, and get a 30% discount'}
        </span>

        {/* Buttons */}
        <div className="temp_9_buttons">
          <Sign_Up_Btn
            text={templateContent?.btn_text1 || 'Log In'}
            clr={
              buttonColor === colors.Black ||
              buttonColor === colors.Purple ||
              buttonColor === colors.Gray ||
              buttonColor === colors.Orange
                ? colors.White
                : colors.Black
            }
            bg_clr="transparent"
            width_value={width_value < 480 ? '150px' : '167px'}
            height_value="48px"
            border_value={`1px solid ${
              buttonColor === colors.LightGray ? colors.Black : colors.BlueGray
            }`}
          />
          <Sign_Up_Btn
            text={templateContent?.btn_text2 || 'Sign up now'}
            clr={
              buttonColor === colors.LightGray || buttonColor === colors.White
                ? colors.Black
                : colors.White
            }
            bg_clr={buttonColor}
            width_value={width_value < 480 ? '150px' : '167px'}
            height_value="48px"
            border_value={`1px solid ${
              buttonColor === colors.LightGray ? colors.Black : colors.BlueGray
            }`}
          />
        </div>
      </S.Temp_9_Section>
    </S.Temp_9_Container>
  )
}

export default Temp_9
