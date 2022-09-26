import styles from './OnOff.module.scss'

const OnOff = () => {
  return (
    <label className={styles.container}>
      <input type="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  )
}

export default OnOff
