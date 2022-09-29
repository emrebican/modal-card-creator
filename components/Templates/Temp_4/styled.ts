import styled from 'styled-components'
import { colors, fonts } from '../../../constants/constants'

const Temp_4_Container = styled.div`
  width: ${(props: any) => props.width_value + 'px'};
  height: ${(props: any) => props.height_value + 'px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease 0.4s;
  position: relative;

  .temp_4_section {
    width: ${(props: any) => (props.width_value < 480 ? +'315px' : '349px')};
    margin: 0 65.5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .temp_4_title {
      font-family: ${fonts.ff_Inter};
      font-size: 30px;
      font-weight: 700;
      line-height: 36.31px;
      color: ${colors.Black};
      margin-top: 29px;
    }

    .temp_4_text {
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
    .temp_4_form {
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
    .temp_4_buttons {
      display: flex;
      gap: 14.5px;
    }
  }
`

const Icon = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: any) =>
    props.color !== colors.White ? props.color : colors.Purple};
`

export { Temp_4_Container, Icon }
