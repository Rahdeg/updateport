/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
    return (
        <section id='about' className='flex items-center justify-center gap-12 flex-col my-12'>
            <div className='flex items-center justify-center w-full py-24'>
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 200 }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{
                        delay: 0.4
                    }}
                    className=' flex items-center justify-around w-52'>
                    <img src="/Leaf.png" alt='dd' className=' w-6 h-auto object-contain' />
                    <p
                        className='text-transparent bg-clip-text text-texlight bg-gradient-to-r from-primary to-secondary '

                    >About</p>
                    <img src="/leaf2.png" alt='dd' className=' w-6 h-auto object-contain' />
                </motion.div>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4 w-full  '>
                <div className='w-full flex items-center justify-center px-8'>
                    <div className='w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from bg-primary to-secondary relative' >
                        <img src='/raheemfull.jpg' alt='ik' className='w-full rounded-md h-auto object-contain' />
                        <div className=' absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from bg-primary to-secondary rounded-md blur-[5px] -z-10'>

                        </div>
                    </div>
                </div>

                <div className=' w-full px-8 flex flex-col gap-4 items-start justify-start'>
                    <p className=' text-white text-base lg:text-lg  tracking-wide text-justify'>
                        I create interactive experiences for people using modern web technology,independent fellow who has soft spot for team/group work. Committed to high standards of service, performance and integrity. Dedicated and reliable with organized, proactive and problem-solving nature.
                        Driven by an insatiable curiosity and a knack for problem-solving, I leverage HTML, CSS, Tailwind, React, Next.js, Node.js, MongoDB, MySQL, and a host of other tools to craft engaging and functional websites. My journey in this realm spans over four years, during which I have honed my skills, embraced challenges, and thrived in delivering exceptional digital experiences.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About