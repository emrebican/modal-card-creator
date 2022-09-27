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
          <span className={styles.text}>Powered by Popupsmart</span>
        </Link>
      </div>
    </footer>
  )
}
/* En altta Conversion & UX ready popups & modals ile başlayan kısın olacak*/
export default Footer

{
  /*   <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a> */
}
