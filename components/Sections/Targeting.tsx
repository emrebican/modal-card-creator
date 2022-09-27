import styles from '../../styles/section_styles/Targeting.module.scss'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../features/store'
import {
  getTargeting,
  toggleDeviceDisable,
  toggleSecondsDisable,
  toggleScrollDisable,
  toggleSourceDisable,
  toggleLanguageDisable
} from '../../features/globalSlice'

// Tools & Components
import Title from '../Section Titles/Title'
import OnOff from '../../tools/OnOff'
import Device from '../Device Component/Device'
import Targeting_Input from '../../tools/Targeting Input'
import SelectArea from '../../tools/SelectArea'
import Languages from '../Languages Component/Languages'

const Targeting = () => {
  const dispatch = useDispatch()
  const devices = useSelector(
    (state: RootState) => state.global.targetingDevice
  )
  const disables = useSelector((state: RootState) => state.global.disables)

  // Disable Functions
  const deviceDisable = () => {
    dispatch(toggleDeviceDisable())
    dispatch(getTargeting({ desktop: false, mobile: false }))
  }
  const secondsDisable = () => {
    dispatch(toggleSecondsDisable())
  }
  const scrollDisable = () => {
    dispatch(toggleScrollDisable())
  }
  const sourceDisable = () => {
    dispatch(toggleSourceDisable())
  }
  const languageDisable = () => {
    dispatch(toggleLanguageDisable())
  }

  return (
    <>
      <Title number={4} title="Targeting Rules" />
      <div className={styles.container}>
        {/* Visitor Device Section */}
        <div className={styles.section}>
          <div className={styles.title_wrapper}>
            <span className={styles.section_title}>Visitor Device</span>
            <OnOff check={disables.disableDevice} isDisable={deviceDisable} />
          </div>
          <div className={styles.devices}>
            <div
              onClick={() =>
                disables.disableDevice
                  ? dispatch(getTargeting({ desktop: false, mobile: false }))
                  : dispatch(getTargeting({ desktop: true, mobile: false }))
              }
            >
              <Device
                device={devices.desktop}
                type="Desktop"
                logo="/images/desktop_logo.svg"
                disable={disables.disableDevice}
              />
            </div>

            <div
              onClick={() =>
                disables.disableDevice
                  ? dispatch(getTargeting({ desktop: false, mobile: false }))
                  : dispatch(getTargeting({ desktop: false, mobile: true }))
              }
            >
              <Device
                device={devices.mobile}
                type="Mobile"
                logo="/images/mobile_logo.svg"
                disable={disables.disableDevice}
              />
            </div>
          </div>
        </div>

        {/* After X seconds Section */}
        <div className={styles.section}>
          <div className={styles.title_wrapper}>
            <span className={styles.section_title}>After X seconds</span>
            <OnOff check={disables.disableSeconds} isDisable={secondsDisable} />
          </div>
          <Targeting_Input
            type="number"
            place="Type second"
            value="second"
            disable={disables.disableSeconds}
          />
        </div>

        {/* After % Scroll Section */}
        <div className={styles.section}>
          <div className={styles.title_wrapper}>
            <span className={styles.section_title}>After % Scroll</span>
            <OnOff check={disables.disableScroll} isDisable={scrollDisable} />
          </div>
          <Targeting_Input
            type="number"
            place="Type scroll"
            value="scroll"
            disable={disables.disableScroll}
          />
        </div>

        {/* Traffic Source Section */}
        <div className={styles.section}>
          <div className={styles.title_wrapper}>
            <span className={styles.section_title}>Traffic Source</span>
            <OnOff check={disables.disableSource} isDisable={sourceDisable} />
          </div>
          <Targeting_Input
            type="text"
            place="Enter your traffic source domain"
            value="source"
            disable={disables.disableSource}
          />
        </div>

        {/* Language henüz çalışmıyor | ayrı bir obje açılması gerekebilir */}
        {/* Browser Language Section */}
        <div className={styles.section}>
          <div className={styles.title_wrapper}>
            <span className={styles.section_title}>Browser Language</span>
            {
              <OnOff
                check={disables.disableLanguage}
                isDisable={languageDisable}
              />
            }
          </div>
          <div className={styles.languages}>
            {/* Select Section */}
            <SelectArea disable={disables.disableLanguage} />
            <Languages />
          </div>
        </div>

        {/******** Bu kısmın işlevinin ne olduğu belli değil ********/}
        {/* Exit Intent Targeting Section */}
        <div className={styles.section}>
          <div className={styles.title_wrapper}>
            <span className={styles.section_title}>Exit Intent Targeting</span>
            {<OnOff />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Targeting
