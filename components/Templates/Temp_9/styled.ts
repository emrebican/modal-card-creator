import styled from 'styled-components'
import { colors, fonts } from '../../../constants/constants'

const Temp_9_Container = styled.div`
  width: ${(props: any) => props.width_value + 'px'};
  height: ${(props: any) => props.height_value + 'px'};
  background-color: ${(props: any) =>
    props.bg_color ? props.bg_color : colors.Purple};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease 0.4s;
  position: relative;
`

const Temp_9_Section = styled.div`
  width: ${(props: any) => (props.width_value < 480 ? +'315px' : '349px')};
  margin: 0 65.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props: any) =>
    props.bg_color === colors.Purple ||
    props.bg_color === colors.Black ||
    props.bg_color === colors.Orange
      ? colors.White
      : colors.Black};

  .temp_9_title {
    font-family: ${fonts.ff_Inter};
    font-size: 30px;
    font-weight: 700;
    line-height: 36.31px;
    /* color: ${colors.White}; */
    margin-top: 29px;
  }

  .temp_9_text {
    font-family: ${fonts.ff_Inter};
    font-weight: 400;
    font-size: 20px;
    line-height: 24.2px;
    /* color: ${colors.White}; */
    margin-top: 20px;
    margin-bottom: 41.5px;
    text-align: center;
    word-wrap: break-word;
  }

  /* Buttons */
  .temp_9_buttons {
    display: flex;
    gap: 14.5px;
  }
`

export { Temp_9_Container, Temp_9_Section }
