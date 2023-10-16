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
      Title: "Dank Football Website",
      Url: "",
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
      Url: "",
      Track: "Machine Learning",
      Summary:
        "Developed a model which used Knn classification to predict the whether a child is a senior or a junior according to theshoes size and height.",
      TechStack: ["sklearn", "numpy", "pandas"],
    },
    {
      Title: "Theobroma Website",
      Url: "",
      Track: "Full stack development",
      Summary: "Developed a clone of the Frontend of an e-commerce site.",
      TechStack: ["HTML", "CSS", "Bootstap"],
    },
  ];
  return (
    <div className="m-4 lg:mx-20 xl:mx-48" id="Projects">
      <div className="flex justify-center m-12">
        <div className="text-4xl">Projects</div>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1  gap-4 m-4">
        {Projects?.map((Project, index) => {
          return (
            <Link key={index} href={Project.Url}>
              <div  className="h-max">
                <Card className="">
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
                          className="m-1 text-reddish bg-secondary"
                          key={idx}
                        >
                          {Stack}
                        </Badge>
                      );
                    })}
                  </CardFooter>
                </Card>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex mt-12">
        <Separator className="bg-reddish" />
      </div>
    </div>
  );
};

export default Projects;
