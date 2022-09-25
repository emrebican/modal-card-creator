import styled from 'styled-components'

export const Img = styled.img`
  position: absolute;
  top: ${(props: any) => props.top_value};
  right: ${(props: any) => props.right_value};

  cursor: pointer;
`
