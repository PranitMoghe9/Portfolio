import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Pranit",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* always use Image component of Nextjs for images */}
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAo7G-DqIYk_ajD8ar2tmRhoFXCybSbdmzGA&usqp=CAU"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#project">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
