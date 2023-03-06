import Image from "next/image";
import Link from "next/link";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

import { IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { CorporateNav } from "./nav/CorporateNav";
import { CompaniesNav } from "./nav/CompaniesNav";
import { MediaNav } from "./nav/MediaNav";
import { ContactNav } from "./nav/ContactNav";
import { MobileNav } from "./nav/MobileNav";

export const Navbar = () => {
  const [showCorporate, setShowCorporate] = useState(false);
  const [showCompanies, setShowCompaniesNav] = useState(false);
  const [showMedia, setShowMediaNav] = useState(false);
  const [showContacts, setShowContactsNav] = useState(false);

  const [shownav, setShowNav] = useState(false);

  const showHide = () => {
    // const myDiv = document.querySelector("#my-mobile-nav");
    // console.log(myDiv);
   
      // const divWidth = myDiv.offsetWidth;
      // console.log("mydiv", myDiv);
      // myDiv.style.backgroundColor="red" 
      // myDiv.style.transition="all 0.5s linear 0s"
      // myDiv.style.top="200px"

      // myDiv.style.transform = `translateX(${translate + 150}px)`;
      setShowNav(!shownav);
    
  };

  return (
    <div
      className="flex w-[100%] h-[90px] p-[5px] sticky top-0 z-50 bg-white-default"
      id="top"
    >
      <div className="relative flex-shrink w-[180px] h-[80px] object-cover ml-9">
        <Link href="#">
          <Image src="/logo.jpg" fill alt="logo" />
        </Link>
      </div>
      <div className="justify-center flex-grow hidden w-full h-full md:block">
        <div className="flex gap-5 p-6 mt-1 h-[100%] w-full justify-center">
          <div
            className="flex-shrink h-full min-h-[60px] "
            onMouseEnter={() => setShowCorporate(true)}
            onMouseLeave={() => setShowCorporate(false)}
          >
            <Link href="#">
              <h2 className=" text-text-primary-default text-[18px] font-normal">
                Corporate
                <span>
                  <KeyboardArrowDownIcon />
                </span>
              </h2>
            </Link>
            {showCorporate && (
              <div className="transition-opacity duration-700 ease-linear opacity-100 ">
                <CorporateNav />
              </div>
            )}
          </div>

          <div
            className="flex-shrink h-full min-h-[60px]"
            onMouseEnter={() => setShowCompaniesNav(true)}
            onMouseLeave={() => setShowCompaniesNav(false)}
            
          >
            <Link href="#">
              <h2 className=" text-text-primary-default text-[18px] font-normal">
                Companies
                <span>
                  <KeyboardArrowDownIcon />
                </span>
              </h2>
            </Link>

            {showCompanies && (
              <div className="w-auto h-auto">
                <CompaniesNav />
              </div>
            )}
          </div>

          <div
            className="flex-shrink h-full min-h-[60px]"
            onMouseEnter={() => setShowMediaNav(true)}
            onMouseLeave={() => setShowMediaNav(false)}
          >
            <Link href="#">
              <h2 className=" text-text-primary-default text-[18px] font-normal">
                Media
                <span>
                  <KeyboardArrowDownIcon />
                </span>
              </h2>
            </Link>

            {showMedia && (
              <div className="transition-opacity duration-700 ease-linear opacity-100 ">
                <MediaNav />
              </div>
            )}
          </div>

          <div className="flex-shrink h-full min-h-[60px]">
            <Link href="#">
              <h2 className=" text-text-primary-default text-[18px] font-normal">
                Careers
                <span>
                  <KeyboardArrowDownIcon />
                </span>
              </h2>
            </Link>
          </div>

          <div
            className="flex-shrink h-full min-h-[60px]"
            onMouseEnter={() => setShowContactsNav(true)}
            onMouseLeave={() => setShowContactsNav(false)}
          >
            <Link href="#">
              <h2 className=" text-text-primary-default text-[18px] font-normal">
                Contacts
                <span>
                  <KeyboardArrowDownIcon />
                </span>
              </h2>
            </Link>
            {showContacts && (
              <div className="transition-opacity duration-700 ease-linear opacity-100 ">
                <ContactNav />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex-grow md:flex-shrink w-[12] h-full text-center flex flex-col justify-center px-5 md:hidden">
        <div className="flex">
          <div className="flex-grow"></div>
          <IconButton onClick={() => showHide()}>
            <MenuIcon fontSize="large" sx={{ cursor: "pointer" }} />
          </IconButton>
        </div>
        {shownav && (
          <div id="my-mobile-nav">
            {" "}
            <MobileNav />
          </div>
        )}
      </div>
    </div>
  );
};
