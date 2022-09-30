import styles from '../../../styles/section_styles/Content.module.scss'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getTempContent } from '../../../features/globalSlice'

const Temp_11_Input = () => {
  const dispatch = useDispatch()

  const [content, setContent] = useState({
    plan: '',
    heading: '',
    text: '',
    radio_1: '',
    radio_2: '',
    radio_3: '',
    btn_text1: '',
    btn_text2: ''
  })

  const handleContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setContent({
      ...content,
      [name]: value
    })
  }

  useEffect(() => {
    dispatch(getTempContent(content))
  }, [content])

  return (
    <div className={styles.form}>
      <input
        type="text"
        placeholder="Enter plan"
        maxLength={12}
        name="plan"
        value={content.plan}
        onChange={handleContent}
      />
      <input
        type="text"
        placeholder="Enter heading"
        maxLength={20}
        name="heading"
        value={content.heading}
        onChange={handleContent}
      />
      <input
        type="text"
        placeholder="Enter Information"
        maxLength={45}
        name="text"
        value={content.text}
        onChange={handleContent}
      />
      <input
        type="text"
        placeholder="Enter a label"
        maxLength={37}
        name="radio_1"
        value={content.radio_1}
        onChange={handleContent}
      />
      <input
        type="text"
        placeholder="Enter a label"
        maxLength={37}
        name="radio_2"
        value={content.radio_2}
        onChange={handleContent}
      />
      <input
        type="text"
        placeholder="Enter a label"
        maxLength={37}
        name="radio_3"
        value={content.radio_3}
        onChange={handleContent}
      />
      <input
        type="text"
        placeholder="Enter button text"
        maxLength={15}
        name="btn_text1"
        value={content.btn_text1}
        onChange={handleContent}
      />
      <input
        type="text"
        placeholder="Enter button text"
        maxLength={15}
        name="btn_text2"
        value={content.btn_text2}
        onChange={handleContent}
      />
    </div>
  )
}

export default Temp_11_Input
