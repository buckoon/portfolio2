import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import ProfImage from './images/prof3.jpg'

type Props = {}

function Hero({}: Props) {
    const [text, helper] = useTypewriter({
        words: [
            "Hi, My Name is Jeremy", 
            "It is nice to meet you!", 
            "Thanks for stopping by!",
        ],
        loop: true,
        delaySpeed: 2000,
      });



  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />

        <Image className="relative rounded-full h-32 w-32 mx-auto object-cover" src={ProfImage}
            
        
        />
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                
                Software Engineer
            
            </h2>
            <h1 className="text-5xl lg:text-6xl font-semibold px-10">{/* text should be 5xl and larrge scrreen 6xL, padding on the large screen to be 10*/}
                <span >{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>

            <div className="pt-5">

                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>

                <Link href="#Experience">
                    <button className="heroButton">Experience</button>
                </Link>

                <Link href="#Skills">
                    <button className="heroButton">Skills</button>
                </Link>

                <Link href="#Experience">
                    <button className="heroButton">Experience</button>
                </Link>
            
                
            </div>
        </div>

        
        
    </div>
  )
}

export default Hero