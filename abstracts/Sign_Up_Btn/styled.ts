import styled from 'styled-components'
import { fonts } from '../../constants/constants'
import { Props } from '../../Interfaces/Interfaces'

const Button = styled.button<Props>`
  width: ${(props) => props.width_value};
  height: ${(props) => props.height_value};
  background-color: ${(props) => props.bg_clr};
  color: ${(props) => props.clr};
  border: ${(props) => props.border_value};

  border-radius: 12px;
  cursor: pointer;
  font-family: ${fonts.ff_Inter};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  transition: all ease 0.4s;

  &:hover {
    box-shadow: 0px 0px 10px 1px
      ${(props) => (props.bg_clr === '#fff' ? '#ccc' : props.bg_clr)};
  }
`

export { Button }
