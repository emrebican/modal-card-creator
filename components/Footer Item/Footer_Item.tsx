import styles from './FooterItem.module.scss'
import Image from 'next/image'
import { conversionInterface } from '../../Interfaces/Interfaces'

const Footer_Item = ({ icon, title, content }: conversionInterface) => {
  return (
    <div className={styles.wrapper}>
      <Image src={icon} width={120} height={120} />
      <span className={styles.title}>{title}</span>
      <span className={styles.content}>{content}</span>
    </div>
  )
}

export default Footer_Item
