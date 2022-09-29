import styles from '../../../styles/section_styles/Content.module.scss'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getTempContent } from '../../../features/globalSlice'

const Temp_4_Input = () => {
  const dispatch = useDispatch()

  const [content, setContent] = useState({
    heading: '',
    text: '',
    input_1: '',
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
        placeholder="Enter heading"
        maxLength={15}
        name="heading"
        value={content.heading}
        onChange={handleContent}
      />
      <input
        type="text"
        placeholder="Enter Information"
        maxLength={26}
        name="text"
        value={content.text}
        onChange={handleContent}
      />
      <input
        type="text"
        placeholder="Enter a placeholder"
        maxLength={25}
        name="input_1"
        value={content.input_1}
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

export default Temp_4_Input
