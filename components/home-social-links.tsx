"use client"

import { SocialItem } from '@/types'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface HomeSocialLinksProps {
    social: SocialItem;
    index: number
}

const HomeSocialLinks = ({ social, index }: HomeSocialLinksProps) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a href={social.url} key={social.id} className='w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary relative p-[2px] cursor-pointer'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{ delay: index * 0.1 }}
        >
            <AnimatePresence>
                {
                    isHovered && (
                        <motion.div className={cn("absolute inset-1 blur-md bg-gradient-to-br from-primary to-secondary -z-10")} />


                    )
                }
                <div className=' w-full h-full rounded-full bg-bgPrimary flex items-center justify-center'>
                    <social.Icon className={cn(" text-texlight",)} />
                </div>
            </AnimatePresence>
        </motion.a>
    )
}

export default HomeSocialLinks