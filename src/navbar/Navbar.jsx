import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-end border-b-4 bg-gray-400">
        {/* สร้าง navbar home Owner */}
        <nav className="">
          <ul className="grid grid-flow-col auto-cols-max ml-60 font-bold text-lg pb-5 pt-7 pr-6">
            <li className="pr-5 ">
            <button class="btn btn-ghost">
              <Link to={"/"}>Home</Link></button>
            </li>
            <li className="">
            <button class="btn btn-ghost">
              <Link to={"/Homeowner"}>Owner</Link></button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
