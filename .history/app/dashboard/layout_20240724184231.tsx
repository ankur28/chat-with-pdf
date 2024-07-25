import Header from '@/components/Header'
import { ClerkLoaded } from '@clerk/nextjs'
import React from 'react'

function DashboardLayout({children}: { children: React.ReactNode}) {
  return (
    <ClerkLoaded>
        {/* the main layout has flex col so here flex-1 */}
        <div className='flex-1 flex flex-col'>
            <Header />
            {children}
        </div>
    </ClerkLoaded>
  )
}

export default DashboardLayout
