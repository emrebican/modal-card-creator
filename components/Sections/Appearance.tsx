import styles from '../../styles/section_styles/Appearance.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../features/store'
import { useState, useEffect, useRef } from 'react'

import { changeBtnColor } from '../../features/globalSlice'
import { selectSize } from '../../utilities/selectSize'
import { resetSizeBtn } from '../../utilities/resetSizeBtn'

// Components
import Title from '../Section Titles/Title'
import TempDisplayArea from '../../abstracts/Template Display Area/TempDisplayArea'
import ImageUpload from '../Image Upload Component/ImageUpload'

// Constants
import { colors } from '../../constants/constants'

const Appearance = () => {
  const dispatch = useDispatch()
  const refDiv: any = useRef(null)
  const positionArray = [...Array(9)]

  // Template Size
  const [size, setSize] = useState({ width: 0, height: 0 })
  console.log('size: ', size)

  const tempNumber = useSelector(
    (state: RootState) => state.global.templateNumber
  )
  const width_value: number = useSelector(
    (state: RootState) => state.global.templateSize.width
  )
  const height_value: number = useSelector(
    (state: RootState) => state.global.templateSize.height
  )

  useEffect(() => {
    setSize({ width: width_value, height: height_value })
    resetSizeBtn(refDiv)
  }, [tempNumber])

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
            {positionArray.map((p, i) => (
              <button key={i}>{p}</button>
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
          {/* drag drop image upload nasıl çalışır öğren */}
          {/* Ayrı bir component oluşturulabilir */}
          <ImageUpload />
        </div>
      </div>
    </>
  )
}

export default Appearance
