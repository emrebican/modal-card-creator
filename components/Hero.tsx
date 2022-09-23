import styles from '../styles/Hero.module.scss'
import { FiCheck } from 'react-icons/fi'

const Hero = () => {
  return (
    <div className={styles.container}>
      {/* Top Content */}
      <div className={styles.top_content}>
        <h1 className={styles.title}>Simple modal card creator</h1>
        <p className={styles.text}>
          A utility-first CSS framework packed with classeslike flex, pt-4,
          text-center and rotate-90 that can becomposed to build any design,
          directly in your markup.
        </p>
        <button className={styles.top_button}>Try it out now</button>

        <div className={styles.features}>
          <span>
            <FiCheck />
            Free and paid plans
          </span>
          <span>
            <FiCheck />
            Setup in minutes
          </span>
          <span>
            <FiCheck />
            No credit card required*
          </span>
        </div>
      </div>

      {/* Center Content */}

      {/* Bottom Content */}
      <div className={styles.bottom_content}>
        <section>
          <article>3x</article>
          <span>increase conversion rate</span>
        </section>

        <section>
          <article>120%</article>
          <span>email subscribers</span>
        </section>

        <section>
          <article>390%</article>
          <span>more customer engagement</span>
        </section>
        <span className={styles.bottom_text}>
          Popupsmart meets all your business needs.
        </span>
      </div>
    </div>
  )
}

export default Hero
