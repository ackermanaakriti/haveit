import React from "react";
import Button from "../Components/Button";

const Herosection = () => {
  return (
    <>
      <div>
        <div className="flex w-full h-[80vh]">
          <div className="w-3/12">
            <img
              src="./images/image1.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-6/12 relative">
            <img
              src="./images/image2.png"
              className="w-full h-full object-cover after:h-[100%] after:w-[100%] after:bg-cyan-200 "
              alt=""
            />
            <div
              style={{
                background:
                  "linear-gradient(0deg, rgba(73, 112, 129, 0.70) 0%, rgba(73, 112, 129, 0.70) 100%)",
              }}
              className="absolute inset-0  "
            ></div>
            <div className="absolute top-[40%]">
              <h1 className="text-white text-[60px] text-center font-semibold px=40" >
                Elevate You with our Bio-Med Equipment
              </h1>
              <div className="justify-center flex mt-[40px]">
              <Button btn='Shop Now'/>
              </div>
             
            </div>
          </div>

          <div className="w-3/12">
            <img
              src="./images/image3.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
