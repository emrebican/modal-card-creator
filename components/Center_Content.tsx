import styles from '../styles/Center_Content.module.scss'
import Image from 'next/image'

const Center_Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_content}>
        <Image
          src="/images/camper_logo.png"
          width={106}
          height={38}
          objectFit="cover"
        />
        <span className={styles.title}>Join the club</span>
        <span className={styles.text}>
          Subscribe and Get an Extra <br />
          <strong>25% Off</strong> on your first purchase.
        </span>
        <form className={styles.form}>
          <input type="text" placeholder="Email address" />
          <button>Subscribe</button>
        </form>
        <span className={styles.info}>
          By signing up, you agree to <span>Privacy Policy</span> and{' '}
          <span>Terms of Use</span>.
        </span>
      </div>

      <div className={styles.right_content}>
        <button className={styles.cancel_button}>
          <Image src="/images/cancel.png" width={13.27} height={13.27} />
        </button>

        <span className={styles.copy}>
          Mediterranean Sneakers <span>®</span>
        </span>

        <div className={styles.badge_grow}>
          <Image src="/images/grow.png" width={20} height={20} />
          <span>Grow email list</span>
        </div>
        <div className={styles.badge_increase}>
          <Image src="/images/increase.png" width={20} height={20} />
          <span>Increase sales conversion</span>
        </div>
      </div>
    </div>
  )
}

export default Center_Content
