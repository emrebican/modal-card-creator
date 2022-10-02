import * as S from './styled'

import { useSelector } from 'react-redux'
import { RootState } from '../../../features/store'

// Abstracts
import Rounded_Cancel_Btn from '../../../abstracts/Rounded_Cancel_Btn/Rounded_Cancel_Btn'
import Sign_Up_Btn from '../../../abstracts/Sign_Up_Btn/Sign_Up_Btn'

// Constants
import { colors } from '../../../constants/constants'

const Temp_3 = () => {
  const global = useSelector((state: RootState) => state.global)

  const width_value: number = global.templateSize.width
  const height_value: number = global.templateSize.height
  const templateContent = global.templateContent
  const image: any = global.image

  const buttonColor = useSelector(
    (state: RootState) => state.global.buttonColor
  )

  return (
    <S.Temp_3_Container width_value={width_value} height_value={height_value}>
      <S.Temp_3_Top
        style={{
          backgroundImage: `url(
            ${image ? image : '/template_images/temp3_image.png'})`
        }}
      >
        <Rounded_Cancel_Btn top_value={'23px'} right_value={'23px'} />
      </S.Temp_3_Top>
      <S.Temp_3_Bottom>
        <div className="temp_3_section">
          <span className="temp_3_title">
            {templateContent?.heading || 'Install local now'}
          </span>
          <span className="temp_3_text">
            {templateContent?.text || 'We’ve gone native, try it!'}
          </span>

          {/* FORM */}
          <div className="temp_3_form">
            <Sign_Up_Btn
              text={templateContent?.btn_text1 || 'Continue'}
              clr={
                buttonColor === colors.LightGray || buttonColor === colors.White
                  ? colors.Black
                  : colors.White
              }
              bg_clr={buttonColor}
              width_value={width_value < 480 ? '300px' : '350px'}
              height_value="48px"
              border_value={
                buttonColor == colors.White
                  ? `1px solid ${colors.BlueGray}`
                  : 'none'
              }
            />
            <Sign_Up_Btn
              text={templateContent?.btn_text2 || 'Not now'}
              clr={colors.Black}
              bg_clr="transparent"
              width_value={width_value < 480 ? '300px' : '350px'}
              height_value="48px"
              border_value={`1px solid ${colors.BlueGray}`}
            />
          </div>
        </div>
      </S.Temp_3_Bottom>
    </S.Temp_3_Container>
  )
}

export default Temp_3
