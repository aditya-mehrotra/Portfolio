import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";

const AboutMe = () => {
  return (
    <div className="mt-36  m-4 lg:mx-20 xl:mx-48 bg-red" id="AboutMe">
      <div className="flex grid grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
        <div className="col-span-2">
          <div className="text-2xl my-4">Hi, my name is</div>
          <div className="text-reddish text-4xl my-4">Aditya Mehrotra</div>
          <div className="text-2xl my-4">
            I am a <span className="bg-primary text-secondary  rounded-sm p-1">Fullstack Developer.</span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{"\'"}s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </div>
          <div>
            <Button
              variant="destructive"
              className="my-16 bg-reddish transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 text-primary hover:text-secondary hover:bg-reddish "
            >
              Go to projects
            </Button>
          </div>
        </div>
        <div className="flex hidden items-center lg:block">
          <Avatar className="w-full h-auto">
            <AvatarImage src="/cooldude.png" />
            <AvatarFallback>Image</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex mt-12"><Separator className="bg-reddish" /></div>
    </div>
  );
};

export default AboutMe;
