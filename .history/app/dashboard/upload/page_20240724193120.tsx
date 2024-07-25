'use client'

import { useCallback } from 'react'
import {useDropzone} from 'react-dropzone'

function UploadPage() {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive, isFocused} = useDropzone({onDrop})

  return (
    <div className='flex flex-col gap-4 '>

    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
          isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
        }
    </div>
    </div>
  )
}

export default UploadPage
