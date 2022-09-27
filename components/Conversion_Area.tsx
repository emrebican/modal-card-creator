import styles from '../styles/ConversionArea.module.scss'
import Conversion_Item from './Conversion Item/Conversion_Item'
import { conversionData } from '../data/conversionData'

const Conversion_Area = () => {
  return (
    <div className={styles.container}>
      <span className={styles.main_title}>
        Conversion & UX ready popups & modals
      </span>
      <div className={styles.items}>
        {conversionData.map((item) => (
          <Conversion_Item
            key={item.id}
            icon={item.icon}
            title={item.title}
            content={item.content}
            width={item.width}
            height={item.height}
          />
        ))}
      </div>
    </div>
  )
}

export default Conversion_Area
