import styles from '../../styles/section_styles/Targeting.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../features/store'
import { getTargeting } from '../../features/globalSlice'

import Title from '../Section Titles/Title'
import OnOff from '../../tools/OnOff'
import Device from '../Device Component/Device'

const Targeting = () => {
  const dispatch = useDispatch()
  const devices = useSelector(
    (state: RootState) => state.global.targetingDevice
  )

  return (
    <>
      <Title number={4} title="Targeting Rules" />
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.title_wrapper}>
            <span className={styles.section_title}>Visitor Device</span>
            <OnOff />
          </div>
          <div className={styles.devices}>
            <div
              onClick={() =>
                dispatch(getTargeting({ desktop: true, mobile: false }))
              }
            >
              <Device
                device={devices.desktop}
                type="Desktop"
                logo="/images/desktop_logo.svg"
              />
            </div>

            <div
              onClick={() =>
                dispatch(getTargeting({ desktop: false, mobile: true }))
              }
            >
              <Device
                device={devices.mobile}
                type="Mobile"
                logo="/images/mobile_logo.svg"
              />
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title_wrapper}>
            <span className={styles.section_title}>After X seconds</span>
            <OnOff />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title_wrapper}>
            <span className={styles.section_title}>After % Scroll</span>
            <OnOff />
          </div>
        </div>

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
