import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Link from "next/link";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export const NavHeader = (props) => {
  return (
    <div className="w-full h-[45px] bg-bg-primary flex md:gap-10 gap-3">
      <div className="flex-shrink md:flex-grow "></div>
      <div className="flex flex-shrink gap-2 p-3 px-3 md:gap-5 md:px-9 text-white-default ">
        <span>
          <Link href="https://www.facebook.com/chamlinggroup">
            <FacebookIcon />
          </Link>
        </span>
        <span>
          <Link href="https://www.instagram.com/chamlinggroup22/">
            <InstagramIcon />
          </Link>
        </span>
        <span>
          <Link href="https://twitter.com/ChamlingGroup">
            <TwitterIcon />
          </Link>
        </span>
        <span>
          <Link href="https://www.youtube.com/@chamlinggroup">
            <YouTubeIcon />
          </Link>
        </span>
      </div>
      <div className="flex-shrink p-3 text-white-default w-[180px] font-medium text-center ">
        <h2>
          <span className="px-3 ">
            <PhoneInTalkIcon />
          </span>
          985-6067169
        </h2>
      </div>
    </div>
  );
};
