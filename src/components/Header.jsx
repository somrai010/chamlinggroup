import { Button } from "@mui/material";
import Image from "next/image";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Fade } from "react-awesome-reveal";

export const Header = (props) => {
  return (
    <div>
      <div className="relative object-cover w-full h-[90vh]">
        <Image fill src="/chamlingcover.jpg" alt="header image" />
        <div className="absolute w-full h-auto md:top-[45vh] top-[50vh] text-center">
          <div>
            <h2 className=" font-marcellus md:text-[40px] text-[25px] text-text-black-default ">Chamling Group 2023 | Achievements</h2>
          </div>
          <div className="mt-5 ">
            <Fade direction="up">
            <Button variant="outlined"  endIcon={<ArrowForwardIosIcon/>} sx={{color:'#0F0C28',border:'2px solid red',borderRadius:'20px',fontSize:'27px',px:'60px'}}>View</Button>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
