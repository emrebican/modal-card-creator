import styled from 'styled-components'
import { colors, fonts } from '../../../constants/constants'
import { Props } from '../../../Interfaces/Interfaces'

const Temp_7_Container = styled.div<Props>`
  width: ${(props) => props.width_value + 'px'};
  height: ${(props) => props.height_value + 'px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease 0.4s;
  position: relative;

  .temp_7_section {
    margin: 0 65.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    word-wrap: break-word;

    .temp_7_img {
      border-radius: 50%;
    }

    .temp_7_title {
      font-family: ${fonts.ff_Inter};
      font-size: 30px;
      font-weight: 700;
      line-height: 36.31px;
      color: ${colors.Black};
      margin-top: 16.45px;
    }

    .temp_7_text {
      font-family: ${fonts.ff_Inter};
      font-weight: 400;
      font-size: 20px;
      line-height: 24.2px;
      color: ${colors.Black};
      margin-top: 20px;
      margin-bottom: 43.5px;
      text-align: center;
      width: ${(props) => (props.width_value < 480 ? '300px' : '355px')};
    }

    /* FORM */
    .temp_7_form {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 15.5px;

      input {
        height: 47px;
        border-radius: 12px;
        outline: none;
        border: 1px solid ${colors.BlueGray};
        padding: 0 14.5px;

        font-family: ${fonts.ff_Inter};
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${colors.Black};
        margin-bottom: 31px;

        &::placeholder {
          font-family: ${fonts.ff_Inter};
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: ${colors.Black};
        }
      }
    }

    /* Buttons */
    .temp_7_buttons {
      display: flex;
      gap: 14.5px;
    }

    /* BOTTOM */
    .temp_7_bottom {
      width: 100%;
      margin-top: 20px;

      span {
        font-family: ${fonts.ff_Inter};
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: ${colors.Black};
        cursor: pointer;
      }
    }
  }
`

export { Temp_7_Container }
