import { SignedIn, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

function Header() {
  return (
    <div>
      <Link href="/dashboard" className='text-2xl'>
        Chat to <span className='text-indigo-600'>PDF</span>
      </Link>

      <SignedIn>
      <div className='flex items-center space-x-23'>
        <Button asChild variant="link" className='hidden md:flex'>
            <Link href="/dashboard/upgrade">Pricing</Link>

            
        </Button>
        {/* upgrade button */}
       
           <UserButton></UserButton>
        </div>
      </SignedIn>
    </div>
  )
}

export default Header
