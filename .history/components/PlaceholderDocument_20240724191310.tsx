import { PlusCircleIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

function PlaceholderDocument() {
return (
    <Button className='flex flex-col'>
        <PlusCircleIcon className='h-16 w-16' />
        <p>Add a document</p>
    </Button>
)}

export default PlaceholderDocument
