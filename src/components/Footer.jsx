import Image from "next/image";
import Link from "next/link";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { IconButton } from "@mui/material";
import { Fade } from "react-awesome-reveal";

export const Footer = () => {
  return (
    <div className="relative ">
      <div className="flex w-[100%] md:h-[500px] h-auto relative flex-col pt-[100px] md:px-[70px] px-[10px] bg-bg-black">
        <div className="w-full h-full">
          <div className="flex flex-col w-full h-full ">
            <div className="flex flex-grow w-full p-3 rounded-md md:p-8 bg-white-default">
              <div className="flex-grow w-full">
                <h2 className="md:text-[30px] text-[20px] font-semibold text-text-primary-default py-3">
                  Who We Are
                </h2>
                <p className=" text-text-secondary-default md:text-[16px] text-[10px]">
                  Chamling Group is the group of company registered in pokhara
                  with the mission and vision to change the countrys Economy
                </p>
              </div>
              <div className="relative flex flex-col items-center justify-center flex-grow object-cover w-full">
                <div className="md:w-[280px] w-[170px]  h-[100%] relative">
                  <Image src="/logo.jpg" alt="logo" fill />
                </div>
              </div>
            </div>
            <div className="flex-shrink w-full h-[80px] pt-[40px] ">
              <hr style={{ opacity: "0.1" }} />
            </div>
            <div className="flex w-full p-3 text-sm h-14 bg-bg-black text-white-default">
              <div className="flex-grow hidden md:inline-block ">©Chamling Group 2023</div>
              <div className="flex flex-grow text-xs md:text-sm md:gap-3 text-text-secondary-default">
                <span>
                  <Link href={"#"}>Terms & Conditions</Link>
                </span>{" "}
                |{" "}
                <span>
                  <Link href="#"> Policy</Link>Privacy
                </span>{" "}
                |{" "}
                <span>
                  <Link href={"#"}> Disclamer Legal</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fade direction="up" duration={2000}>
      <div className="absolute md:bottom-5 bottom-3 md:right-10 right-3 z-50 bg-bg-secondary w-[40px]  h-[50px] rounded-[5px] hover:bg-white-default duration-300 ">
       <Link href='#top'> <IconButton className="relative transition-all duration-500 top-2 animate-pulse hover:top-1">
          <KeyboardDoubleArrowUpIcon fontSize="md" />
        </IconButton>
        </Link>
      </div>
      </Fade>
    </div>
  );
};
