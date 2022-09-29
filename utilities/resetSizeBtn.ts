import { active_Classes } from '../constants/constants'

export const resetSizeBtn = (ref: any) => {
  let elements = ref.current.children
  let btns = [...elements]
  btns.forEach((el) => el.classList.remove(active_Classes.appearance))

  btns.forEach((el) => el.classList.remove(active_Classes.appearance))
  btns.filter((element) => {
    if (element.innerHTML == 'medium') {
      element.classList.add(active_Classes.appearance)
    }
  })
}
