import styles from './Checkbox.module.scss'

const Checkbox = ({ device, disable }: any) => {
  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        disabled={disable}
        checked={disable === true ? false : device}
        readOnly
      />
      <span className={styles.checkmark}></span>
    </label>
  )
}

export default Checkbox
