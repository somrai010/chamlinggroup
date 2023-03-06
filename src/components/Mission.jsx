import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export const Mission = (props) => {
  return (
    <div>
      <div className=" object-cover w-full md:min-h-[110vh] h-auto relative box-border">
        <Image
          fill
          src="/pens.jpg"
          alt="header image"
          style={{ filter: "brightness(10%)" }}
        />
        <div className="box-border relative flex w-full h-auto md:p-[80px] p-5">
          <div className="w-full h-full p-5 text-center rounded-lg opacity-70 bg-white-default shadow-myshadow">
            <div>
              <Fade direction="up">
                <h2 className=" font-marcellus text-[30px] text-text-primary-default leading-[150%]">
                  Our Mission
                </h2>

                <p className=" font-marcellus text-[20px] text-text-secondary-default leading-[150%]">
                  Our main mission is to make nepal independent in agriculture
                  and tourism
                </p>
              </Fade>
              <Fade direction="up">
                <h2 className=" font-marcellus text-[30px] text-text-primary-default leading-[150%] mt-9">
                  Our Vision
                </h2>
                <p className=" font-marcellus text-[20px] text-text-secondary-default leading-[150%] md:px-[100px] py-9">
                  Our vision is to make our country One step ahead in
                  agriculture and Tourism sector and bring small and beautiful
                  changes to the world.
                </p>
                <p className=" font-marcellus text-[20px] text-text-secondary-default leading-[150%] md:px-[100px] py-5">
                  Chamling group is group of companies based on pokhara with the
                  mission and vision to change the world through investment,
                  agriculture and tourism
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
