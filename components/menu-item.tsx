"use client"
import { MenuItem } from '@/types'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'



interface MenuItemProps {
    data: MenuItem
}

const MenuItem = ({ data }: MenuItemProps) => {

    const [ishovered, setIshovered] = useState(false);

    return (

        <Link href={data.uri} className='w-12 h-12 rounded-full flex items-center justify-center group cursor-pointer hover:bg-gradient-to-br hover:from-primary hover:to-secondary relative'
            onMouseEnter={() => setIshovered(true)}
            onMouseLeave={() => setIshovered(false)}
        >
            <data.Icon className=' text-texlight group-hover:text-bgPrimary text-xl' />
            {/* tooltip */}
            <AnimatePresence>
                {
                    ishovered && (
                        <motion.div
                            initial={{ opacity: 0, x: -25 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -25 }}
                            className=' hidden lg:block absolute bg-white rounded-md px-6 py-2 -left-[140px] after:absolute after:-right-1 after:top-3 after:w-3 after:h-3 after:bg-white after:rotate-45'
                            style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.4)" }}
                        >
                            <p className=' text-bgPrimary'>
                                {data.name}
                            </p>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </Link>





    )
}

export default MenuItem