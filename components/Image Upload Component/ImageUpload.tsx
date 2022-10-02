import * as S from './styled'
import Image from 'next/image'

import { useDispatch, useSelector } from 'react-redux'
import { getImage } from '../../features/globalSlice'
import { RootState } from '../../features/store'
import { useState } from 'react'

const ImageUpload = () => {
  const dispatch = useDispatch()
  const image = useSelector((state: RootState) => state.global.image)
  const [localImg, setLocalImg] = useState()
  const [uploadData, setUploadData] = useState()

  /* ----------------- onChange ----------------- */
  const handleOnChange = (changeEvent: React.ChangeEvent<HTMLFormElement>) => {
    const reader = new FileReader()

    reader.onload = function (onLoadEvent: any) {
      dispatch(getImage(onLoadEvent.target.result))
      setUploadData(undefined)
      setLocalImg(onLoadEvent.target.result)
    }

    reader.readAsDataURL(changeEvent.target.files[0])
  }
  /* ----------------- onChange ----------------- */

  /* ----------------- onSubmit ----------------- */
  const handleOnSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget

    /* find out input el from in array of other inputs */
    const fileInput: any = Array.from(form.elements).find(
      ({ name }: any) => name === 'file'
    )

    /* post fetch request with FormData */
    const formData = new FormData()

    for (const file of fileInput.files) {
      formData.append('file', file)
    }

    formData.append('upload_preset', 'image_uploads')

    const data = await fetch(
      'https://api.cloudinary.com/v1_1/mycloudyimages/image/upload',
      {
        method: 'POST',
        body: formData
      }
    ).then((res) => res.json())

    dispatch(getImage(data.secure_url))
    setUploadData(data)
  }
  /* ----------------- onSubmit ----------------- */

  const handleDelete = () => {
    dispatch(getImage(undefined))
    setUploadData(undefined)
    setLocalImg(undefined)
  }

  return (
    <S.Upload_Wrapper isLoad={image}>
      <div className="upload_image">
        <Image
          src={localImg ? localImg : '/images/upload_logo.svg'}
          width={localImg ? 78 : 27}
          height={localImg ? 90 : 27}
          objectFit="cover"
        />
      </div>

      <form
        className="content"
        method="post"
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
      >
        <input type="file" name="file" className="input_area" />

        {image && (
          <>
            <button className="upload_btn" disabled={uploadData ? true : false}>
              {uploadData ? 'Uploaded' : 'Upload Image'}
            </button>
            <button className="delete_btn" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </form>

      <div className="cloud_area">
        <Image src="/images/cloud.svg" width={18} height={12} />
        <span className="cloud_text">
          Drop your image here or <b>upload</b>
        </span>
      </div>
    </S.Upload_Wrapper>
  )
}

export default ImageUpload
