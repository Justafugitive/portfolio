import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { Skill } from '../typings'

type Props = {
    directionleft?: boolean
    skill: Skill;
}

const Skill = ({ directionleft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
        initial={{opacity: 0,
        x: directionleft ? -200 : 200}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out scale-50"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill