import React from "react";
import PersonIcon from "@mui/icons-material/Person";

export default function Features() {
  return (
    <div className="px-24 mt-12">
      <h1 className="text-4xl text-center font-bold">
        Our Unique Features that can impress you
      </h1>
      <p className="text-gray-400 text-center py-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-24  mt-12">
        <div className="card flex flex-col gap-4 ">
          <h1 className="flex items-center gap-2 justify-center md:justify-start">
            <PersonIcon />
            Expert Technicians
          </h1>
          <p className="text-center md:text-start">
            Usage of the Internet is becoming more common due to rapid
            advancement of technology and power.
          </p>
        </div>
        <div className="card flex flex-col gap-4 ">
          <h1 className="flex items-center gap-2 justify-center md:justify-start">
            <PersonIcon />
            Expert Technicians
          </h1>
          <p className="text-center md:text-start">
            Usage of the Internet is becoming more common due to rapid
            advancement of technology and power.
          </p>
        </div>
        <div className="card flex flex-col gap-4 ">
          <h1 className="flex items-center gap-2 justify-center md:justify-start">
            <PersonIcon />
            Expert Technicians
          </h1>
          <p className="text-center md:text-start">
            Usage of the Internet is becoming more common due to rapid
            advancement of technology and power.
          </p>
        </div>
        <div className="card flex flex-col gap-4 ">
          <h1 className="flex items-center gap-2 justify-center md:justify-start">
            <PersonIcon />
            Expert Technicians
          </h1>
          <p className="text-center md:text-start">
            Usage of the Internet is becoming more common due to rapid
            advancement of technology and power.
          </p>
        </div>
        <div className="card flex flex-col gap-4 ">
          <h1 className="flex items-center gap-2 justify-center md:justify-start">
            <PersonIcon />
            Expert Technicians
          </h1>
          <p className="text-center md:text-start">
            Usage of the Internet is becoming more common due to rapid
            advancement of technology and power.
          </p>
        </div>
        <div className="card flex flex-col gap-4 ">
          <h1 className="flex items-center gap-2 justify-center md:justify-start">
            <PersonIcon />
            Expert Technicians
          </h1>
          <p className="text-center md:text-start">
            Usage of the Internet is becoming more common due to rapid
            advancement of technology and power.
          </p>
        </div>
      </div>
    </div>
  );
}
