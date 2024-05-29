import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa6';
import { CheckCircle2 } from 'lucide-react';


interface ProjectCardProps {
    project: {
        id: string;
        name: string;
        imgSrc: string;
        gitURL: string;
        features: string[];
        url: string;
    }
}

const ProjectCard = ({ project }: ProjectCardProps) => {

    const [isHovered, setIsHovered] = useState(false)

    const onClick = (e: React.MouseEvent<Element>) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(project.gitURL, '_blank');
    }
    return (
        <motion.div key={project.id}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => window.open(project.url, '_blank')}
            className=' overflow-hidden cursor-pointer relative rounded-lg'>
            <motion.img
                whileHover={{ scale: 1.1 }}
                src={project.imgSrc} alt='ui' className='w-full h-full object-contain rounded-lg' />
            {
                isHovered && (
                    <motion.div className=' absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-col gap-2'>
                        <p className=' text-xl text-primary'>{project.name}</p>
                        <div onClick={onClick}>
                            <FaGithub className="  text-3xl text-white hover:text-primary" />
                        </div>
                        <ul className="space-y-2 mt-2">
                            <li className="flex items-center">
                                <CheckCircle2
                                    className="size-5 mr-2 fill-primary text-black"
                                />
                                <p className="text-sm text-white">
                                    {project.features[0]}
                                </p>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle2
                                    className="size-5 mr-2 fill-primary text-black"
                                />
                                <p className="text-sm text-white">
                                    {project.features[1]}
                                </p>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle2
                                    className="size-5 mr-2 fill-primary text-black"
                                />
                                <p className="text-sm text-white">
                                    {project.features[2]}
                                </p>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle2
                                    className="size-5 mr-2 fill-primary text-black"
                                />
                                <p className="text-sm text-white">
                                    {project.features[3]}
                                </p>
                            </li>
                        </ul>
                    </motion.div>
                )
            }

        </motion.div>
    )
}

export default ProjectCard