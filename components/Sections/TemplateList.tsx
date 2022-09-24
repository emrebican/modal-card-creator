import styles from '../../styles/TemplateList.module.scss'
import Title from '../Section Titles/Title'
import Temp_1 from '../Templates/Temp_1/Temp_1'

const TemplateList = () => {
  return (
    <>
      <Title number={1} title="Choose your template" />
      <div className={styles.gridList}>
        <Temp_1 />
      </div>
    </>
  )
}

export default TemplateList
