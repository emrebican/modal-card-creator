import * as S from './styled'

import { useSelector } from 'react-redux'
import { RootState } from '../../../features/store'
import Image from 'next/image'

// Abstracts
import Rounded_Cancel_Btn from '../../../abstracts/Rounded_Cancel_Btn/Rounded_Cancel_Btn'
import Sign_Up_Btn from '../../../abstracts/Sign_Up_Btn/Sign_Up_Btn'

// Constants
import { colors } from '../../../constants/constants'

const Temp_4 = () => {
  const global = useSelector((state: RootState) => state.global)

  const width_value: number = global.templateSize.width
  const height_value: number = global.templateSize.height
  const templateContent = global.templateContent
  const image: any = global.image

  const buttonColor = useSelector(
    (state: RootState) => state.global.buttonColor
  )

  return (
    <S.Temp_4_Container width_value={width_value} height_value={height_value}>
      <div className="temp_4_section">
        <S.Icon color={buttonColor} img={image}>
          <Image
            src={image ? image : '/template_images/temp4_image.svg'}
            width={image ? 90 : 36}
            height={image ? 90 : 44}
            objectFit="cover"
            className="temp_4_img"
          />
        </S.Icon>
        <Rounded_Cancel_Btn top_value={'23px'} right_value={'23px'} />
        <span className="temp_4_title">
          {templateContent?.heading || 'Security Code'}
        </span>
        <span className="temp_4_text">
          {templateContent?.text || 'This code expires in 24 hours'}
        </span>

        {/* FORM */}
        <div className="temp_4_form">
          <input
            type="text"
            placeholder={templateContent?.input_1 || 'Code'}
            width_value={width_value}
          />
        </div>
        {/* Buttons */}
        <div className="temp_4_buttons">
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
      </div>
    </S.Temp_4_Container>
  )
}

export default Temp_4
