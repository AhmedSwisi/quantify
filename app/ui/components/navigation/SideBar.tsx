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
      <NavigationMenu className=' flex flex-col justify-start bg-[#561BCC] items-start h-screen w-auto max-w-64'>
          <div className='flex flex-col flex-grow mx-auto flex-1 gap-2'>
            <div className='flex flex-row gap-2 h-14 items-center rounded-md px-4'>
              <ArrowTrendingUpIcon  className='w-12 h-12 stroke-white stroke-2'/>
              <h1 className='text-white font-extrabold text-xl'>Quantify</h1>
            </div>
            <div className='flex flex-col gap-4 '>
              <Link href='/' autoFocus  className='flex flex-row  gap-2 focus:outline-none focus:ring-0 focus:border-black focus:border-2 h-14 items-center rounded-md px-4 transition ease-in-out hover:bg-[#3B01AD] duration-300 ...'>
                <Squares2X2Icon className='h-6 w-6 stroke-white stroke-2' />
                <p className='text-white font-medium  text-md'>Dashboard </p>
              </Link>
              <Link href='/currency' className='flex flex-row gap-2 h-14 items-center rounded-md px-4 focus:outline-none focus:ring-0 focus:border-black focus:border-2 transition ease-in-out hover:bg-[#3B01AD] duration-300 ... '>
                <CurrencyDollarIcon className='h-6 w-6 stroke-white stroke-2' />
                <p className='text-white font-medium text-md'>Currency Exchange </p>
              </Link>
              <Link href='/settings' className='flex flex-row gap-2 h-14 items-center rounded-md px-4 focus:outline-none focus:ring-0 focus:border-black focus:border-2 transition ease-in-out hover:bg-[#3B01AD] duration-300 ...'>
                <Cog8ToothIcon className='h-7 w-7 stroke-white stroke-2' />
                <p className='text-white font-medium  text-md'>Settings </p>
              </Link>
            </div>
            <NavigationMenuLink className='flex flex-row gap-2 h-14 items-center rounded-md px-4 mb-4 mt-auto focus:ring-0 focus:outline-none focus:border-black focus:border-2 transition ease-in-out hover:bg-[#3B01AD] duration-300 ...'>
              <ArrowLeftStartOnRectangleIcon className='w-6 h-6 stroke-white stroke-2'/>
              <h1 className='text-white font-medium  '>Logout </h1>
            </NavigationMenuLink>
          </div>
      </NavigationMenu>
  )
}

export default SideBar