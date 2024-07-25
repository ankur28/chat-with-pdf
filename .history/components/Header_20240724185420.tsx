import { SignedIn, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

function Header() {
  return (
    <div className='flex justify-between bg-white shadow-sm p-5 border-b'>
      <Link href="/dashboard" className='text-2xl'>
        Chat to <span className='text-indigo-600'>PDF</span>
      </Link>

      <SignedIn>
      <div className='flex items-center space-x-2'>
        <Button asChild variant="link" className='hidden md:flex'>
            <Link href="/dashboard/upgrade">Pricing</Link>
        </Button>
        <Button asChild variant="outline" className='hidden md:flex'>
            <Link href="/dashboard">My Documents</Link>
        </Button>
        <Button asChild variant="outline" className='hidden md:flex'>
            <Link href="/dashboard/upload">
                My Documents
                </Link>
        </Button>
        {/* upgrade button */}
       
           <UserButton></UserButton>
        </div>
      </SignedIn>
    </div>
  )
}

export default Header
