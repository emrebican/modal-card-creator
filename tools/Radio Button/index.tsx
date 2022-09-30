import styles from './RadioButton.module.scss'
import { radioInterface } from '../../Interfaces/Interfaces'

const RadioButton = ({ label_text, info_text }: radioInterface) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.radio_container}>
        {label_text}
        <input type="radio" id={label_text} name="group" value={label_text} />
        <span className={styles.checkmark}></span>
      </label>

      <span className={styles.text}>{info_text}</span>
    </div>
  )
}

export default RadioButton
