import React from 'react';

export default function LavaLamp() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen w-screen min-w-screen -z-10">
      <div className="absolute h-full w-full top-0 left-0 [filter:url('#goo')]">
        <div className="absolute w-[200px] h-[200px] left-[35%] bottom-[-15%] rounded-full bg-gradient-to-r from-[#ff9298] to-[#ff008d] animate-[wobble_4s_ease-in-out_alternate_infinite,blob-one_18s_ease-in-out_infinite]"></div>
        <div className="absolute w-[330px] h-[330px] right-[24%] bottom-[-65%] rounded-full bg-gradient-to-r from-[#ff9298] to-[#ff008d] animate-[wobble_5s_ease-in-out_alternate_infinite,blob-two_22s_ease-in-out_infinite]"></div>
        <div className="absolute w-[150px] h-[150px] bottom-[-15%] left-[34%] rounded-full bg-gradient-to-r from-[#ff9298] to-[#ff008d] animate-[wobble_6s_ease-in-out_alternate_infinite,blob-three_16s_ease-in-out_infinite]"></div>
        <div className="absolute w-[235px] h-[235px] bottom-[-19%] left-[30%] rounded-full bg-gradient-to-r from-[#ff9298] to-[#ff008d] animate-[wobble_8s_ease-in-out_alternate_infinite,blob-four_16s_ease-in-out_infinite]"></div>
        <div className="absolute w-[55px] h-[55px] bottom-[-25%] left-[34%] rounded-full bg-gradient-to-r from-[#ff9298] to-[#ff008d] animate-[wobble_9s_ease-in-out_alternate_infinite,blob-five_32s_ease-in-out_infinite]"></div>
        <div className="absolute w-[35px] h-[35px] bottom-[-25%] right-[34%] rounded-full bg-gradient-to-r from-[#ff9298] to-[#ff008d] animate-[wobble_10s_ease-in-out_alternate_infinite,blob-six_12s_ease-in-out_infinite]"></div>
        <div className="absolute w-[435px] h-[435px] bottom-[-85%] right-[40%] rounded-full bg-gradient-to-r from-[#ff9298] to-[#ff008d] animate-[wobble_11s_ease-in-out_alternate_infinite,blob-seven_32s_ease-in-out_infinite]"></div>
        <div className="absolute w-full h-[4%] top-[-3%] left-0 rounded-full bg-gradient-to-r from-[#ff9298] to-[#ff008d]"></div>
        <div className="absolute w-full h-[4.5%] bottom-[-3%] left-0 rounded-full bg-gradient-to-r from-[#ff9298] to-[#ff008d]"></div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}