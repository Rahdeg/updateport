"use client"
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Typewriter from './typewriter'
import { Socials } from '@/lib/helpers'
import HomeSocialLinks from './home-social-links'

const HomePage = () => {
    return (
        <section id='home' className='flex items-center justify-center gap-12 flex-col relative'>
            <div className=' flex items-center justify-center lg:px-14  '>
                <div className=' h-full w-full flex flex-col gap-4 items-center lg:items-center justify-center'>
                    <h2 className=' text-3xl lg:text-4xl text-texlight'>
                        Hello, it&apos;s me
                        <span className=' block tracking-wider text-4xl lg:text-6xl mt-4 text-white'>
                            Raheem
                        </span>
                    </h2>
                    <h2 className=' text-2xl lg:text-4xl mt-4 text-texlight'>
                        And I&apos;m{" "}
                        <Typewriter words={["a Developer..", "a Freelancer.."]} speed={100} />
                    </h2>
                    <p className=' text-base lg:text-xl text-center text-texlight  mt-6'>
                        I create interactive experiences for people using modern web technology,independent fellow who has soft spot for team/group work. Committed to high standards of service, performance and integrity. Dedicated and reliable with organized, proactive and problem-solving nature.i have a solid foundation in science and a fervor for creative expression through technology, ventured into the world of web development armed with a wealth of experience and a diverse skill set.
                    </p>
                    <div className=' flex items-center justify-center mt-16 gap-16'>
                        <AnimatePresence>
                            {
                                Socials && Socials.map((social, index) => (
                                    <HomeSocialLinks key={social.id} social={social} index={index} />
                                ))
                            }
                        </AnimatePresence>
                    </div>
                    <div className='flex items-center justify-center gap-x-3'>
                        <a href='#'
                            style={{ boxShadow: "inset 0 0 10px rgba(225,225,225,0.3)" }}
                            className=' mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary'

                        >
                            <p
                                className='group-hover:text-transparent group-hover:bg-clip-text text-texlight group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary '

                            >Hire me</p>
                        </a>
                        <a href='https://drive.google.com/file/d/1HGBOsJCL7FKpJ3GDehy1e9ThayXI888K/view' rel="" target="_blank"
                            style={{ boxShadow: "inset 0 0 10px rgba(225,225,225,0.3)" }}
                            className=' mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary'

                        >
                            <p
                                className='group-hover:text-transparent group-hover:bg-clip-text text-texlight group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary '

                            >Download Cv</p>
                        </a>
                    </div>

                </div>

                {/* <div className='w-full h-full flex items-start justify-center lg:items-center'>
                    <div>
                        <motion.img
                            initial={{ y: 0 }}
                            animate={{ y: [-10, 10, -10] }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "linear"
                            }}
                            src='raheemfull.jpg'
                            alt='rah'
                            className=' w-auto h-auto object-contain rounded-full'
                        />

                    </div>

                </div> */}

            </div>
        </section>
    )
}

export default HomePage