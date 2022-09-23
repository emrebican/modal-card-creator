import { AuxProps } from '../Interfaces/Interfaces'
import styles from '../styles/Layout.module.scss'

import Meta from './Meta'
import Navbar from './Navbar'

const Layout = ({ children }: AuxProps) => {
  return (
    <div className={styles.container}>
      <Meta />
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
