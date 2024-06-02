"use client";
import Image from "next/image";
import { Tilt } from "react-next-tilt";

const TalitPratice = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[1140px] mx-auto px-3 pt-12">
        <h2 className="text-black font-bold uppercase  text-3xl pb-6 text-center">
          Tilt js
        </h2>
        <Tilt tiltMaxAngleX={0} tiltMaxAngleY={4} scale={1.01} speed={300}>
          <div className="relative ">
            <Image
              className=" rounded-3xl max-w-[400px] mx-auto"
              src="/assets/image/screenImg.avif"
              width={400}
              height={300}
              alt="img"
            />
            <div className="bg-white absolute top-1/2 left-1/2 w-48 h-48 rounded-3xl -translate-x-1/2 -translate-y-1/2  flex justify-center items-center">
              <p className="font-bold text-3xl text-black uppercase">hello </p>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default TalitPratice;
