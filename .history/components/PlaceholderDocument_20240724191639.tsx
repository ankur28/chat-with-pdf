'use client'

import { PlusCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

function PlaceholderDocument() {
    const router = useRouter();

    const handleCLick = () => {
        ro

    }

return (
    <Button
    onClick={handleCLick}
    className='flex flex-col items-center w-64 h-80  rounded-xl bg-gray-200 
        text-gray-400'>
        <PlusCircleIcon className='h-16 w-16' />
        <p>Add a document</p>
    </Button>
)}

export default PlaceholderDocument
