import styled from 'styled-components'
import { colors, fonts } from '../../constants/constants'

export const Upload_Wrapper = styled.div`
  /* display: flex; */
  /* justify-content: flex-start; */
  /* height: 178px; */
  width: 378px;
  margin-top: 15px;
  position: relative;

  .upload_image {
    position: absolute;
    top: 26px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;

    background-color: ${(props: any) =>
      props.isLoad ? 'transparent' : 'rgba(125, 74, 234, 0.1)'};
    width: ${(props: any) => !props.isLoad && '80px'};
    height: ${(props: any) => !props.isLoad && '80px'};
    border-radius: ${(props: any) => (props.isLoad ? '0px' : '12px')};
    display: ${(props: any) => (props.isLoad ? 'block' : 'flex')};
    align-items: center;
    justify-content: center;
  }

  .content {
    .input_area {
      width: 378px;
      height: 178px;
      border: 1px dashed ${colors.LightGray};
      border-radius: 12px;
      color: white;
      cursor: pointer;

      &::file-selector-button {
        color: white;
        background-color: transparent;
        border: none;
      }
    }
  }

  .cloud_area {
    display: flex;
    justify-content: center;
    gap: 5px;
    position: absolute;
    bottom: ${(props: any) => (props.isLoad ? '80px' : '30px')};
    width: 100%;
    z-index: -1;

    font-family: ${fonts.ff_Inter};
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: ${colors.Black};

    b {
      font-weight: 600;
      color: ${colors.Purple};
    }
  }

  .upload_btn {
    margin-top: 20px;
    background-color: ${colors.Purple};
    color: ${colors.White};
    font-family: ${fonts.ff_Inter};
    font-size: 14px;
    padding: 1em;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease 0.4s;

    &:hover {
      box-shadow: 0px 5px 10px 2px rgba(125, 74, 234, 0.27);
    }
    &:active {
      box-shadow: 0px 5px 10px 12px rgba(125, 74, 234, 0.27);
    }

    &:disabled {
      background-color: ${colors.LightGray};
      box-shadow: none;
      color: ${colors.Gray};
    }
  }

  .delete_btn {
    margin-left: 20px;
    background-color: ${colors.Red};
    color: ${colors.White};
    font-family: ${fonts.ff_Inter};
    /* border: 1px solid ${colors.LightGray}; */
    border: none;
    font-size: 14px;
    padding: 1em;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease 0.4s;

    &:hover {
      box-shadow: 0px 0px 10px 2px #aaa;
    }
    &:active {
      box-shadow: 0px 5px 10px 12px rgba(125, 74, 234, 0.27);
    }
  }
`
