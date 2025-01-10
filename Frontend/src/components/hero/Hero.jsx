import React from "react";

export default function Hero() {
  return (
    <div className="bg-rose-500 py-72 md:py-[21rem]  relative ">
      <div className="heroText text-white px-12 lg:px-56 flex flex-col items-start gap-5">
        <p className="uppercase text-xl">Process Visa without within hours</p>
        <h1 className="uppercase text-4xl md:text-6xl font-bold">
          Immigrations & Visa Consultation
        </h1>
        <button className="bg-white text-black p-2">Book Consultancy</button>
      </div>
      <div className="heroImg ">
        <img
          src="https://preview.colorlib.com/theme/immigration/img/header-img.png"
          alt=""
          className="absolute bottom-0 right-0 w-5/12"
        />
      </div>
    </div>
  );
}
