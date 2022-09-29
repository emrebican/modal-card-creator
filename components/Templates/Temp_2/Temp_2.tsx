import * as S from './styled'

import { useSelector } from 'react-redux'
import { RootState } from '../../../features/store'

// Abstracts
import Rounded_Cancel_Btn from '../../../abstracts/Rounded_Cancel_Btn/Rounded_Cancel_Btn'
import Sign_Up_Btn from '../../../abstracts/Sign_Up_Btn/Sign_Up_Btn'

// Constants
import { colors } from '../../../constants/constants'

const Temp_2 = () => {
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
    <S.Temp_2_Container width_value={width_value} height_value={height_value}>
      <S.Temp_2_Top>
        <Rounded_Cancel_Btn top_value={'21px'} right_value={'20px'} />
      </S.Temp_2_Top>
      <S.Temp_2_Bottom>
        <div className="temp_2_section">
          <span className="temp_2_title">
            {templateContent?.heading || 'Hello stranger'}
          </span>
          <span className="temp_2_text">
            {templateContent?.text || 'Sign up now and get 30% discount'}
          </span>

          {/* FORM */}
          <div className="temp_2_form">
            <input
              type="text"
              placeholder={templateContent?.input_1 || 'Enter full name'}
            />
            <input
              type="text"
              placeholder={templateContent?.input_2 || 'Enter your email'}
            />
            <Sign_Up_Btn
              text={templateContent?.btn_text || 'Sign up'}
              clr={
                buttonColor === colors.LightGray || buttonColor === colors.White
                  ? colors.Black
                  : colors.White
              }
              bg_clr={buttonColor}
              width_value={width_value < 480 ? '300px' : '350px'}
              height_value="48px"
              border_value="none"
            />
          </div>
          <div
            className="temp_2_bottom"
            style={{
              margin: width_value < 480 ? '10px 0' : ''
            }}
          >
            <span>
              {templateContent?.bottom_text || 'Already have an account?'}
            </span>
          </div>
        </div>
      </S.Temp_2_Bottom>
    </S.Temp_2_Container>
  )
}

export default Temp_2
