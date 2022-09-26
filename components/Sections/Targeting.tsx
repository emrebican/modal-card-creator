import styles from '../../styles/section_styles/Targeting.module.scss'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../features/store'
import { getTargeting, toggleDeviceDisable } from '../../features/globalSlice'

import Title from '../Section Titles/Title'
import OnOff from '../../tools/OnOff'
import Device from '../Device Component/Device'

const Targeting = () => {
  const dispatch = useDispatch()
  const devices = useSelector(
    (state: RootState) => state.global.targetingDevice
  )
  const disableDevice = useSelector(
    (state: RootState) => state.global.disableDevice
  )

  console.log(devices)
  console.log('disable', disableDevice)

  const deviceDisable = () => {
    dispatch(toggleDeviceDisable())
  }

  return (
    <>
      <Title number={4} title="Targeting Rules" />
      <div className={styles.container}>
        {/* Visitor Device Section */}
        <div className={styles.section}>
          <div className={styles.title_wrapper}>
            <span className={styles.section_title}>Visitor Device</span>
            <OnOff check={disableDevice} isDisable={deviceDisable} />
          </div>
          <div className={styles.devices}>
            <div
              onClick={() =>
                disableDevice
                  ? dispatch(getTargeting({ desktop: false, mobile: false }))
                  : dispatch(getTargeting({ desktop: true, mobile: false }))
              }
            >
              <Device
                device={devices.desktop}
                type="Desktop"
                logo="/images/desktop_logo.svg"
                disable={disableDevice}
              />
            </div>

            <div
              onClick={() =>
                disableDevice
                  ? dispatch(getTargeting({ desktop: false, mobile: false }))
                  : dispatch(getTargeting({ desktop: false, mobile: true }))
              }
            >
              <Device
                device={devices.mobile}
                type="Mobile"
                logo="/images/mobile_logo.svg"
                disable={disableDevice}
              />
            </div>
          </div>
        </div>

        {/* After X seconds Section */}
        <div className={styles.section}>
          <div className={styles.title_wrapper}>
            <span className={styles.section_title}>After X seconds</span>
            <OnOff />
          </div>
        </div>

        {/* After % Scroll Section */}
        <div className={styles.section}>
          <div className={styles.title_wrapper}>
            <span className={styles.section_title}>After % Scroll</span>
            <OnOff />
          </div>
        </div>

        {/* Traffic Source Section */}
        <div className={styles.section}>
          <div className={styles.title_wrapper}>
            <span className={styles.section_title}>Traffic Source</span>
            <OnOff />
          </div>
        </div>
      </div>
    </>
  )
}

export default Targeting
