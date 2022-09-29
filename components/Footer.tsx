import styles from '../styles/Footer.module.scss'
import { footerData } from '../data/footerData'
import Footer_Item from './Footer Item/Footer_Item'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.main_title}>Build great popups without code</span>
      <div className={styles.items}>
        {footerData.map((item) => (
          <Footer_Item
            key={item.id}
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
      <div className={styles.foot}>
        <Image src="/popupsmart_icon.png" width={32} height={32} />
        <Link href="https://popupsmart.com/">
          <a target="_blank" rel="noopener noreferrer">
            <span className={styles.text}>Powered by Popupsmart</span>
          </a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
