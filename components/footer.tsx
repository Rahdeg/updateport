
"use client"
import { Socials } from '@/lib/helpers'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import HomeSocialLinks from './home-social-links'

const Footer = () => {
    return (
        <div className='w-full flex flex-col items-center justify-start mt-32 mb-12'>
            <p className=' text-3xl tracking-wide text-texlight'> Adegbite Raheem</p>
            <div className=' flex items-center justify-center gap-16 mt-16'>
                <AnimatePresence>
                    {
                        Socials && Socials.map((social, index) => (
                            <HomeSocialLinks key={social.id} social={social} index={index} />
                        ))
                    }
                </AnimatePresence>
            </div>
            <div className=' w-full grid grid-cols-1 lg:grid-cols-3 mt-24'>
                <p className=' text-primary text-center'>08030727702</p>
                <p className=' text-texlight text-center'>walett95@gmail.com</p>
                <a href='#' className=' text-primary text-center'>Hire me</a>
            </div>
        </div>
    )
}

export default Footer