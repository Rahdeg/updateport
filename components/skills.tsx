/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import SkillCard from './skill-card'

const Skills = () => {
    return (
        <section id='skills' className='flex items-center justify-center gap-12 flex-col my-12 lg:px-10'>
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

                    >Skills</p>
                    <img src="/leaf2.png" alt='dd' className=' w-6 h-auto object-contain' />
                </motion.div>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4 w-full  '>


                <div className=' w-full px-8 flex flex-col gap-4 items-start justify-start'>
                    <p
                        className='text-transparent bg-clip-text text-texlight bg-gradient-to-r from-primary to-secondary '

                    >My Skills & Work Experience</p>
                    <p className=' text-white text-base   tracking-wide text-justify'>
                        My expertise extends across the following areas:

                        Full-Stack Development: Proficient in crafting end-to-end solutions that seamlessly merge functionality and aesthetics.
                        HTML/CSS: Mastery in structuring web content and styling for optimal user interaction.
                        React/Next.js: Leveraging these frameworks to build dynamic and responsive web applications.
                        Node.js: Utilizing the power of server-side scripting for robust backend development.
                        Databases (MongoDB, MySQL): Experience in database management, ensuring efficient data handling for applications.<br />

                        <span className=' block py-5 text-transparent bg-clip-text text-texlight bg-gradient-to-r from-primary  to-secondary '> Work Experience:</span>
                        Reown
                        Freelancer
                        September 2023 -  Till date
                        <br />
                        Tracksend
                        Software Developer
                        April 2023 - September 2023 (6 months)
                        <br />
                        IYSI GLOBAL RES LTD
                        BACKEND DEVELOPER
                        September 2022 - January 2023 (5 months)
                        <br />
                        Zuri Team, Inc.
                        LEAD FRONTEND DEVELOPER
                        September 2022 - November 2022 (3 months)
                        <br />
                        Walettcafe - Frontend Developer
                        November 2020 - January 2022 (1 year 3 months)

                    </p>


                </div>
                <div className='w-full flex flex-col items-center justify-center px-8 gap-4'>
                    <SkillCard skill={'HTML5'} percentage={'90%'} color={'#FF3F3F'} move />
                    <SkillCard skill={'TAILWIND CSS'} percentage={'85%'} color={'#008FFF'} />
                    <SkillCard skill={'Javascript & Typescript'} percentage={'85%'} color={'#FFB900'} move />
                    <SkillCard skill={'React & NextJs'} percentage={'80%'} color={'#00FFF3'} />
                    <SkillCard skill={'NodeJs'} percentage={'75%'} color={'#14DB00'} move />
                    <SkillCard skill={'MongoDB, Mysql, Firebase'} percentage={'75%'} color={'#FFE400'} />
                </div>
            </div>
        </section>
    )
}

export default Skills