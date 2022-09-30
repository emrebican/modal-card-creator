import styles from '../../styles/section_styles/Content.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'

import Title from '../Section Titles/Title'
import ImageUpload from '../Image Upload Component/ImageUpload'
import Temp_1_Input from '../Templates/Temp_1/Temp_1_Input'
import Temp_2_Input from '../Templates/Temp_2/Temp_2_Input'
import Temp_3_Input from '../Templates/Temp_3/Temp_3_Input'
import Temp_4_Input from '../Templates/Temp_4/Temp_4_Input'
import Temp_5_Input from '../Templates/Temp_5/Temp_5_Input'
import Temp_6_Input from '../Templates/Temp_6/Temp_6_Input'
import Temp_7_Input from '../Templates/Temp_7/Temp_7_Input'
import Temp_8_Input from '../Templates/Temp_8/Temp_8_Input'
import Temp_9_Input from '../Templates/Temp_9/Temp_9_Input'
import Temp_10_Input from '../Templates/Temp_10/Temp_10_Input'
import Temp_11_Input from '../Templates/Temp_11/Temp_11_Input'

const Content = () => {
  const templateNumber = useSelector(
    (state: RootState) => state.global.templateNumber
  )

  const display = () => {
    switch (templateNumber) {
      case 0:
        return <Temp_1_Input />
      case 1:
        return <Temp_2_Input />
      case 2:
        return <Temp_3_Input />
      case 3:
        return <Temp_4_Input />
      case 4:
        return <Temp_5_Input />
      case 5:
        return <Temp_6_Input />
      case 6:
        return <Temp_7_Input />
      case 7:
        return <Temp_8_Input />
      case 8:
        return <Temp_9_Input />
      case 9:
        return <Temp_10_Input />
      case 10:
        return <Temp_11_Input />
      default:
        return <Temp_1_Input />
    }
  }

  return (
    <>
      <Title number={3} title="Content" />
      <div className={styles.container}>
        <div className={styles.section}>
          <span className={styles.section_title}>Edit your content</span>
          {display()}
        </div>
        <div className={styles.section}>
          <span className={styles.section_title}>Upload image</span>
          <ImageUpload />
        </div>
      </div>
    </>
  )
}

export default Content
