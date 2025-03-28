import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="mt-4 xl:mt-12 lg:mt-16 m-4 lg:mx-20 xl:mx-48 bg-red" id="AboutMe">
      <div className="flex grid grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
        <div className="col-span-2 w-[80%]">
          <div className="text-2xl my-4">Hi, my name is</div>
          <div className="text-reddish text-2xl my-4 shadow-dance-text">Aditya Mehrotra</div>
          <div className="text-xl lg:text-l my-4">
            I am a <span className="">MERN stack developer</span> 
            {"\ "}passionate about crafting dynamic web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I specialize in building intuitive user interfaces and optimizing server-side performance. I believe in leveraging technology to empower and connect people, constantly refining my skills to exceed expectations. Let{"\'"}s connect and collaborate on your next project!
          </div>
          <div>
            <Button
              variant="destructive"
              className="my-4 lg:my-16 bg-reddish transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 text-primary hover:text-secondary hover:bg-reddish "
            >
              <Link href="#Projects" passHref>Go to projects</Link>
              
            </Button>
          </div>
        </div>
        <div className="flex hidden items-center lg:block">
          <Avatar className="w-full h-auto max-w-[264px]">
            <AvatarImage src="/ProfilePhoto.JPG" className="rounded-[50%] mt-16 object-cover" />
            <AvatarFallback>Image</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;