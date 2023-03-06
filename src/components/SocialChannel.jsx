import Link from "next/link";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Fade } from "react-awesome-reveal";

export const SocialChannel = (props) => {
  return (
    <div>
      <div className="relative object-cover w-full h-auto md:p-[80px] p-5 text-center">
        <div>
          <Fade direction="up">
            <h2 className=" font-marcellus md:text-[36px] text-[25px] text-text-primary-default leading-[150%]">
              Social Media Channels
            </h2>
          </Fade>
        </div>
        <div className="flex w-full h-auto mt-[80px] ">
         
            <div className="flex-grow ">
              <Link href="https://www.facebook.com/chamlinggroup">
                <h2 className="md:text-[25px] text-[16px] text-text-primary-default font-semibold">
                  <span className="px-3 relative top-[-1px]">
                    <FacebookIcon fontSize="large" />
                  </span>
                  facebook
                </h2>
              </Link>
            </div>
            <div className="flex-grow">
              <Link href="https://twitter.com/ChamlingGroup">
                <h2 className="md:text-[25px] text-[16px] text-text-primary-default font-semibold">
                  <span className="px-3 relative top-[-1px]">
                    <TwitterIcon fontSize="large" />
                  </span>
                  twitter
                </h2>
              </Link>
            </div>
        
            <div className="flex-grow ">
              <Link href="#">
                <h2 className="md:text-[25px] text-[16px] text-text-primary-default font-semibold">
                  <span className="px-3 relative top-[-1px]">
                    <InstagramIcon fontSize="large" />
                  </span>
                  instagram
                </h2>
              </Link>
            </div>
       


          <div className="flex-grow ">
            <Link href="https://www.youtube.com/@chamlinggroup">
              <h2 className="md:text-[25px] text-[16px] text-text-primary-default font-semibold">
                <span className="px-3 relative top-[-1px]">
                  <YouTubeIcon fontSize="large" />
                </span>
                YouTube
              </h2>
            </Link>
          </div>

          <div className="flex-grow hidden md:block">
            <Link href="#">
              <h2 className="md:text-[25px] text-[16px] text-text-primary-default font-semibold">
                <span className="px-3 relative top-[-1px]">
                  <LinkedInIcon fontSize="large" />
                </span>
                linkedIn
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
