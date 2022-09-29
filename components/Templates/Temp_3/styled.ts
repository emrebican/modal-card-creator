import styled from 'styled-components'
import { colors, fonts } from '../../../constants/constants'

const Temp_3_Container = styled.div`
  width: ${(props: any) => props.width_value + 'px'};
  height: ${(props: any) => props.height_value + 'px'};
  display: flex;
  flex-direction: column;
  transition: all ease 0.4s;
`

const Temp_3_Top = styled.div`
  height: 300px;
  position: relative;
  background-image: url('/template_images/temp3_image.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
`
const Temp_3_Bottom = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background-color: ${colors.White};

  .temp_3_section {
    width: 349px;
    margin: 0 40.5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .temp_3_title {
      font-family: ${fonts.ff_Inter};
      font-size: 30px;
      font-weight: 700;
      line-height: 36.31px;
      color: ${colors.Black};
    }

    .temp_3_text {
      font-family: ${fonts.ff_Inter};
      font-weight: 400;
      font-size: 20px;
      line-height: 24.2px;
      color: ${colors.Black};
      margin-top: 20px;
      margin-bottom: 31px;
      text-align: center;
    }

    /* FORM */
    .temp_3_form {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 15px;
    }
  }
`

export { Temp_3_Container, Temp_3_Top, Temp_3_Bottom }
