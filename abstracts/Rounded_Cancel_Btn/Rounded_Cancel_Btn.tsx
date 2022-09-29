import * as S from './styled'
import { RoundedCancelBtnInterface } from '../../Interfaces/Interfaces'

const Rounded_Cancel_Btn = ({
  top_value,
  right_value
}: RoundedCancelBtnInterface) => {
  return (
    <S.Img
      top_value={top_value}
      right_value={right_value}
      src="/images/rounded_cancel.svg"
      width={30}
      height={30}
      className="rounded_cancel_btn"
    />
  )
}

export default Rounded_Cancel_Btn
