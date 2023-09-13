import React from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";

const Homenormal = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-full ">
        <div className="">
          <div>
            <h1 className="text-5xl font-bold mt-36 ml-auto text-center">
              Generation Thailand
              <br />
              React - Assessment
            </h1>
          </div>
          <div className="flex justify-around mt-12 font-bold ">
          <button class="btn btn-outline">
            <Link
              to={"/Homeuser"}
              className="w-44 h-8 text-center flex items-center justify-center"
            >
              User Home Sector
            </Link>
            </button>

            <button class="btn btn-outline"><Link
              to={"/Homeadmin"}
              className="w-44 h-8  text-center flex items-center justify-center"
            >
              Admin Home Sector
            </Link>
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Homenormal;
