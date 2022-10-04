import styled from 'styled-components'
import { colors, fonts } from '../../../constants/constants'
import { Props } from '../../../Interfaces/Interfaces'

const Temp_11_Container = styled.div<Props>`
  width: ${(props) => props.width_value + 'px'};
  height: ${(props) => props.height_value + 'px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all ease 0.4s;

  /* Top */
  .temp_11_top {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    font-family: ${fonts.ff_Inter};
    margin-bottom: ${(props) => (props.height_value < 549 ? '20px' : '51.5px')};

    .temp_11_top_text {
      font-size: 18px;
      font-weight: 500;
      line-height: 21.78px;
      color: ${(props) =>
        props.color !== colors.White ? props.color : colors.Purple};
      text-transform: uppercase;
    }

    .temp_11_center_text {
      font-size: 30px;
      font-weight: 700;
      line-height: 36.31px;
      color: ${colors.Black};
    }

    .temp_11_bottom_text {
      font-size: 20px;
      font-weight: 400;
      line-height: 24.2px;
      color: ${colors.Black};
      word-wrap: break-word;
      width: ${(props) => (props.width_value < 480 ? '320px' : '366px')};
      text-align: center;
    }
  }

  /* Form */
  .temp_11_form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
    width: ${(props) => (props.width_value < 480 ? '290px' : '358px')};
  }

  /* Buttons */
  .temp_11_buttons {
    display: flex;
    gap: 14.5px;
    margin-top: 40.5px;
  }
`

export { Temp_11_Container }
