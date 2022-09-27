import styles from './Languages.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../features/store'

import { deleteLanguage } from '../../features/globalSlice'

const Languages = () => {
  const dispatch = useDispatch()
  const languages = useSelector((state: RootState) => state.global.languages)

  const handleDelete = (id: string) => {
    dispatch(deleteLanguage(id))
  }

  const displayLanguages = languages.map((lang) => (
    <div className={styles.lang_item} key={lang}>
      <span className={styles.text}>{lang}</span>
      <div onClick={() => handleDelete(lang)}>
        <img src="/images/cancel.svg" alt={lang} />
      </div>
    </div>
  ))

  return (
    <div className={styles.container}>
      {languages.length < 1 ? (
        <span className={styles.default_text}>
          There is no languages you selected
        </span>
      ) : (
        displayLanguages
      )}
    </div>
  )
}

export default Languages
