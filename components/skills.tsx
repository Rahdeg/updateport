/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import SkillCard from './skill-card'

const Skills = () => {
    return (
        <section id='skills' className='flex items-center justify-center gap-12 flex-col my-12'>
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
                    <p className=' text-texlight text-base  tracking-wide text-justify'>
                        I create interactive experiences for people using modern web technology,independent fellow who has soft spot for team/group work. Committed to high standards of service, performance and integrity. Dedicated and reliable with organized, proactive and problem-solving nature.
                    </p>
                </div>
                <div className='w-full flex flex-col items-center justify-center px-8 gap-4'>
                    <SkillCard skill={'HTML5'} percentage={'90%'} color={'#FF3F3F'} move />
                    <SkillCard skill={'TAILWIND CSS'} percentage={'85%'} color={'#008FFF'} />
                    <SkillCard skill={'Javascript'} percentage={'75%'} color={'#FFB900'} move />
                    <SkillCard skill={'React & NextJs'} percentage={'80%'} color={'#00FFF3'} />
                    <SkillCard skill={'NodeJs'} percentage={'75%'} color={'#14DB00'} move />
                    <SkillCard skill={'MongoDB, Mysql, Firebase'} percentage={'75%'} color={'#FFE400'} />
                </div>
            </div>
        </section>
    )
}

export default Skills