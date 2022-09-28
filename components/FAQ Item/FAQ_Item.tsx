import styles from './FAQItem.module.scss'
import Image from 'next/image'
import { faqInterface } from '../../Interfaces/Interfaces'

const FAQ_Item = ({
  title,
  content,
  icon,
  handleOpen,
  handleClose
}: faqInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <span className={styles.title}>{title}</span>
        <Image src={icon} width={20} height={20} onClick={handleOpen} />
        <div className={styles.close_btn} onClick={handleClose}></div>
      </div>
      <span className={styles.content}>{content}</span>
    </div>
  )
}

export default FAQ_Item
