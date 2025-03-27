import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { NAVBAR_ITEMS } from "@/CommonInterface";
import Link from "next/link";
import Sheet from "./Sheet";
import CustomSheet from "./CustomSheet";
import { useState } from "react";
const NavBar = () => {
  const NavBarItems: NAVBAR_ITEMS = {
    Brand: { title: "Aditya Mehrotra", Url: "/" },
    Items: [
      { title: "About me", Url: "#AboutMe" },
      { title: "Experience", Url: "#Experience" },
      { title: "Projects", Url: "#Projects" },
      { title: "Contact me", Url: "#ContactMe" },
    ],
    EndLink: { title: "Resume", Url: "/Aditya Mehrotra(23-02-2025).pdf" },
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleOpensheet = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex m-4 lg:mx-20 xl:mx-48">
      <div className="grow flex m-2 text-2xl">
        <Link href={NavBarItems.Brand.Url} legacyBehavior passHref>
          <span className="cursor-pointer">
            <span className="text-reddish">Aditya </span> Mehrotra
          </span>
        </Link>
      </div>
      <div className="hidden lg:block flex">
        <NavigationMenu>
          <NavigationMenuList className="flex grid grid-cols-5 gap-4">
            {NavBarItems.Items?.map((Item, index) => {
              return (
                <div key={index}>
                  <NavigationMenuItem className="hover:text-reddish">
                    <Link href={Item.Url} legacyBehavior passHref>
                      <NavigationMenuLink>
                        <span className="text-reddish">
                          0{index + 1}. &nbsp;
                        </span>
                        {Item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </div>
              );
            })}
            <NavigationMenuItem className="">
              <Button
                variant="destructive"
                className="bg-reddish transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 text-primary hover:text-secondary hover:bg-reddish "
              >
                <Link href={NavBarItems.EndLink?.Url} target="_blank">{NavBarItems.EndLink?.title}</Link>
                
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="lg:hidden flex  text-2xl">
        <div className="">
          <Button
            variant="outline"
            size="icon"
            onClick={handleOpensheet}
            className=""
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              ></path>
            </svg>
          </Button>
        </div>
        <CustomSheet open={isOpen}>
          <div className="">
            {NavBarItems.Items?.map((Item, index) => {
              return (
                <div key={index} className="text-xl m-1 hover:text-reddish">
                  <Link href={Item.Url} onClick={handleOpensheet}>
                    <div>
                      <span className="text-reddish">0{index + 1}. &nbsp;</span>
                      {Item.title}
                    </div>
                  </Link>
                </div>
              );
            })}
            <Button
              variant="destructive"
              className="bg-reddish transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 text-primary hover:text-secondary hover:bg-reddish m-1"
              onClick={handleOpensheet}
            >
              {NavBarItems.EndLink?.title}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleOpensheet}
              className="right-0 top-0 absolute z-20"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
        </CustomSheet>
        {/* <Sheet /> */}
      </div>
    </div>
  );
};

export default NavBar;
