// "use client"

// import * as React from "react"
// import * as SheetPrimitive from "@radix-ui/react-dialog"
// import { cva, type VariantProps } from "class-variance-authority"
// import { X } from "lucide-react"

// import { cn } from "@/lib/utils"

// const Sheet = SheetPrimitive.Root

// const SheetTrigger = SheetPrimitive.Trigger

// const SheetClose = SheetPrimitive.Close

// const SheetPortal = ({
//   className,
//   ...props
// }: SheetPrimitive.DialogPortalProps) => (
//   <SheetPrimitive.Portal className={cn(className)} {...props} />
// )
// SheetPortal.displayName = SheetPrimitive.Portal.displayName

// const SheetOverlay = React.forwardRef<
//   React.ElementRef<typeof SheetPrimitive.Overlay>,
//   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
// >(({ className, ...props }, ref) => (
//   <SheetPrimitive.Overlay
//     className={cn(
//       "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
//       className
//     )}
//     {...props}
//     ref={ref}
//   />
// ))
// SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

// const sheetVariants = cva(
//   "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
//   {
//     variants: {
//       side: {
//         top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
//         bottom:
//           "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
//         left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
//         right:
//           "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
//       },
//     },
//     defaultVariants: {
//       side: "right",
//     },
//   }
// )

// interface SheetContentProps
//   extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
//     VariantProps<typeof sheetVariants> {}

// const SheetContent = React.forwardRef<
//   React.ElementRef<typeof SheetPrimitive.Content>,
//   SheetContentProps
// >(({ side = "right", className, children, ...props }, ref) => (
//   <SheetPortal>
//     <SheetOverlay />
//     <SheetPrimitive.Content
//       ref={ref}
//       className={cn(sheetVariants({ side }), className)}
//       {...props}
//     >
//       {children}
//       <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
//         <X className="h-4 w-4" />
//         <span className="sr-only">Close</span>
//       </SheetPrimitive.Close>
//     </SheetPrimitive.Content>
//   </SheetPortal>
// ))
// SheetContent.displayName = SheetPrimitive.Content.displayName

// const SheetHeader = ({
//   className,
//   ...props
// }: React.HTMLAttributes<HTMLDivElement>) => (
//   <div
//     className={cn(
//       "flex flex-col space-y-2 text-center sm:text-left",
//       className
//     )}
//     {...props}
//   />
// )
// SheetHeader.displayName = "SheetHeader"

// const SheetFooter = ({
//   className,
//   ...props
// }: React.HTMLAttributes<HTMLDivElement>) => (
//   <div
//     className={cn(
//       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
//       className
//     )}
//     {...props}
//   />
// )
// SheetFooter.displayName = "SheetFooter"

// const SheetTitle = React.forwardRef<
//   React.ElementRef<typeof SheetPrimitive.Title>,
//   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
// >(({ className, ...props }, ref) => (
//   <SheetPrimitive.Title
//     ref={ref}
//     className={cn("text-lg font-semibold text-foreground", className)}
//     {...props}
//   />
// ))
// SheetTitle.displayName = SheetPrimitive.Title.displayName

// const SheetDescription = React.forwardRef<
//   React.ElementRef<typeof SheetPrimitive.Description>,
//   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
// >(({ className, ...props }, ref) => (
//   <SheetPrimitive.Description
//     ref={ref}
//     className={cn("text-sm text-muted-foreground", className)}
//     {...props}
//   />
// ))
// SheetDescription.displayName = SheetPrimitive.Description.displayName

// export {
//   Sheet,
//   SheetPortal,
//   SheetOverlay,
//   SheetTrigger,
//   SheetClose,
//   SheetContent,
//   SheetHeader,
//   SheetFooter,
//   SheetTitle,
//   SheetDescription,
// }

import React, { useState } from "react";
import { Button } from "../ui/button";
import { NAVBAR_ITEMS } from "@/CommonInterface";
import Link from "next/link";

const Sheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpensheet = () => {
    setIsOpen(!isOpen);
  };
  const NavBarItems: NAVBAR_ITEMS = {
    Brand: { title: "Aditya Mehrotra", Url: "/" },
    Items: [
      { title: "About me", Url: "/" },
      { title: "Experience", Url: "/" },
      { title: "Projects", Url: "/" },
      { title: "Contact me", Url: "/" },
    ],
    EndLink: { title: "Resume", Url: "/" },
  };
  return (
    <div>
      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm top-0 left-0 ">
          <div className="">
            {NavBarItems.Items?.map((Item, index) => {
              return (
                <div key={index} className="text-xl m-1 hover:text-reddish">
                  <Link href={Item.Url}>
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
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
        </div>
      ) : (
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              ></path>
            </svg>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Sheet;
