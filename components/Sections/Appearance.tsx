import styles from '../../styles/Appearance.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../features/store'
import { useState, useEffect, useRef } from 'react'

import { changeBtnColor } from '../../features/globalSlice'
import { selectSize } from '../../utilities/selectSize'

import Title from '../Section Titles/Title'
import TempDisplayArea from '../../abstracts/Template Display Area/TempDisplayArea'

// Constants
import { colors } from '../../constants/colors'

const Appearance = () => {
  const dispatch = useDispatch()
  // Template Size
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setSize({ width: width_value, height: height_value })
  }, [])

  const width_value: number = useSelector(
    (state: RootState) => state.global.templateSize.width
  )
  const height_value: number = useSelector(
    (state: RootState) => state.global.templateSize.height
  )

  const array = [...Array(9)]
  const refDiv: any = useRef(null)

  return (
    <>
      <Title number={2} title="Appearance" explanation="(Size, colors, logo)" />
      <div className={styles.container}>
        {/* Template Display Area */}
        <TempDisplayArea />
        {/* Size Section */}
        <div className={styles.section}>
          <span className={styles.section_title}>Size</span>
          <div className={styles.buttons} ref={refDiv}>
            <button
              onClick={() =>
                selectSize('small', refDiv, dispatch, size.width, size.height)
              }
            >
              small
            </button>
            <button
              className={styles.active_size}
              onClick={() =>
                selectSize('medium', refDiv, dispatch, size.width, size.height)
              }
            >
              medium
            </button>
            <button
              onClick={() =>
                selectSize('large', refDiv, dispatch, size.width, size.height)
              }
            >
              large
            </button>
          </div>
        </div>
        {/* Position Section */}
        <div className={styles.section}>
          <span className={styles.section_title}>position</span>
          <div className={styles.positions}>
            {array.map((p, i) => (
              <button>{p}</button>
            ))}
          </div>
        </div>
        {/* Colors Section */}
        <div className={styles.section}>
          <span className={styles.section_title}>colors</span>
          <div className={styles.colors}>
            <button
              onClick={() => dispatch(changeBtnColor(colors.Black))}
            ></button>
            <button
              onClick={() => dispatch(changeBtnColor(colors.Orange))}
            ></button>
            <button
              onClick={() => dispatch(changeBtnColor(colors.Gray))}
            ></button>
            <button
              onClick={() => dispatch(changeBtnColor(colors.LightGray))}
            ></button>
            <button
              onClick={() => dispatch(changeBtnColor(colors.White))}
            ></button>
          </div>
        </div>
        {/* Upload Logo */}
        <div className={styles.section}>
          <span className={styles.section_title}>upload logo</span>
          <div className={styles.upload_area}>
            {/* drag drop image upload nasıl çalışır öğren */}
            {/* Ayrı bir component oluşturulabilir */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Appearance
