import * as S from './styled'
import { SignUpBtnInterface } from '../../Interfaces/Interfaces'

const Sign_Up_Btn = ({
  width_value,
  height_value,
  bg_clr,
  clr,
  text,
  border_value
}: SignUpBtnInterface) => {
  return (
    <S.Button
      width_value={width_value}
      height_value={height_value}
      bg_clr={bg_clr}
      clr={clr}
      border_value={border_value}
    >
      {text}
    </S.Button>
  )
}

export default Sign_Up_Btn
