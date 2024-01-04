import { cn } from '@/lib/utils'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface SkillCardProps {
    skill: string,
    percentage: string,
    color: string,
    move?: boolean
}

const SkillCard = ({ skill, percentage, color, move }: SkillCardProps) => {
    return (
        <div className={cn("border border-[rgba(225,225,225,0.3)] rounded-md px-8 py-3 cursor-pointer group w-full flex items-center justify-between relative gap-2")}
            style={{ boxShadow: "inset 0 0 10px rgba(225,225,225,0.3)", marginLeft: move ? -30 : 20 }}> b

            <div className=' flex flex-col items-start justify-start flex-1 gap-2'>
                <p className=' text-base text-white'>{skill}</p>
                <div className=' w-full h-1 rounded-md overflow-hidden bg-[rgba(225,225,225,0.2)] relative'>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: percentage }}
                        transition={{ duration: 1.5 }}
                        className={cn('h-full absolute top-0 left-0', color)}
                        style={{ background: color }}
                    >

                    </motion.div>
                </div>
            </div>
            <div className='w-16 h-12 rounded-md relative overflow-hidden flex items-center justify-center'
                style={{ border: `1px solid ${color}` }}
            >
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: percentage }}
                    transition={{ duration: 1.5 }}
                    style={{ background: color }}
                    className=' w-full absolute bottom-0 left-0 flex items-center justify-center'>
                    <p className=' text-bgPrimary z-10 font-bold font-sans tracking-wider'>{percentage}</p>
                </motion.div>

            </div>

        </div>
    )
}

export default SkillCard