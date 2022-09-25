import * as S from './styled'
import Sign_Up_Btn from '../../../abstracts/Sign_Up_Btn/Sign_Up_Btn'

import { RootState } from '../../../features/store'
import { useSelector } from 'react-redux'

// Abstracts
import Rounded_Cancel_Btn from '../../../abstracts/Rounded_Cancel_Btn/Rounded_Cancel_Btn'

// Constants
import { colors } from '../../../constants/colors'

const Temp_1 = () => {
  const buttonColor = useSelector(
    (state: RootState) => state.global.buttonColor
  )

  return (
    <S.Temp_1_Container>
      <S.Temp_1_Left>
        <div className="temp_1_section">
          <span className="temp_1_title">Sign up</span>
          <span className="temp_1_text">Join new adventure</span>
          <div className="temp_1_form">
            <input type="text" placeholder="Enter full name" />
            <input type="text" placeholder="Enter your email" />
            <Sign_Up_Btn
              text="Sign up"
              clr={
                buttonColor === colors.LightGray || buttonColor === colors.White
                  ? colors.Black
                  : colors.White
              }
              bg_clr={buttonColor}
              width_value="300px"
              height_value="48px"
              border_value="none"
            />
          </div>
          <div className="temp_1_bottom">
            <span>Forgot password</span>
            <span>Log In</span>
          </div>
        </div>
      </S.Temp_1_Left>
      <S.Temp_1_Right>
        <Rounded_Cancel_Btn top_value={'23px'} right_value={'23px'} />
      </S.Temp_1_Right>
    </S.Temp_1_Container>
  )
}

export default Temp_1
