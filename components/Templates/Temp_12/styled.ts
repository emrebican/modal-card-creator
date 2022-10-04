import styled from 'styled-components'
import { colors, fonts } from '../../../constants/constants'
import { Props } from '../../../Interfaces/Interfaces'

const Temp_12_Container = styled.div<Props>`
  width: ${(props) => props.width_value + 'px'};
  height: ${(props) => props.height_value + 'px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all ease 0.4s;
  background-color: ${(props) => props.color};
  color: ${(props) =>
    props.color === colors.Black ||
    props.color === colors.Purple ||
    props.color === colors.Orange ||
    props.color === colors.Gray
      ? colors.White
      : colors.Black} !important;

  /* Top */
  .temp_12_top {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    font-family: ${fonts.ff_Inter};
    margin-bottom: ${(props) => (props.height_value < 549 ? '20px' : '51.5px')};

    .temp_12_center_text {
      font-size: 36px;
      font-weight: 700;
      line-height: 43.57px;
    }

    .temp_12_bottom_text {
      font-size: 24px;
      font-weight: 400;
      line-height: 29.05px;
      word-wrap: break-word;
      width: ${(props) => (props.width_value < 480 ? '320px' : '420px')};
      text-align: center;
    }
  }

  /* Form */
  .temp_12_form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 21px;
    margin-top: ${(props) => (props.height_value < 400 ? '10px' : '45px')};

    .radio_label {
      display: flex;
      align-items: center;

      .temp_12_label {
        margin-bottom: -20px;
        font-family: ${fonts.ff_Inter};
        font-size: 14px;
        font-weight: 400;
        line-height: 16.94px;
      }
    }

    input {
      width: 349px;
      height: 47px;
      border-radius: 12px;
      outline: none;
      border: ${(props) =>
        props.color == colors.LightGray
          ? `1px solid ${colors.Gray}`
          : `1px solid ${colors.BlueGray}`};
      padding: 0 14.5px;
      background-color: transparent;
      color: inherit;

      font-family: ${fonts.ff_Inter};
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      &::placeholder {
        font-family: ${fonts.ff_Inter};
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
      }
    }
  }

  /* Buttons */
  .temp_12_buttons {
    /* display: flex; */
    gap: 14.5px;
    margin-top: 28px;
  }
`

export { Temp_12_Container }
