import { changeTempSize } from '../features/globalSlice'

export const selectSize = (
  type: string,
  ref: any,
  dispatch: any,
  width: number,
  height: number
) => {
  let elements = ref.current.children

  let btns = [...elements]
  btns.forEach((el) => el.classList.remove('Appearance_active_size__6iiE9'))

  btns.filter((element) => {
    if (element.innerHTML == type) {
      element.classList.add('Appearance_active_size__6iiE9')
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
