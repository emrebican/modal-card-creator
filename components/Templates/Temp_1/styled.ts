import styled from 'styled-components'
import { colors, fonts } from '../../../constants/constants'
import { Props } from '../../../Interfaces/Interfaces'

const Temp_1_Container = styled.div<Props>`
  width: ${(props) => props.width_value + 'px'};
  height: ${(props) => props.height_value + 'px'};
  display: flex;
  transition: all ease 0.4s;
`

const Temp_1_Left = styled.div<Props>`
  /* flex: 1; */
  flex: ${(props) => (props.width_value < 740 ? 0.8 : 1)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background-color: ${colors.White};

  .temp_1_section {
    margin: 0 40.5px;
    display: flex;
    flex-direction: column;

    .temp_1_title {
      font-family: ${fonts.ff_Inter};
      font-size: 36px;
      font-weight: 700;
      line-height: 43.57px;
      color: ${colors.Black};
    }

    .temp_1_text {
      font-family: ${fonts.ff_Inter};
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: ${colors.Black};
      margin-top: 15px;
      margin-bottom: 31.5px;
    }

    /* FORM */
    .temp_1_form {
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
    .temp_1_bottom {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 20px;
      text-align: ${(props: any) =>
        props.width_value < 740 ? 'center' : 'left'};

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

const Temp_1_Right = styled.div<Props>`
  /* flex: 1; */
  flex: ${(props: any) => (props.width_value < 740 ? 1.5 : 1)};
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
`

export { Temp_1_Container, Temp_1_Left, Temp_1_Right }
