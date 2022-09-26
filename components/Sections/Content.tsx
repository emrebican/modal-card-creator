import styles from '../../styles/section_styles/Content.module.scss'

import Title from '../Section Titles/Title'
import ImageUpload from '../Image Upload Component/ImageUpload'
import Temp_1_Input from '../Templates/Temp_1/Temp_1_Input'

const Content = () => {
  return (
    <>
      <Title number={3} title="Content" />
      <div className={styles.container}>
        <div className={styles.section}>
          <span className={styles.section_title}>Edit your content</span>
          <Temp_1_Input />
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
