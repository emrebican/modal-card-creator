import styled from 'styled-components'
import { colors, fonts } from '../../constants/constants'

export const Upload_Wrapper = styled.div`
  width: 378px;
  height: 178px;
  margin-top: 15px;
  background: transparent;
  border: 1px dashed ${colors.LightGray};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .upload_logo {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    background-color: rgba(125, 74, 234, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    font-family: ${fonts.ff_Inter};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${colors.Black};

    .upload {
      font-weight: 600;
      color: ${colors.Purple};
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
