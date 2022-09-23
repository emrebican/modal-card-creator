import styles from '../styles/Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div>
        <Image src="/images/logo.png" width={36} height={36} />
        <span className={styles.title}>modal.cards</span>
      </div>
      <ul>
        <li>
          <Link href="#">solutions</Link>
        </li>
        <li>
          <Link href="#">product tour</Link>
        </li>
        <li>
          <Link href="#">showcase</Link>
        </li>
        <li>
          <Link href="#">pricing</Link>
        </li>
      </ul>
      <div>
        <button>sign in</button>
        <button>try for free</button>
      </div>
    </nav>
  )
}

export default Navbar
