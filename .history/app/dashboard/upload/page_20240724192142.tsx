import FileUploader from '@/components/FileUploader'
import React from 'react'
import {useDropzone} from 'react-dropzone'

function UploadPage() {
  return (
    <div>
        <FileUploader />
    </div>
  )
}

export default UploadPage
