import styles from '../../styles/section_styles/Settings.module.scss'
import Title from '../Section Titles/Title'
import Image from 'next/image'

import Targeting_Input from '../../tools/Targeting Input'
import Checkbox from '../../tools/Checkbox'

const Settings = () => {
  return (
    <>
      <Title number={5} title="Settings and Code" />
      <div className={styles.container}>
        <div className={styles.section}>
          <span className={styles.main_title}>Webhook to Send data</span>

          <div className={styles.bottom_content}>
            <span>Enter youe Webhook URL</span>
            <span>
              You can create a simple one with <b>make.com</b>
            </span>
          </div>

          <Targeting_Input
            type="text"
            place="Your Webhook URL"
            value=""
            disable={false}
          />

          <div className={styles.check_content}>
            <div className={styles.option}>
              <Checkbox />
              <p>Send form submissions</p>
            </div>
            <div className={styles.option}>
              <Checkbox />
              <p>Send click data</p>
            </div>
          </div>

          {/* Get your Code */}
          <button className={styles.code_btn}>Get your Code</button>
          {/****************** !!!!! EMPTY !!!!! ******************/}
          <div className={styles.code_section}>
            <button className={styles.copy_btn}>Copy the code</button>
          </div>

          <div className={styles.alert_content}>
            <Image src="/images/alert.svg" width={13.33} height={13.33} />
            <span className={styles.alert_text}>
              Copy and paste the embed code above just before the closing body
              tag of your website template file.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings
