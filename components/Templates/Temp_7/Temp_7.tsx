import * as S from './styled'

import { useSelector } from 'react-redux'
import { RootState } from '../../../features/store'
import Image from 'next/image'

// Abstracts
import Rounded_Cancel_Btn from '../../../abstracts/Rounded_Cancel_Btn/Rounded_Cancel_Btn'
import Sign_Up_Btn from '../../../abstracts/Sign_Up_Btn/Sign_Up_Btn'

// Constants
import { colors } from '../../../constants/constants'

const Temp_7 = () => {
  const global = useSelector((state: RootState) => state.global)

  const width_value: number = global.templateSize.width
  const height_value: number = global.templateSize.height
  const templateContent = global.templateContent
  const image: any = global.image

  const buttonColor = useSelector(
    (state: RootState) => state.global.buttonColor
  )

  return (
    <S.Temp_7_Container width_value={width_value} height_value={height_value}>
      <div className="temp_7_section">
        <Image
          src={image ? image : '/template_images/temp7_image.png'}
          width={160}
          height={160}
          objectFit="cover"
          className="temp_7_img"
        />
        <Rounded_Cancel_Btn top_value={'23px'} right_value={'23px'} />
        <span className="temp_7_title">
          {templateContent?.heading || 'Check your email'}
        </span>
        <span className="temp_7_text">
          {templateContent?.text ||
            'Once you deleted your account, you’ll lose all data associatted with it.'}
        </span>

        {/* FORM */}
        <div className="temp_7_form">
          <input
            type="text"
            placeholder={templateContent?.input_1 || 'Enter your email'}
          />
        </div>
        {/* Buttons */}
        <div className="temp_7_buttons">
          <Sign_Up_Btn
            text={templateContent?.btn_text || 'Sign up'}
            clr={
              buttonColor === colors.LightGray || buttonColor === colors.White
                ? colors.Black
                : colors.White
            }
            bg_clr={buttonColor}
            width_value={width_value < 480 ? '315px' : '349px'}
            height_value="48px"
            border_value={
              buttonColor == colors.White
                ? `1px solid ${colors.BlueGray}`
                : 'none'
            }
          />
        </div>
        <div
          className="temp_7_bottom"
          style={{
            margin: width_value < 480 ? '10px 0' : '20px 0 0 0',
            textAlign: width_value < 480 ? 'center' : 'left'
          }}
        >
          <span>
            {templateContent?.bottom_text || 'Already have an account?'}
          </span>
        </div>
      </div>
    </S.Temp_7_Container>
  )
}

export default Temp_7
