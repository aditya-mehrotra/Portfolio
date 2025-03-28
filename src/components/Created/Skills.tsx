import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const Skills = () => {
  const skills: string[] = [
    "Next.js",
    "Nuxt.js",
    "React.js",
    "Vue.js",
    "Node.js",
    "Express",
    "Passport.js",
    "Material UI",
    "shadcn",
    "MongoDb",
    "sklearn",
    "pandas",
    "numpy",
    "HTML",
    "CSS",
    "Bootstrap",
    "tailwaindcss",
  ];

  return (
    <div className="m-4 mt-32 lg:mx-20 xl:mx-48" id="Skills">
      <div className="flex justify-center m-12">
        <div className="text-4xl">Skills</div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap  lg:w-3/5 justify-center gap-2">
          {skills.map((skill, index) => {
            return (
              <Button className="bg-reddish pointer-events-none text-primary" key={index}>
                {skill}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
