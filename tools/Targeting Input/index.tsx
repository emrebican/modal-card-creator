import styles from './Targeting_Input.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { RootState } from '../../features/store'
import { getTargetValues } from '../../features/globalSlice'

import { inputInterface } from '../../Interfaces/Interfaces'

const Targeting_Input = ({ type, place, value, disable }: inputInterface) => {
  const dispatch = useDispatch()

  const targetValues: any = useSelector(
    (state: RootState) => state.global.targetValues
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getTargetValues({ ...targetValues, [value]: e.target.value }))
  }

  useEffect(() => {
    if (disable) {
      dispatch(getTargetValues({ ...targetValues, [value]: '' }))
    }
  }, [disable])

  return (
    <div className={styles.container}>
      <input
        type={type}
        placeholder={place}
        onChange={handleChange}
        disabled={disable}
        value={targetValues[value]}
      />
    </div>
  )
}

export default Targeting_Input
