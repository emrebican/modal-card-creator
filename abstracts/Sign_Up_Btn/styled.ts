import styled from 'styled-components'

const Button = styled.button`
  width: ${(props: any) => props.width_value};
  height: ${(props: any) => props.height_value};
  background-color: ${(props: any) => props.bg_clr};
  color: ${(props: any) => props.clr};
  border: ${(props: any) => props.border_value};

  border-radius: 12px;
  cursor: pointer;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`

export { Button }
