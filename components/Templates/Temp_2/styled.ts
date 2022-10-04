import styled from 'styled-components'
import { colors, fonts } from '../../../constants/constants'
import { Props } from '../../../Interfaces/Interfaces'

const Temp_2_Container = styled.div<Props>`
  width: ${(props) => props.width_value + 'px'};
  height: ${(props) => props.height_value + 'px'};
  display: flex;
  flex-direction: column;
  transition: all ease 0.4s;
`

const Temp_2_Top = styled.div`
  height: 334px;
  position: relative;
  background-image: url('/template_images/temp2_image.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
`
const Temp_2_Bottom = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background-color: ${colors.White};

  .temp_2_section {
    width: 349px;
    margin: 0 40.5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .temp_2_title {
      font-family: ${fonts.ff_Inter};
      font-size: 30px;
      font-weight: 700;
      line-height: 36.31px;
      color: ${colors.Black};
    }

    .temp_2_text {
      font-family: ${fonts.ff_Inter};
      font-weight: 400;
      font-size: 20px;
      line-height: 24.2px;
      color: ${colors.Black};
      margin-top: 20px;
      margin-bottom: 41.5px;
      text-align: center;
    }

    /* FORM */
    .temp_2_form {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 15px;

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

        &::placeholder {
          font-family: ${fonts.ff_Inter};
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: ${colors.Black};
        }

        :nth-child(2n) {
          margin-bottom: 15.5px;
        }
      }
    }

    /* BOTTOM */
    .temp_2_bottom {
      display: flex;
      justify-content: space-between;
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

export { Temp_2_Container, Temp_2_Top, Temp_2_Bottom }
