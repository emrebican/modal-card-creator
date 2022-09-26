import styles from '../../styles/section_styles/Targeting.module.scss'
import Title from '../Section Titles/Title'

import Checkbox from '../../tools/Checkbox'
import OnOff from '../../tools/OnOff'

const Targeting = () => {
  return (
    <>
      <Title number={4} title="Targeting Rules" />
      <div className={styles.container}>
        <div className={styles.section}>
          <span className={styles.section_title}>Visitor Device</span>
          <OnOff />
          <Checkbox />
        </div>
      </div>
    </>
  )
}

export default Targeting
