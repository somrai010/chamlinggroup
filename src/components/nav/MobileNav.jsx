import { Button } from "@mui/material"


export const MobileNav = (props) => {
  return(
    <div className=" w-full h-[90vh] bg-bg-black text-white-default opacity-100 absolute top-[90px] left-0 z-10">
      <Button fullWidth variant="outlined">Corporate</Button>
      <Button fullWidth variant="outlined">Companies</Button>
      <Button fullWidth variant="outlined">Media</Button>
      <Button fullWidth variant="outlined">Career</Button>
      <Button fullWidth variant="outlined">Contacts</Button>
    </div>
   )
  }
