import { changeTempSize } from '../features/globalSlice'
import { active_Classes } from '../constants/constants'
import { useSelector } from 'react-redux'
import { RootState } from '../features/store'

export const selectSize = (
  type: string,
  ref: any,
  dispatch: any,
  width: number,
  height: number
) => {
  let elements = ref.current.children

  let btns = [...elements]
  btns.forEach((el) => el.classList.remove(active_Classes.appearance))

  btns.filter((element) => {
    if (element.innerHTML == type) {
      element.classList.add(active_Classes.appearance)
    }

    if (type == 'small') {
      dispatch(
        changeTempSize({
          width: width - 100,
          height: height - 50
        })
      )
    } else if (type == 'large') {
      dispatch(changeTempSize({ width: width + 50, height: height + 50 }))
    } else {
      dispatch(changeTempSize({ width: width, height: height }))
    }
  })
}
