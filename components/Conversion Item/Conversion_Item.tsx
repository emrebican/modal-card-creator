import styles from './ConversionItem.module.scss'
import Image from 'next/image'
import { conversionInterface } from '../../Interfaces/Interfaces'

const Conversion_Item = ({
  icon,
  width,
  height,
  title,
  content
}: conversionInterface) => {
  return (
    <div className={styles.wrapper}>
      <Image src={icon} width={width} height={height} />
      <span className={styles.title}>{title}</span>
      <span className={styles.content}>{content}</span>
    </div>
  )
}

export default Conversion_Item
