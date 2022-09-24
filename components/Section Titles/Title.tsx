import { TitleInterface } from '../../Interfaces/Interfaces'
import styles from './Title.module.scss'

const Title = ({ number, title, explanation }: TitleInterface) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.number}>{number}</span>
      <span className={styles.title}>
        {title} <span className={styles.explanation}>{explanation}</span>
      </span>
    </div>
  )
}

export default Title
