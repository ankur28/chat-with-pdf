'use client'

import { PlusCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

function PlaceholderDocument() {
    const router = useRouter();

    const handleCLick = () => {
        //check if user is pro or free and if they're over the file limit, push to upgrade screen
        router.push("/dashboard/upload")
    }

return (
    <Button
    onClick={handleCLick}
    className='flex flex-col items-center w-64 h-80 dark:hover:bg-slate-800 rounded-xl dark:bg-gray-900 bg-gray-200 
        text-gray-400'>
        <PlusCircleIcon className='h-16 w-16' />
        <p>Add a document</p>
    </Button>
)}

export default PlaceholderDocument
