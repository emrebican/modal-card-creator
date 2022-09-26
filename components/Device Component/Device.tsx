import styles from './Device.module.scss'
import Image from 'next/image'

import Checkbox from '../../tools/Checkbox'
import { deviceInterface } from '../../Interfaces/Interfaces'

/* If you need to use REACT ICONS */
import { MdComputer } from 'react-icons/md'
import { BiMobile } from 'react-icons/bi'

const Device = ({ type, logo, device, disable }: deviceInterface) => {
  return (
    <div className={styles.wrapper}>
      <Checkbox device={device} disable={disable} />
      {/* <MdComputer className={styles.logo} /> */}
      <Image src={logo} width={18} height={18} />
      <span className={styles.type}>{type}</span>
    </div>
  )
}

export default Device
