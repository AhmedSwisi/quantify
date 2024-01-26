'use client'
import React from 'react'
import Link from 'next/link'
import { Cog8ToothIcon, CurrencyDollarIcon,Squares2X2Icon, ArrowTrendingUpIcon, ArrowLeftStartOnRectangleIcon  } from '@heroicons/react/24/outline'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const SideBar = () => {
  return (
      <NavigationMenu className=' flex flex-col justify-start bg-[#561BCC] items-start min-h-screen w-auto max-w-64  gap-16'>
          <div className='flex flex-col flex-grow justify-between mx-auto flex-1'>
            <div className='flex flex-row gap-2 h-14 items-center rounded-md px-4'>
              <ArrowTrendingUpIcon className='w-8 h-8 stroke-white'/>
              <h1 className='text-white font-bold'>Quanitfy </h1>
            </div>
            <NavigationMenuLink autoFocus href='/dashboard' className='flex flex-row gap-2 focus:outline-none focus:ring-0 focus:border-black focus:border-2 h-14 items-center rounded-md px-4 transition ease-in-out hover:bg-[#3B01AD] duration-300 ...'>
              <Squares2X2Icon className='h-6 w-6 stroke-white' />
              <p className='text-white'>Dashboard </p>
            </NavigationMenuLink>
            <NavigationMenuLink href='/currency' className='flex flex-row gap-2 h-14 items-center rounded-md px-4 focus:outline-none focus:ring-0 focus:border-black focus:border-2 transition ease-in-out hover:bg-[#3B01AD] duration-300 ... '>
              <CurrencyDollarIcon className='h-6 w-6 stroke-white' />
              <p className='text-white'>Currency Exchange </p>
            </NavigationMenuLink>
            <NavigationMenuLink href='/settings' className='flex flex-row gap-2 h-14 items-center rounded-md px-4 focus:outline-none focus:ring-0 focus:border-black focus:border-2 transition ease-in-out hover:bg-[#3B01AD] duration-300 ...'>
              <Cog8ToothIcon className='h-6 w-6 stroke-white' />
              <p className='text-white'>Settings </p>
            </NavigationMenuLink>
            <NavigationMenuLink className='flex flex-row gap-2 h-14 items-center rounded-md px-4 mb-4 focus:ring-0 focus:outline-none focus:border-black focus:border-2 transition ease-in-out hover:bg-[#3B01AD] duration-300 ...'>
            <ArrowLeftStartOnRectangleIcon className='w-6 h-6 stroke-white'/>
            <h1 className='text-white '>Logout </h1>
          </NavigationMenuLink>
          </div>
      </NavigationMenu>
  )
}

export default SideBar