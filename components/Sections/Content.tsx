import styles from '../../styles/section_styles/Content.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'

import Title from '../Section Titles/Title'
import ImageUpload from '../Image Upload Component/ImageUpload'
import Temp_1_Input from '../Templates/Temp_1/Temp_1_Input'
import Temp_2_Input from '../Templates/Temp_2/Temp_2_Input'

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
