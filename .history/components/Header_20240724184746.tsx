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
        <Button>
            <Linnk>
                
            </Linnk>
        </Button>
        {/* upgrade button */}
        <div>
           <UserButton></UserButton>
        </div>
      </SignedIn>
    </div>
  )
}

export default Header
