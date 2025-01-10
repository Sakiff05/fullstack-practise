import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className=" py-2 fixed z-10 w-full bg-white shadow ">
      <div className="top flex flex-col sm:flex-row justify-between items-center px-20  ">
        <div className="top-text">
          <p>We believe we helps people</p>
          <p>for happier lives</p>
        </div>
        <div className="img-wrapper hidden md:flex">
          <img
            src="https://preview.colorlib.com/theme/immigration/img/logo.png"
            alt="navlogo"
          />
        </div>
        <div className="contact ">
          <a href="#">+880 123 12 658 439 </a>
          <IconButton sx={{ backgroundColor: "#F2214C", borderRadius: "0" }}>
            <LocalPhoneIcon
              sx={{
                color: "white",
              }}
            />
          </IconButton>
        </div>
      </div>
      <div className="bottom border-t-2 border-gray-400 pt-2">
        <ul className="nav-list flex justify-between items-center px-24">
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="favorites">Favorites</NavLink>
          </li>
          <li>
            <NavLink to="add">Add</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
