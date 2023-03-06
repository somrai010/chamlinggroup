import { Button } from "@mui/material";
import { useState } from "react";

export const MobileNav = (props) => {
  const [showCompanies, setShowCompanies] = useState(null);
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
            Chamling Spa Pvt. Ltd.
          </Button>
          <Button fullWidth variant="text" sx={{ backgroundColor: "white" }}>
            Chamling Cycle Pvt. Ltd.
          </Button>

          <Button fullWidth variant="text" sx={{ backgroundColor: "white" }}>
            Chamling Journey Pvt. Ltd.
          </Button>
        </div>
      )}
      <Button fullWidth variant="outlined">
        Media
      </Button>
      <Button fullWidth variant="outlined">
        Career
      </Button>
      <Button fullWidth variant="outlined">
        Contacts
      </Button>
    </div>
  );
};
