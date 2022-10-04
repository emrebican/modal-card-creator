import styled from 'styled-components'
import { Props } from '../../Interfaces/Interfaces'

export const Img = styled.img<Props>`
  position: absolute;
  top: ${(props) => props.top_value};
  right: ${(props) => props.right_value};

  cursor: pointer;
`
