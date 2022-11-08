import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Image from 'next/image'
import profile from '.././public/BucketHat.jpeg'
import Link from 'next/link'
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo;
}

export default function Hero({ pageInfo }: Props) {
    const [ text, count ] = useTypewriter({
        words: [
            `Hi, My Name is ${pageInfo?.name}`,
            "A-FullStack-Developer", 
            "<TechEnthusiast&Gamer/>"],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
      className="relative rounded-full h-16 w-16 mx-auto object-cover"
      src={profile} 
      alt="buckethat image"
      width={150}
      height={150}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
         <h1>
           <span className="text-5xl lg:text-6xl font-semibold px-10">{text}</span>
           <Cursor cursorColor="#47B5FF"/>
         </h1>

         <div className='pt-5'>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
         </div>
      </div>
    </div>
  )
}