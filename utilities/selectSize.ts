export const selectSize = (type: string, ref: any) => {
  let elements = ref.current.children

  let btns = [...elements]
  btns.forEach((el) => el.classList.remove('Appearance_active_size__cHLf5'))

  btns.filter((element) => {
    if (element.innerHTML == type) {
      element.classList.add('Appearance_active_size__cHLf5')
    }
  })
}
