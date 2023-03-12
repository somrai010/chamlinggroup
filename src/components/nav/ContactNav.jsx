import Image from "next/image";
import Link from "next/link";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";


import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export const ContactNav = () => {
  return (
    <div>
      <div className="absolute left-0 top-[92px] ml-[15vw]  w-[70vw] h-[300px] bg-white-default rounded-md p-9 shadow-myshadow flex">
        <div className="flex-grow w-[60%]">
          <h2 className=" text-text-primary-default text-[20px] pb-5 font-semibold">
            Contacts
          </h2>{" "}
        
            <p className=" text-text-secondary-default text-[15px] pl-5 leading-[250%]">
              <span className="px-2">
                <PhoneIphoneIcon />
              </span>
              985-6067169
            </p>
          
            <p className=" text-text-secondary-default text-[15px] pl-5 leading-[250%]">
              <span className="px-2">
                <AttachEmailIcon />
              </span>
              chamlinggroup22@gmail.com
            </p>
         
            <p className=" text-text-secondary-default text-[15px] pl-5 leading-[250%]">
              <span className="px-2">
                <LocationOnIcon />
              </span>
              Lakeside Pokhara, Nepal
            </p>
        
        
        </div>

        <div className="flex-grow w-max-[50%]">
          <div className="w-full h-full rounded-sm bg-bg-lite">
            <div className="flex w-full h-full px-2 py-3">
              <div className="flex-grow w-[90%] ">
                <h2 className="text-text-primary-default text-[20px] font-semibold">
                  Get In Touch with Us Today{" "}
                </h2>
                <p className=" text-text-secondary-default">
                  We Value Our customers Reviews and Feedback & Enjoy resolving
                  their queries in timely manner.
                </p>
              </div>
              <div className="relative flex-grow object-cover w-full h-full ">
                <Image src="/contact.jpg" fill alt="contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
