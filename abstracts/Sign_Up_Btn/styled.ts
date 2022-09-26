import styled from 'styled-components'
import { fonts } from '../../constants/constants'

const Button = styled.button`
  width: ${(props: any) => props.width_value};
  height: ${(props: any) => props.height_value};
  background-color: ${(props: any) => props.bg_clr};
  color: ${(props: any) => props.clr};
  border: ${(props: any) => props.border_value};

  border-radius: 12px;
  cursor: pointer;
  font-family: ${fonts.ff_Inter};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  transition: all ease 0.4s;

  &:hover {
    box-shadow: 0px 0px 10px 1px
      ${(props: any) => (props.bg_clr === '#fff' ? '#ccc' : props.bg_clr)};
  }
`

export { Button }
