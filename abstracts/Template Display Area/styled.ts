import styled from 'styled-components'

export const Display_Wrapper = styled.div`
  position: ${(props: any) =>
    props.scrollPosition > 2550 && props.scrollPosition < 4850
      ? 'fixed'
      : 'absolute'};
  top: ${(props: any) => (props.scrollPosition > 2550 ? '120px' : '-66px  ')};
  right: ${(props: any) => (props.scrollPosition > 2550 ? '355px' : '0px')};
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.15);
`
