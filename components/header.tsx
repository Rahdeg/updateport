"use client"
import { Menus } from '@/lib/helpers'
import React from 'react'
import MenuItem from './menu-item'

const Header = () => {
    return (
        <div className=' fixed bottom-0 right-0 lg:top-0 w-full h-auto lg:h-screen lg:w-32 justify-center flex items-end lg:items-center pb-8 lg:pb-0 z-50'>
            <div className=' px-4 py-3 lg:py-12 rounded-full border border-[rgba(225,225,225,0.3)] flex flex-row lg:flex-col items-center justify-center gap-4 lg:gap-12 duration-200 backdrop-blur-md'>
                {
                    Menus && Menus.map((menu) => (
                        <MenuItem key={menu.id} data={menu} />
                    ))
                }
            </div>

        </div>
    )
}

export default Header