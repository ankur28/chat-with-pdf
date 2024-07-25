import { ClerkLoaded } from '@clerk/nextjs'
import React from 'react'

function DashboardLayout({children}: { children: React.ReactNode}) {
  return (
    <ClerkLoaded>
        
        <div>
            {children}
        </div>
    </ClerkLoaded>
  )
}

export default DashboardLayout
