import Image from "next/image";
import Link from "next/link";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export const MediaNav = () => {
  return (
    <div>
      <div className="absolute left-0 top-[92px] ml-[15vw]  w-[70vw] h-[300px] bg-white-default rounded-md p-9 shadow-myshadow flex">
        <div className="flex-grow w-[60%]">
          <h2 className=" text-text-primary-default text-[20px] pb-5 font-semibold">
            Media
          </h2>{" "}

          <Link href="#">
            <p className=" text-text-secondary-default text-[15px] pl-5 leading-[200%]">
              <span className="px-2">
                <ArrowCircleRightIcon />
              </span>
              News
            </p>
          </Link>
          <Link href="#">
            <p className=" text-text-secondary-default text-[15px] pl-5 leading-[200%]">
              <span className="px-2">
                <ArrowCircleRightIcon />
              </span>
              Photo Gallery
            </p>
          </Link>
          <Link href="#">
            <p className=" text-text-secondary-default text-[15px] pl-5 leading-[200%]">
              <span className="px-2">
                <ArrowCircleRightIcon />
              </span>
              videos
            </p>
          </Link>
          <Link href="#">
            <p className=" text-text-secondary-default text-[15px] pl-5 leading-[200%]">
              <span className="px-2">
                <ArrowCircleRightIcon />
              </span>
              Publications
            </p>
          </Link>
          
        </div>

        <div className="flex-grow w-max-[50%]">
          <div className="w-full h-full rounded-sm bg-bg-lite">
            <div className="flex w-full h-full px-2 py-3">
              <div className="flex-grow w-[90%] ">
                <h2 className="text-text-primary-default text-[20px] font-semibold">Commited To Creating our Nation </h2>
                <p className=" text-text-secondary-default">
                  Chamling Group is a group of company based on pokhara With
                  mission and vision of creating Nation.
                </p>
              </div>
              <div className="relative flex-grow object-cover w-full h-full ">
                <Image src="/team.jpg" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
