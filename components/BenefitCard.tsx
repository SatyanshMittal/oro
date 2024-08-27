import React from "react";

export default function BenefitCard() {
  return (
    <div className="flex gap-4  w-full">
      <div className="px-6 pb-14 py-7 min-w-[360px] bg-white rounded-xl text-black space-y-5">
        <p className="italic text-black text-base font-semibold">SMART MONEY</p>
        <p className="text-3xl font-grotesk leading-7 font-semibold pt-5">
          Gold that <br />{" "}
          <span className="text-[#CFAF6C]">generates yields</span>
        </p>
        <p className="text-lg font-jost leading-5 text-[#060606] opacity-50">
          Zero storage fee, earn yields 12% p.a. paid in Gold
        </p>
      </div>
      <div className="px-6 pb-14 py-7 min-w-[360px] bg-gradient-to-r from-[#CFAF6C] to-[#F7DA9C] rounded-xl text-black space-y-5">
        <p className="italic text-black text-base font-semibold">EASY TO USE</p>
        <p className="text-3xl font-grotesk  leading-7 font-semibold pt-5">
          Get started with
          <br /> as low as $1{" "}
        </p>
        <p className="text-lg leading-5 font-jost text-[#060606] opacity-50">
          Get instant liquidity & 24X7 availability with De-Fi integrations
        </p>
      </div>
      <div className="px-6 pb-14 py-7 min-w-[360px] bg-white rounded-xl text-black space-y-5">
        <p className="italic text-black text-base font-semibold">
          EASY TO REEDEM
        </p>
        <p className="text-3xl font-grotesk leading-7 font-semibold pt-5">
          Got you covered with <br />{" "}
          <span className="text-[#CFAF6C]">Instant Liquidity</span>
        </p>
        <p className="text-lg leading-5 font-jost  text-[#060606] opacity-50 ">
          Get access to instant liquidity, low physical redemption amount of $70
        </p>
      </div>
    </div>
  );
}
