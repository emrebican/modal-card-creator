import styled from 'styled-components'
import { Props } from '../../Interfaces/Interfaces'

export const Display_Wrapper = styled.div<Props>`
  position: ${(props) =>
    props.scrollPosition > 2550 && props.scrollPosition < 4850
      ? 'fixed'
      : 'absolute'};
  top: ${(props) => (props.scrollPosition > 2550 ? '120px' : '-66px  ')};
  right: ${(props) => (props.scrollPosition > 2550 ? '355px' : '0px')};
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.15);

  @media (max-width: 1800px) {
    right: ${(props) => (props.scrollPosition > 2550 ? '250px' : '0px')};
    transition: all ease 0.4s;
    z-index: 100;
  }
  @media (max-width: 1600px) {
    right: ${(props) => (props.scrollPosition > 2550 ? '180px' : '0px')};
  }
  @media (max-width: 1450px) {
    right: ${(props) => (props.scrollPosition > 2550 ? '60px' : '0px')};
  }
`
