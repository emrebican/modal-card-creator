import * as S from './styled'

import { useSelector } from 'react-redux'
import { RootState } from '../../../features/store'

// Abstracts
import Rounded_Cancel_Btn from '../../../abstracts/Rounded_Cancel_Btn/Rounded_Cancel_Btn'
import Sign_Up_Btn from '../../../abstracts/Sign_Up_Btn/Sign_Up_Btn'

// Constants
import { colors } from '../../../constants/constants'

const Temp_1 = () => {
  const global = useSelector((state: RootState) => state.global)

  const width_value = global.templateSize.width
  const height_value = global.templateSize.height
  const templateContent = global.templateContent
  const image: any = global.image

  const buttonColor = useSelector(
    (state: RootState) => state.global.buttonColor
  )

  return (
    <S.Temp_1_Container width_value={width_value} height_value={height_value}>
      <S.Temp_1_Left width_value={width_value} height_value={height_value}>
        <div className="temp_1_section">
          <span className="temp_1_title">
            {templateContent?.heading || 'Sign up'}
          </span>
          <span className="temp_1_text">
            {templateContent?.text || 'Join new adventure'}
          </span>
          {/* FORM */}
          <div className="temp_1_form">
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
              width_value="300px"
              height_value="48px"
              border_value={
                buttonColor == colors.White
                  ? `1px solid ${colors.BlueGray}`
                  : 'none'
              }
            />
          </div>
          <div className="temp_1_bottom">
            <span>
              {templateContent?.bottom_text ||
                'By signing up, you agree to Privacy Policy'}
            </span>
          </div>
        </div>
      </S.Temp_1_Left>

      <S.Temp_1_Right
        width_value={width_value}
        style={{
          backgroundImage: `url(
            ${image ? image : '/template_images/temp1_image.png'})`
        }}
      >
        <Rounded_Cancel_Btn top_value={'23px'} right_value={'23px'} />
      </S.Temp_1_Right>
    </S.Temp_1_Container>
  )
}

export default Temp_1
