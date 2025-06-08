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
        "Frontend Developer at Adani Digital Labs, focused on performance, SEO, and user experience for adanione.com. Improved homepage speed by 12% via Core Web Vitals, built scalable SSR solutions with Next.js, and launched TripSure, boosting booking revenue by 10%. Developed a MongoDB-powered SSR logic engine for SEO page control and delivered tested UI components, reducing regression by 40%.",
      TechStack: [
        "Next.js",
        "React.js",
        "Jquery",
        "EJS",
        "Google Lighthouse",
        "Page Insights",
      ],
      Languages: ["React", "JavaScript", "Css"],
      Duration: "June 2024-Current",
    },
    {
      Company: "JSW One Platforms",
      Position: "Software Development Intern",
      Summary:
        "Delivered a scalable admin dashboard using Next.js and Material UI, streamlining metadata management across 3+ product verticals. Accelerated API response handling by 25% with optimized data fetching and lazy rendering. Standardized code quality with pre-commit Husky hooks and ESLint integration, lowering CI errors.",
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
                        className="m-1 text-reddish"
                        variant={"outline"}
                        key={idx}
                      >
                        {Stack}
                      </Badge>
                    );
                  })}
                  {Experience?.Languages?.map((Language, idx) => {
                    return (
                      <Badge
                        variant={"outline"}
                        className="m-1 text-reddish"
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
    </div>
  );
};

export default Experience;
