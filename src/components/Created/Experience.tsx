import { EXPERIENCE_INTERFACE } from "@/CommonInterface";
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
import { Separator } from "../ui/separator";

const Experience = () => {
  const Experiences: EXPERIENCE_INTERFACE[] = [
    {
      Company: "Adani Digital Labs",
      Position: "Frontend Developer",
      Summary:
        "As an Executive Frontend Developer at Adani Digital Labs, I focus on enhancing web performance and user experience. I optimize Core Web Vitals to improve search rankings, conduct performance audits using tools like Lighthouse and GTmetrix, and implement Next.js server-side rendering for better site visibility. Additionally, I develop sitemaps to enhance navigation and refactor codebases with SonarQube to ensure high-quality, efficient code.",
      TechStack: ["Next.js", "React.js", "Jquery", "EJS",'Google Lighthouse',"Page Insights"],
      Languages: ["React", "JavaScript", "Css"],
      Duration: "June 2024-Current",
    },
    {
      Company: "JSW One Platforms",
      Position: "Software Development Intern",
      Summary:
        "During my internship, I actively contributed to the Master Data Admin project as a Software Engineer. I focused on enhancing the admin panel, particularly the Material Master module, which serves as the hub for data management. My responsibilities included integrating API, improving listing functionalities for categories, products, and variants, and implementing pre-commit hooks to ensure code quality.",
      TechStack: ["Next.js", "Nuxt.js", "Vue.js", "Husky"],
      Languages: ["React", "JavaScript", "Css"],
      Duration: "May-July 2023",
    },
  ];
  return (
    <div className="m-4 lg:mx-20 xl:mx-48" id="Experience">
      <div className="flex justify-center m-12">
        <div className="text-4xl">Experience</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 m-4">
        {Experiences?.map((Experience, index) => {
          return (
                <div key={index} className="col-span-full">
              <Card>
                <CardHeader>
                  <CardTitle>{Experience.Company}</CardTitle>
                  <CardDescription className="text-reddish">
                    {Experience.Position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{Experience.Summary}</p>
                </CardContent>
                <CardFooter className="flex-wrap">
                  {Experience?.TechStack?.map((Stack, idx) => {
                    return (
                      <Badge
                        className="m-1 text-reddish bg-primary"
                        key={idx}
                      >
                        {Stack}
                      </Badge>
                    );
                  })}
                  {Experience?.Languages?.map((Language, idx) => {
                    return (
                      <Badge
                        className="m-1 text-reddish bg-primary"
                        key={idx}
                      >
                        {Language}
                      </Badge>
                    );
                  })}
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="flex mt-12"><Separator className="bg-reddish" /></div>
    </div>
    
  );
};

export default Experience;
