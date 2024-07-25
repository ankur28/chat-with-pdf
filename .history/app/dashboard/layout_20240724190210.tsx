import Header from '@/components/Header'
import { ClerkLoaded } from '@clerk/nextjs'
import React from 'react'

function DashboardLayout({children}: { children: React.ReactNode}) {
  return (
    <ClerkLoaded>
        {/* the main layout has flex col so here flex-1 to use max space for the parent */}
        <div className='flex-1 flex flex-col'>
            <Header />
          <main className='flex-1 overflow-y-auto'>{children}</main>
        </div>
    </ClerkLoaded>
  )
}

export default DashboardLayout
