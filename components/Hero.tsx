import React from "react";
import Logo from "./RoundLogo";
import Button from "./Button"

export default function hero() {
  return (
    <div className="w-full  h-[90vh] flex flex-col justify-center text-white items-center">
      <div className="flex flex-col justify-center items-center gap-4  ">
        <Logo />

        <div className="text-center">
          <p className=" leading-10  font-grotesk text-[36px] font-semibold">
            Stable & High Quality Yield
          </p>
          <p className=" leading-10 font-grotesk text-[36px] font-semibold">
            from{" "}
            <span className="text-transparent bg-gradient-to-r from-[#F5D89A] to-[#D1B16F] bg-clip-text inline-block ">
              Tokenised Gold
            </span>
          </p>
        </div>

        <p className="font-jost text-white/60 text-2xl">Institutional Grade. Regulated. Transparent. Invest as low as $1</p>

        <div className="flex gap-6 mt-5 items-center"><Button text={"Why ORO?"}/>
        <p className="underline font-jost  text-[22px] text-white/90 ">Security</p></div>
      </div>
    </div>
  );
}
