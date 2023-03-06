import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";

import Image from "next/image";
import { TextField } from "@mui/material";

import { Fade } from "react-awesome-reveal";

export const ContactUs = () => {
  return (
    <div className="flex w-[100%] h-auto md:h-[400px] overflow-y-hidden   relative my-[100px] md:flex-row flex-col overflow-x-hidden">
      <div className="relative flex-grow md:flex-row flex-col  h-[400px] object-cover">
        <Image
          src="/contact.jpg"
          alt="contact us image"
          fill
          style={{ filter: "brightness(50%)" }}
        />
        <Fade direction="left">
          <div className=" md:w-[70%] w-[100%] p-5 md:h-[500px] h-[400px]  items-center z-30 absolute md:ml-[15%] md:mt-[-50px] md:rounded-md opacity-90 md:p-9 md:pt-[80px] bg-white-default">
            <form>
              <div className="flex flex-col w-full h-full gap-5">
                <div>
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    variant="standard"
                    label="Your Name"
                  />
                </div>
                <div>
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    variant="standard"
                    label="Your Phone "
                  />
                </div>
                <div>
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    variant="standard"
                    label="Your Email "
                  />
                </div>
                <div>
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    variant="standard"
                    label="Your Message "
                    multiline
                    rows={2}
                  />
                </div>
                <div>
                  <Button
                    fullWidth
                    variant="contained"
                    size="md"
                    sx={{ backgroundColor: "#495591" }}
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Fade>
      </div>

      <div className="md:w-[40%] w-[100%] bg-bg-primary md:p-9 p-3 text-white-default">
        <Fade direction="right">
          <h2 className="font-semibold  text-[20px] py-3">Contact Us</h2>
          <p className=" leading-[200%] text-text-secondary-default">
            <span className="px-3">
              <PhoneIphoneIcon />
            </span>
            985-6067169
          </p>
          <p className=" leading-[200%] text-text-secondary-default">
            <span className="px-3">
              <EmailIcon />
            </span>
            chamlinggroup22@gmail.com
          </p>

          <p className=" leading-[200%] text-text-secondary-default">
            <span className="px-3">
              <LocationOnIcon />
            </span>
            Lakeside Pokhara, Nepal
          </p>
        </Fade>
      </div>
    </div>
  );
};
