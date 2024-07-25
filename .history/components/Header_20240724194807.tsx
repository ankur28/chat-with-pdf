import { SignedIn, UserButton } from '@clerk/nextjs'
import { FilePlus2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

function Header() {
    const { setTheme } = useTheme()

  return (
    <div className='flex justify-between bg-white shadow-sm p-5 border-b'>
      <Link href="/dashboard" className='text-2xl'>
        Chat to <span className='text-indigo-600'>PDF</span>
      </Link>

      <SignedIn>
      <div className='flex items-center space-x-2'>
        {/* dar/light theme */}
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

        <Button asChild variant="link" className='hidden md:flex'>
            <Link href="/dashboard/upgrade">Pricing</Link>
        </Button>
        <Button asChild variant="outline" >
            <Link href="/dashboard">My Documents</Link>
        </Button>
        <Button asChild variant="outline" className='border-indigo-600' >
            <Link href="/dashboard/upload">
                <FilePlus2 className='text-indigo-600' />
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
