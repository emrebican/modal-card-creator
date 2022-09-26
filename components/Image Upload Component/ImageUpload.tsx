import * as S from './styled'
import Image from 'next/image'

const ImageUpload = () => {
  return (
    <S.Upload_Wrapper>
      <div className="upload_logo">
        <Image src="/images/upload_logo.svg" width={27} height={27} />
      </div>

      <div className="content">
        <Image src="/images/cloud.svg" width={18} height={12} />
        <>
          Drop your image here or <span className="upload">upload</span>
        </>
      </div>
    </S.Upload_Wrapper>
  )
}

export default ImageUpload
