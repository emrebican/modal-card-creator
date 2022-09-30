import * as S from './styled'

import { useSelector } from 'react-redux'
import { RootState } from '../../../features/store'
import Image from 'next/image'

// Abstracts
import Rounded_Cancel_Btn from '../../../abstracts/Rounded_Cancel_Btn/Rounded_Cancel_Btn'
import Sign_Up_Btn from '../../../abstracts/Sign_Up_Btn/Sign_Up_Btn'

// Constants
import { colors } from '../../../constants/constants'

const Temp_6 = () => {
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
    <S.Temp_6_Container width_value={width_value} height_value={height_value}>
      <div className="temp_6_section">
        <S.Icon color={buttonColor}>
          <Image
            src="/template_images/temp6_image.svg"
            width={36}
            height={44}
          />
        </S.Icon>
        <Rounded_Cancel_Btn top_value={'23px'} right_value={'23px'} />
        <div className="temp_6_wrapper">
          <span className="temp_6_title">
            {templateContent?.heading || 'Delete your profile'}
          </span>
          <span className="temp_6_text1">
            {templateContent?.text1 ||
              'Your profile will be automatically deleted after 1 month.'}
          </span>
          <span className="temp_6_text2">
            {templateContent?.text2 ||
              'You won’t be able to access to your profile after 30.08.2021.'}
          </span>
        </div>

        {/* Buttons */}
        <div className="temp_6_buttons">
          <Sign_Up_Btn
            text={templateContent?.btn_text2 || 'Delete my profile'}
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
          <Sign_Up_Btn
            text={templateContent?.btn_text1 || 'Cancel'}
            clr={colors.Black}
            bg_clr="transparent"
            width_value={width_value < 480 ? '306px' : '350px'}
            height_value="48px"
            border_value={`1px solid ${colors.BlueGray}`}
          />
        </div>
      </div>
    </S.Temp_6_Container>
  )
}

export default Temp_6
