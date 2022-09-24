import styles from '../styles/Layout.module.scss'
import TemplateList from './Sections/TemplateList'
import Appearance from './Sections/Appearance'
import Content from './Sections/Content'
import Targeting from './Sections/Targeting'
import Settings from './Sections/Settings'

const Modals = () => {
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
      {/* 1. Template */}
      <TemplateList />
      {/* 2. Appearance */}
      <Appearance />
      {/* 3. Content */}
      <Content />
      {/* 4. Targeting */}
      <Targeting />
      {/* 5. Settings and Code */}
      <Settings />
    </div>
  )
}

export default Modals
