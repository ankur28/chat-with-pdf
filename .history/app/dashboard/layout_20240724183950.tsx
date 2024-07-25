import { ClerkLoaded } from '@clerk/nextjs'
import React from 'react'

function DashboardLayout({children}: { children: React.ReactNode}) {
  return (
    <ClerkLoaded>
        
    </ClerkLoaded>
    <div>
      {children}
    </div>
  )
}

export default DashboardLayout
