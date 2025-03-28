import { EXPERIENCE_INTERFACE, PROJECT_INTERFACE } from "@/CommonInterface";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";

const Projects = () => {
  const Projects: PROJECT_INTERFACE[] = [
    {
      Title: "Classification of Deepfakes using CNN",
      Url: "https://github.com/aditya-mehrotra/Deepfake_Detection_Images",
      Track: "Machine Learning",
      Summary:
        "Developed a Convolution neural network to classify AI generated and real faces which were sourced from a GAN created by NVIDIA.",
      TechStack: [
        "Tensorflow",
        "Keras",
        "Pandas",
        "Numpy",
        "MathPlotLib"
      ],
    },
    {
      Title: "Dank Football Website",
      Url: "https://github.com/aditya-mehrotra/DankFootball",
      Track: "Full stack development",
      Summary:
        "Collaborated on a Full stack website. In the site we developed a working user login and profile system.",
      TechStack: [
        "Node.js",
        "express",
        "Passport.js",
        "React",
        "Material UI",
        "MongoDb",
      ],
    },
    {
      Title: "KNN Classification Model",
      Url: "https://github.com/aditya-mehrotra/Machine-Learning/tree/main/Mandatory%20Task",
      Track: "Machine Learning",
      Summary:
        "Developed a model which used Knn classification to predict the whether a child is a senior or a junior according to the shoes size and height.",
      TechStack: ["sklearn", "numpy", "pandas"],
    },
    // {
    //   Title: "Theobroma Website",
    //   Url: "https://github.com/aditya-mehrotra/theobroma_project",
    //   Track: "Full stack development",
    //   Summary: "Developed a clone of the Frontend of an e-commerce site.",
    //   TechStack: ["HTML", "CSS", "Bootstap"],
    // },
  ];
  return (
    <div className="m-4 mt-32 lg:mx-20 xl:mx-48" id="Projects">
      <div className="flex justify-center m-12">
        <div className="text-4xl">Projects</div>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1  gap-4 m-4">
        {Projects?.map((Project, index) => {
          return (
            <div className="" key={index}>
              <Link  href={Project.Url} className="">
                <Card className="h-full flex flex-wrap justify-between">
                  <CardHeader>
                    <CardTitle>{Project.Title}</CardTitle>
                    <CardDescription className="text-reddish">
                      {Project.Track}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{Project.Summary}</p>
                  </CardContent>
                  <CardFooter className="flex-wrap">
                    {Project?.TechStack?.map((Stack, idx) => {
                      return (
                        <Badge
                          variant={"outline"}
                          className="m-[2px] text-reddish"
                          key={idx}
                        >
                          {Stack}
                        </Badge>
                      );
                    })}
                  </CardFooter>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
