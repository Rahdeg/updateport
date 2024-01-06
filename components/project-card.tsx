import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa6';


interface ProjectCardProps {
    project: {
        id: string;
        name: string;
        imgSrc: string;
        gitURL: string;
    }
}

const ProjectCard = ({ project }: ProjectCardProps) => {

    const [isHovered, setIsHovered] = useState(false)
    return (
        <motion.div key={project.id}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className=' overflow-hidden cursor-pointer relative rounded-lg'>
            <motion.img
                whileHover={{ scale: 1.1 }}
                src={project.imgSrc} alt='ui' className='w-full h-full object-contain rounded-lg' />
            {
                isHovered && (
                    <motion.div className=' absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-col gap-2'>
                        <p className=' text-xl text-primary'>{project.name}</p>
                        <a href={project.gitURL} target="_blank" title='kk'>
                            <FaGithub className="  text-3xl text-white hover:text-primary" />
                        </a>
                    </motion.div>
                )
            }

        </motion.div>
    )
}

export default ProjectCard