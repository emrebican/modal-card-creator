import styles from '../styles/FrequentlyArea.module.scss'
import { faqData } from '../data/faqData'
import { useRef, useState } from 'react'
import FAQ_Item from './FAQ Item/FAQ_Item'
import { active_Classes } from '../constants/constants'

const Frequently_Area = () => {
  const [id, setId] = useState<number>()
  const [close, setClose] = useState<boolean>(false)
  const refItems: any = useRef(null)

  const handleOpen = (id: number) => {
    let childs = refItems.current.children
    let elements = [...childs]

    elements.forEach((el) => el.classList.add(active_Classes.non_active))
    elements.forEach((el) => el.classList.remove(active_Classes.active))

    elements.filter((el, index) => {
      if (index == id) {
        el.classList.add(active_Classes.active)

        setId(index)
        setClose(true)
      }
    })
  }

  const handleClose = () => {
    let childs = refItems.current.children
    let elements = [...childs]

    elements.forEach((el) => el.classList.add(active_Classes.non_active))
    elements.forEach((el) => el.classList.remove(active_Classes.active))

    setClose(false)
  }

  return (
    <div className={styles.container}>
      <span className={styles.main_title}>Frequently Asked Questions</span>

      <div className={styles.items} ref={refItems}>
        {faqData.map((item) => (
          <FAQ_Item
            key={item.id}
            title={item.title}
            content={item.content}
            icon={
              id === item.id && close === true
                ? '/images/minus_icon.svg'
                : '/images/plus_icon.svg'
            }
            handleOpen={() => handleOpen(item.id)}
            handleClose={() => handleClose()}
          />
        ))}
      </div>
    </div>
  )
}

export default Frequently_Area
