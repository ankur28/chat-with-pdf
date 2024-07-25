'use client'

import { useCallback } from 'react'
import {useDropzone} from 'react-dropzone'
import {
    CheckCircleIcon,
    CircleArrowDown,
    HammerIcon, 
    RocketIcon,
    SaveIcon
} from 'lucide-react'

function UploadPage() {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive, isFocused} = useDropzone({onDrop})

  return (
    <div className='flex flex-col gap-4 items-center max-w-7xl mx-auto'>
            {/* Loading section */}
        <div {...getRootProps()}
        className={`p-10 border-2 border-dashed mt-10 w-[90%] border-indigo-600 text-indigo-600
        rounded-lg h-96 flex items-center justify-center 
        ${ isFocused || isDragActive ? "bg-indigo-300" : "bg-indigo-100"}`}>
        <input {...getInputProps()} />

            <div>

            {
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
        </div>
    </div>
  )
}

export default UploadPage
