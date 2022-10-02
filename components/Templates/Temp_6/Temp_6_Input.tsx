import styles from '../../../styles/section_styles/Content.module.scss'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getTempContent } from '../../../features/globalSlice'

const Temp_6_Input = () => {
  const dispatch = useDispatch()

  const [content, setContent] = useState({
    heading: '',
    text1: '',
    text2: '',
    btn_text1: '',
    btn_text2: '',
    bg: 'logo'
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
        maxLength={60}
        name="text1"
        value={content.text1}
        onChange={handleContent}
      />
      <input
        type="text"
        placeholder="Enter Information"
        maxLength={60}
        name="text2"
        value={content.text2}
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
      <input
        type="text"
        placeholder="Enter button text"
        maxLength={15}
        name="btn_text1"
        value={content.btn_text1}
        onChange={handleContent}
      />
    </div>
  )
}

export default Temp_6_Input
