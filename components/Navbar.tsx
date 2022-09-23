import styles from '../styles/Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowDownSLine } from 'react-icons/ri'

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" width={36} height={36} />
          <span className={styles.title}>modal.cards</span>
        </div>

        <div className={styles.links}>
          <Link href="/">
            <a className={styles.icon}>
              solutions <RiArrowDownSLine />
            </a>
          </Link>
          <Link href="/">product tour</Link>
          <Link href="/">showcase</Link>
          <Link href="/">pricing</Link>
        </div>
      </div>
      <div className={styles.buttons}>
        <button>Sign in</button>
        <button className={styles.right_btn}>Try for free</button>
      </div>
    </nav>
  )
}

export default Navbar
