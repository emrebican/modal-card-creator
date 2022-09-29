import * as S from './styled'
import Temp_1 from '../../components/Templates/Temp_1/Temp_1'
import Temp_2 from '../../components/Templates/Temp_2/Temp_2'

import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'

const TempDisplayArea = () => {
  const templateNumber = useSelector(
    (state: RootState) => state.global.templateNumber
  )
  const sizes = useSelector((state: RootState) => state.global.templateSize)

  console.log(templateNumber)
  console.log(sizes)

  const display = () => {
    switch (templateNumber) {
      case 0:
        return <Temp_1 />
      case 1:
        return <Temp_2 />
      default:
        return <Temp_1 />
    }
  }

  return (
    <S.Display_Wrapper>
      {display()}
      {/* <Temp_2 /> */}
    </S.Display_Wrapper>
  )
}

export default TempDisplayArea
