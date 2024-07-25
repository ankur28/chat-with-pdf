import FileUploader from '@/components/FileUploader'
import { useCallback } from 'react'
import {useDropzone} from 'react-dropzone'

function UploadPage() {
    const onDrop = useCallbackallback(acceptedFiles => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div>
        <FileUploader />
    </div>
  )
}

export default UploadPage
