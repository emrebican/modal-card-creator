/* import Temp_1 from '../../components/Templates/Temp_1/Temp_1'
import Temp_2 from '../../components/Templates/Temp_2/Temp_2'
import Temp_3 from '../../components/Templates/Temp_3/Temp_3'
import Temp_4 from '../../components/Templates/Temp_4/Temp_4'
import Temp_5 from '../../components/Templates/Temp_5/Temp_5'
import Temp_6 from '../../components/Templates/Temp_6/Temp_6'
import Temp_7 from '../../components/Templates/Temp_7/Temp_7'
import Temp_8 from '../../components/Templates/Temp_8/Temp_8'
import Temp_9 from '../../components/Templates/Temp_9/Temp_9'
import Temp_10 from '../../components/Templates/Temp_10/Temp_10' */

import Temp_1 from '../components/Templates/Temp_1/Temp_1'
import Temp_2 from '../components/Templates/Temp_2/Temp_2'
import Temp_3 from '../components/Templates/Temp_3/Temp_3'

export const getTemplate = (templateNumber) => {
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
    case 6:
      return <Temp_7 />
    case 7:
      return <Temp_8 />
    case 8:
      return <Temp_9 />
    case 9:
      return <Temp_10 />
    default:
      return <Temp_1 />
  }
}
