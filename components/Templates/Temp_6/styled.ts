import styled from 'styled-components'
import { colors, fonts } from '../../../constants/constants'
import { Props } from '../../../Interfaces/Interfaces'

const Temp_6_Container = styled.div<Props>`
  width: ${(props) => props.width_value + 'px'};
  height: ${(props) => props.height_value + 'px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease 0.4s;
  position: relative;

  .temp_6_section {
    width: ${(props) => (props.width_value < 480 ? +'315px' : '349px')};
    margin: 0 65.5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .temp_6_wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 306px;
      word-wrap: break-word;

      .temp_6_title {
        font-family: ${fonts.ff_Inter};
        font-size: 30px;
        font-weight: 700;
        line-height: 36.31px;
        color: ${colors.Black};
        margin-top: 29px;
      }

      .temp_6_text1 {
        font-family: ${fonts.ff_Inter};
        font-weight: 400;
        font-size: 20px;
        line-height: 24.2px;
        color: ${colors.Black};
        margin-top: 20px;
        margin-bottom: 31px;
        text-align: center;
        width: 306px;
      }
      .temp_6_text2 {
        font-family: ${fonts.ff_Inter};
        font-weight: 400;
        font-size: 16px;
        line-height: 19.36px;
        color: ${colors.Gray};
        margin-bottom: 34px;
        text-align: center;
        width: 240px;
      }
    }
    /* Buttons */
    .temp_6_buttons {
      display: flex;
      flex-direction: column;
      gap: 14.5px;
    }
  }
`

const Icon = styled.div<Props>`
  width: ${(props) => (props.img ? '96px' : '90px')};
  height: ${(props) => (props.img ? '96px' : '90px')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.color !== colors.White ? props.color : colors.Purple};

  .temp_6_img {
    border-radius: ${(props) => (props.img ? '50%' : '0%')};
  }
`

export { Temp_6_Container, Icon }
