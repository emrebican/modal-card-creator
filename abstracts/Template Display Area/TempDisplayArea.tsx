import * as S from './styled'
import Temp_1 from '../../components/Templates/Temp_1/Temp_1'
import Temp_2 from '../../components/Templates/Temp_2/Temp_2'
import Temp_3 from '../../components/Templates/Temp_3/Temp_3'
import Temp_4 from '../../components/Templates/Temp_4/Temp_4'
import Temp_5 from '../../components/Templates/Temp_5/Temp_5'
import Temp_6 from '../../components/Templates/Temp_6/Temp_6'

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
      case 2:
        return <Temp_3 />
      case 3:
        return <Temp_4 />
      case 4:
        return <Temp_5 />
      case 5:
        return <Temp_6 />
      default:
        return <Temp_1 />
    }
  }

  return <S.Display_Wrapper>{display()}</S.Display_Wrapper>
}

export default TempDisplayArea
