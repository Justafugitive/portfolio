/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import aosLogo from '../public/aos-logo.jpeg'
import { motion } from 'framer-motion'
import Image from 'next/image'
import JavascriptLogo from '../public/javascript-logo.png'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-fill object-center" 
        src={urlFor(experience?.companyImage).url()}
        alt="aos logo"
        />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
            <p className="font-bold text-2xl mt-1">Industry Attachment</p>
            <div className="flex space-x-2 my-2">
                {experience?.technologies?.map(technology => (
                    <img 
                    key={technology._id}
                    className="h-10 w-10 rounded-full object-cover object-center"
                    src={urlFor(technology.image).url()}
                    />
                ))}
            </div>
            {/* <p className="uppercase py-5 text-gray-500">
                  {new Date(experience.dateStarted).toDateString()} -{" "}
                  {experience.isCurrentlyWorkingHere 
                  ? "Present" 
                  : new Date(experience.dateEnded).toDateString()}
            </p> */}

            <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 w-4/5 pr-5 overflow-y-scroll 
            scrollbar-thin scrollbar-track-black scrollbar-thumb-[#47B5FF]/80">
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
            </ul>
        </div>
    </article>
  )
}