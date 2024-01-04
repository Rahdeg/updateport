/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { ProjectsData } from '@/lib/helpers'
import ProjectCard from './project-card'

const Projects = () => {
    return (
        <section id='projects' className='flex items-center justify-center gap-12 flex-col my-12'>
            <div className='flex items-center justify-center w-full py-24'>
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 200 }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{
                        delay: 0.4
                    }}
                    className=' flex items-center justify-around w-52'>
                    <img src="/leaf.png" alt='dd' className=' w-6 h-auto object-contain' />
                    <p
                        className='text-transparent bg-clip-text text-texlight bg-gradient-to-r from-primary to-secondary '

                    >Projects</p>
                    <img src="/leaf2.png" alt='dd' className=' w-6 h-auto object-contain' />
                </motion.div>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 w-full  '>
                <AnimatePresence>
                    {
                        ProjectsData && ProjectsData.map((project, idx) => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    }
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Projects