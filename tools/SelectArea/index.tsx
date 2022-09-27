import styles from './SelectArea.module.scss'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../features/store'
import { getLanguages, deleteAllLanguages } from '../../features/globalSlice'

const SelectArea = ({ disable }: any) => {
  const dispatch = useDispatch()
  const languages = useSelector((state: RootState) => state.global.languages)
  const [lang, setLang] = useState('')

  console.log(languages)

  const handleLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLang(e.target.value)
    languages.length < 3 &&
      e.target.value !== '' &&
      !languages.includes(e.target.value) &&
      dispatch(getLanguages(e.target.value))
  }

  useEffect(() => {
    dispatch(deleteAllLanguages())
  }, [disable])

  return (
    <div className={styles.wrapper} onChange={handleLang}>
      <select className={styles.select} disabled={disable}>
        <option value="">Select</option>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="German">German</option>
        <option value="Spanish">Spanish</option>
        <option value="Turkish">Turkish</option>
      </select>
    </div>
  )
}

export default SelectArea
