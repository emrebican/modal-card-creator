interface colorInterface {
  Black: string
  White: string
  Purple: string
  Orange: string
  Gray: string
  LightGray: string
  BlueGray: string
}

interface fontInterface {
  ff_Inter: string
  ff_Poppins: string
}

interface activeInterface {
  active: string
  non_active: string
  appearance: string
}

export const colors: colorInterface = {
  Black: '#000',
  White: '#fff',
  Purple: '#7D4AEA',
  Orange: '#F37C34',
  Gray: '#777',
  LightGray: '#DDD',
  BlueGray: '#D2DAE3'
}

export const fonts: fontInterface = {
  ff_Inter: 'Inter',
  ff_Poppins: 'Poppins'
}

export const active_Classes: activeInterface = {
  active: 'FAQItem_wrapper_active__DYKdV',
  non_active: 'FAQItem_wrapper__jIZQ8',
  appearance: 'Appearance_active_size__6iiE9'
}
