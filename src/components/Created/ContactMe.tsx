import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";


const ContactMe = () => {
  interface ContactMeInterface {
    email: string;
    name: string;
    message: string;
  }
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Message, setMessage] = useState("");
  const handleSubmitForm = async (): Promise<void> => {
    const ContactMeData: ContactMeInterface = {
      email: Email,
      name: Name, 
      message: Message,
    }
    console.log(ContactMeData);
    const res = await fetch('',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ContactMeData)
    },);
    if (!res.ok) {
      const errorText = await res.text();
      console.log(`Error: ${errorText}`);
    } else {
      setEmail("");
      setMessage("");
      setName("");
    }
  };


  return (
    <div className="m-4 lg:mx-20 xl:mx-48" id="ContactMe">
      <div className="flex justify-center m-12">
        <div className="text-4xl">Contact Me</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-accent">
        <div className="m-12">
          <div className="text-4xl">Get in touch!</div>
          <div className="text-reddish">Fill the form to get in touch!</div>
          <div className="mt-44">
            <Link
              href="https://www.linkedin.com/in/thisisaditya-mehrotra/"
              className="flex w-fit m-1 bg-"
            >
              <svg
                width="24"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                color="#000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn icon</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              <span className="mx-2">
                linkedin.com/in/thisisaditya-mehrotra
              </span>
            </Link>
            <Link href="mailto:adityamehrotra6@gmail.com" className="flex w-fit m-1">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                color="#000"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <span className="mx-2">adityamehrotra6@gmail.com</span>
            </Link>
            <Link
              href="https://github.com/aditya-mehrotra"
              className="flex w-fit m-1"
            >
              <svg
                width="24"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                color="#000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub icon</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
              <span className="mx-2">github.com/aditya-mehrotra</span>
            </Link>
          </div>
        </div>

        <div className="m-12">
          <Card>
            <CardContent className="m-6">
              <div className="my-4">
                <span className="m-1">Email</span>
                <Input type="email" placeholder="john@gmail.com" id="Email" value={Email} onChange={(e)=>{
                  setEmail(e.target.value);
                }}/>
              </div>
              <div className="my-4">
                <span className="m-1">Name</span>
                <Input type="text" placeholder="John Doe" id="Name" value={Name} onChange={(e)=>{
                  setName(e.target.value);
                }}/>
              </div>
              <div className="my-4">
                <span className="m-1">Message</span>
                <Textarea placeholder="Type your message here." id="Message" value={Message} onChange={(e)=>{
                  setMessage(e.target.value);
                }}/>
              </div>
              <Button variant="outline" className="bg-reddish transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 text-primary hover:text-secondary hover:bg-reddish" onClick={handleSubmitForm}> Submit</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
