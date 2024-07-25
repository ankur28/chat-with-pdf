import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
      <Link href="/dashboard">
        Chat to <span className='text-indigo-600'></span>
      </Link>
    </div>
  )
}

export default Header
