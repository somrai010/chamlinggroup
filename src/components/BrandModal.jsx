import { Dialog, DialogContent } from "@mui/material";
import { useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Link from "next/link";
import Image from "next/image";

export const BrandModal = (props) => {
  const [isopen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        {" "}
        <Link href="#" >
          <p className=" text-text-secondary-default text-[15px] pl-5 leading-[200%]" onClick={()=>setIsOpen(true)}>
            <span className="px-2">
              <ArrowCircleRightIcon />
            </span>

            <Link href="https://www.chamlingcycle.com/">Bicycles</Link>
          </p>
        </Link>
      </div>
      <Dialog open={isopen} onClose={()=>setIsOpen(false)} maxWidth='sm' fullWidth>
        <DialogContent>
          <div className="relative w-full h-[250px]">
            <Image src="/trademark.png" alt="trademark" fill />
          </div>
          <div className="text-center text-text-primary-default">COMING SOON...</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
