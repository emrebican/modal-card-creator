import styles from './Device.module.scss'
import { colors } from '../../constants/constants'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'

import Checkbox from '../../tools/Checkbox'
import { deviceInterface } from '../../Interfaces/Interfaces'

import { MdComputer } from 'react-icons/md'
import { BiMobile } from 'react-icons/bi'

const Device = ({ type, device, disable }: deviceInterface) => {
  const devices = useSelector(
    (state: RootState) => state.global.targetingDevice
  )
  return (
    <div className={styles.wrapper}>
      <Checkbox device={device} disable={disable} />
      {type == 'Desktop' ? (
        <MdComputer
          className={styles.logo}
          style={{ color: devices.desktop === true ? colors.Purple : '#999' }}
        />
      ) : (
        <BiMobile
          className={styles.logo}
          style={{ color: devices.mobile === true ? colors.Purple : '#999' }}
        />
      )}
      <span className={styles.type}>{type}</span>
    </div>
  )
}

export default Device
