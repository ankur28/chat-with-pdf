import FileUploader from '@/components/FileUploader'
import {useDropzone} from 'react-dropzone'

function UploadPage() {
    const onDrop = useCallback(acceptedFiles => {
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
