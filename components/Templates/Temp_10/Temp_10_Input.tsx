import styles from '../../../styles/section_styles/Content.module.scss'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getTempContent } from '../../../features/globalSlice'

const Temp_10_Input = () => {
  const dispatch = useDispatch()

  const [content, setContent] = useState({
    heading: '',
    text: '',
    input_1: '',
    input_2: '',
    btn_text: '',
    bottom_text: ''
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
        maxLength={12}
        name="heading"
        value={content.heading}
        onChange={handleContent}
      />
      <input
        type="text"
        placeholder="Enter Information"
        maxLength={20}
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
        placeholder="Enter a place holder"
        maxLength={25}
        name="input_2"
        value={content.input_2}
        onChange={handleContent}
      />
      <input
        type="text"
        placeholder="Enter button text"
        maxLength={15}
        name="btn_text"
        value={content.btn_text}
        onChange={handleContent}
      />
      <input
        type="text"
        placeholder="Enter bottom text"
        maxLength={42}
        name="bottom_text"
        value={content.bottom_text}
        onChange={handleContent}
      />
    </div>
  )
}

export default Temp_10_Input
