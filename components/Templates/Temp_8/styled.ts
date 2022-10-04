import styled from 'styled-components'
import { colors, fonts } from '../../../constants/constants'
import { Props } from '../../../Interfaces/Interfaces'

const Temp_8_Container = styled.div<Props>`
  width: ${(props) => props.width_value + 'px'};
  height: ${(props) => props.height_value + 'px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease 0.4s;
  position: relative;

  .temp_8_section {
    width: ${(props: any) => (props.width_value < 480 ? +'315px' : '349px')};
    margin: 0 65.5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .temp_8_wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 306px;
      word-wrap: break-word;

      .temp_8_title {
        font-family: ${fonts.ff_Inter};
        font-size: 30px;
        font-weight: 700;
        line-height: 36.31px;
        color: ${colors.Black};
        margin-top: 29px;
      }

      .temp_8_text1 {
        font-family: ${fonts.ff_Inter};
        font-weight: 400;
        font-size: 20px;
        line-height: 24.2px;
        color: ${colors.Black};
        margin-top: 20px;
        margin-bottom: 31px;
        text-align: center;
        width: 300px;
      }
    }
    /* Buttons */
    .temp_8_buttons {
      display: flex;
      flex-direction: column;
      gap: 14.5px;
    }
  }
`

export { Temp_8_Container }
