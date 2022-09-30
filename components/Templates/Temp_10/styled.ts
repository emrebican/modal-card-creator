import styled from 'styled-components'
import { colors, fonts } from '../../../constants/constants'

const Temp_10_Container = styled.div`
  width: ${(props: any) => props.width_value + 'px'};
  height: ${(props: any) => props.height_value + 'px'};
  display: flex;
  transition: all ease 0.4s;
`

const Temp_10_Left = styled.div`
  /* flex: 1; */
  position: relative;
  width: 550px;
  background-image: url('/template_images/temp10_image.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  overflow: hidden;
`

const Temp_10_Right = styled.div`
  /* flex: 1; */
  position: absolute;
  right: 0;
  top: 50%;
  width: 380px;
  height: 443px;
  transform: translateY(-50%);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.15);

  .temp_10_section {
    width: 300px;
    margin: 0 40.5px;
    /* margin-top: 49px; */
    display: flex;
    flex-direction: column;

    .temp_10_title {
      font-family: ${fonts.ff_Inter};
      font-size: 36px;
      font-weight: 700;
      line-height: 43.57px;
      color: ${colors.Black};
    }

    .temp_10_text {
      font-family: ${fonts.ff_Inter};
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: ${colors.Black};
      margin-top: 15px;
      margin-bottom: 31.5px;
    }

    /* FORM */
    .temp_10_form {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 15px;

      input {
        height: 47px;
        border-radius: 12px;
        outline: none;
        border: 1px solid ${colors.BlueGray};
        padding: 0 14.5px;

        font-family: ${fonts.ff_Inter};
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        &::placeholder {
          font-family: ${fonts.ff_Inter};
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
        }

        :nth-child(2n) {
          margin-bottom: 15.5px;
        }
      }
    }

    /* BOTTOM */
    .temp_10_bottom {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 20px;

      span {
        font-family: ${fonts.ff_Inter};
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: ${colors.Black};
        cursor: pointer;
      }
    }
  }
`

export { Temp_10_Container, Temp_10_Left, Temp_10_Right }
