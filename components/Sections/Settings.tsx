import styles from '../../styles/section_styles/Settings.module.scss'
import Title from '../Section Titles/Title'
import Image from 'next/image'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../features/store'
import { getTargetValues } from '../../features/globalSlice'
import { handleCode } from '../../utilities/handleCode'
import Targeting_Input from '../../tools/Targeting Input'

const Settings = () => {
  const dispatch = useDispatch()
  const global: any = useSelector((state: RootState) => state.global)
  const targetValues = global.targetValues

  const [settings, setSettings] = useState({
    submission: false,
    data: false
  })

  const [code, setCode] = useState({
    color: '',
    sizes: '',
    content: '',
    device: '',
    second: '',
    scroll: '',
    source: '',
    webhook: '',
    submission: '',
    data: '',
    languages: '',
    exitIntent: '',
    image: ''
  })

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    setSettings({
      ...settings,
      [name]: checked
    })
  }

  useEffect(() => {
    dispatch(getTargetValues({ ...targetValues, settings }))
  }, [settings])

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
            value="webhook"
            disable={false}
          />

          <div className={styles.check_content}>
            <div className={styles.option}>
              <input
                type="checkbox"
                name="submission"
                checked={settings.submission}
                onChange={handleCheck}
              />
              <p>Send form submissions</p>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                name="data"
                checked={settings.data}
                onChange={handleCheck}
              />
              <p>Send click data</p>
            </div>
          </div>

          {/* Get your Code */}
          <button
            className={styles.code_btn}
            onClick={() => handleCode({ global, setCode })}
          >
            Get your Code
          </button>
          {/****************** !!!!! EMPTY !!!!! ******************/}
          <div className={styles.code_section}>
            <div className={styles.code_display}>
              {JSON.stringify(code, null, '\t')}
            </div>
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
