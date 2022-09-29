import styles from '../../styles/section_styles/TemplateList.module.scss'
import Title from '../Section Titles/Title'
import Temp_1 from '../Templates/Temp_1/Temp_1'
import { templatesData } from '../../data/templatesData'

import { useDispatch } from 'react-redux'
import { getTempNumber } from '../../features/globalSlice'

const TemplateList = () => {
  const dispatch = useDispatch()

  const handleClick = (number: number, width: number, height: number) => {
    dispatch(getTempNumber({ number, width: width, height: height }))
  }

  return (
    <>
      <Title number={1} title="Choose your template" />
      <div className={styles.gridList}>
        {templatesData.map((temp) => (
          <div key={temp.id} className={styles.grid_item}>
            <img src={`/grid_images/grid_${temp.id + 1}.png`} alt="image" />
            <button
              className={styles.temp_btn}
              onClick={() => handleClick(temp.id, temp.width, temp.height)}
            >
              Select template
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default TemplateList
