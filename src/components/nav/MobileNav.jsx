import { Button } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export const MobileNav = (props) => {
  const [showCompanies, setShowCompanies] = useState(false);
  const [showBrands, setShowBrands] = useState(false);

  return (
    <div className=" w-full h-[90vh] bg-bg-black text-white-default opacity-100 absolute top-[90px] left-0 z-10">
      <Button fullWidth variant="outlined">
        Corporate
      </Button>
      <Button
        fullWidth
        variant="outlined"
        onClick={() => setShowCompanies(!showCompanies)}
      >
        Companies
      </Button>
      {showCompanies && (
        <div>
          <Button fullWidth variant="text" sx={{ backgroundColor: "white" }}>
            <Link href={"https://www.chamlingcycle.com/"}>Chamling Cycle P. Ltd</Link>
          </Button>
          <Button fullWidth variant="text" sx={{ backgroundColor: "white" }}>
            Chamling Spa P. Ltd
          </Button>

          <Button fullWidth variant="text" sx={{ backgroundColor: "white" }}>
            Chamling Adventures P. Ltd
          </Button>
        </div>
      )}
      <Button fullWidth variant="outlined">
        Media
      </Button>
      <Button
        fullWidth
        variant="outlined"
        onClick={() => setShowBrands(!showBrands)}
      >
        Our Brands
      </Button>
      {showBrands && (
        <div>
          <Button fullWidth variant="text" sx={{ backgroundColor: "white" }}>
            Bicycles
          </Button>
          <Button fullWidth variant="text" sx={{ backgroundColor: "white" }}>
            Apparels
          </Button>

          <Button fullWidth variant="text" sx={{ backgroundColor: "white" }}>
            Accessories
          </Button>
        </div>
      )}
      <Button fullWidth variant="outlined">
        Contacts
      </Button>
    </div>
  );
};
