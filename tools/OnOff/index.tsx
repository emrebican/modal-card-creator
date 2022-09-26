import styles from './OnOff.module.scss'

const OnOff = ({ check, isDisable }: any) => {
  return (
    <label className={styles.container}>
      <input type="checkbox" checked={check} onChange={isDisable} />
      <span className={styles.checkmark}></span>
    </label>
  )
}

export default OnOff
