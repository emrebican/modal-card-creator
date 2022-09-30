import * as S from './styled'

import { useSelector } from 'react-redux'
import { RootState } from '../../../features/store'
import Image from 'next/image'

// Abstracts
import Rounded_Cancel_Btn from '../../../abstracts/Rounded_Cancel_Btn/Rounded_Cancel_Btn'
import Sign_Up_Btn from '../../../abstracts/Sign_Up_Btn/Sign_Up_Btn'

// Constants
import { colors } from '../../../constants/constants'

const Temp_5 = () => {
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
    <S.Temp_5_Container width_value={width_value} height_value={height_value}>
      <div className="temp_5_section">
        <Image src="/template_images/temp5_image.png" width={90} height={90} />
        <Rounded_Cancel_Btn top_value={'23px'} right_value={'23px'} />
        <span className="temp_5_title">
          {templateContent?.heading || 'Join our mail list'}
        </span>
        <span
          className="temp_5_text"
          style={{ marginBottom: width_value < 480 ? '20px' : '41.5px' }}
        >
          {templateContent?.text || 'Save up to 30% of your next order'}
        </span>

        {/* FORM */}
        <div className="temp_5_form">
          <input
            type="text"
            placeholder={templateContent?.input_1 || 'Enter your email'}
            width_value={width_value}
            style={{ marginBottom: width_value < 480 ? '20px' : '31px' }}
          />
        </div>
        {/* Buttons */}
        <div className="temp_5_buttons">
          <Sign_Up_Btn
            text={templateContent?.btn_text1 || 'Later'}
            clr={colors.Black}
            bg_clr="transparent"
            width_value={width_value < 480 ? '150px' : '167px'}
            height_value="48px"
            border_value={`1px solid ${colors.BlueGray}`}
          />
          <Sign_Up_Btn
            text={templateContent?.btn_text2 || 'Join now'}
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
      </div>
    </S.Temp_5_Container>
  )
}

export default Temp_5
