import styles from '../styles/Layout.module.scss'
import Template from './Template'

const Content = () => {
  return (
    <div className={styles.content}>
      <section>
        <span className={styles.title}>modal card generator</span>
        <span className={styles.text}>
          Measure your return on email marketing efforts easier and faster by
          using thebest online tools. Popupsmart is ready to help you build an
          efficient email list!
        </span>
      </section>
      <Template />
    </div>
  )
}

export default Content
