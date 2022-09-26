import styles from './Checkbox.module.scss'

const Checkbox = ({ device }: any) => {
  return (
    <label className={styles.container}>
      <input type="checkbox" checked={device} readOnly />
      <span className={styles.checkmark}></span>
    </label>
  )
}

export default Checkbox
