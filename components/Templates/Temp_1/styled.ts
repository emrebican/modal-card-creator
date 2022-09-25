import styled from 'styled-components'

const Temp_1_Container = styled.div`
  width: ${(props: any) => props.width_value + 'px'};
  height: ${(props: any) => props.height_value + 'px'};
  display: flex;
`

const Temp_1_Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background-color: #fff;

  .temp_1_section {
    width: 300px;
    margin: 0 40.5px;
    /* margin-top: 49px; */
    display: flex;
    flex-direction: column;

    .temp_1_title {
      font-family: 'Inter', sans-serif;
      font-size: 36px;
      font-weight: 700;
      line-height: 43.57px;
      color: #000;
    }

    .temp_1_text {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: #000;
      margin-top: 15px;
      margin-bottom: 31.5px;
    }

    /* FORM */
    .temp_1_form {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 15px;

      input {
        height: 47px;
        border-radius: 12px;
        outline: none;
        border: 1px solid #d2dae3;
        padding: 0 14.5px;

        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;

        &::placeholder {
          font-family: 'Inter';
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #000000;
        }

        :nth-child(2n) {
          margin-bottom: 15.5px;
        }
      }
    }

    /* BOTTOM */
    .temp_1_bottom {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 20px;

      span {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #000;
        cursor: pointer;
      }
    }
  }
`

const Temp_1_Right = styled.div`
  flex: 1;
  position: relative;
  background-image: url('/template_images/temp1_image.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
`

export { Temp_1_Container, Temp_1_Left, Temp_1_Right }
