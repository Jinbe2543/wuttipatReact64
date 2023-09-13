import React from "react";
import Layout from "../Layout";
import "../App.css";
const Homeowner = () => {
  return (
    <>
      <Layout />
      <div className="flex justify-center items-center w-full h-full ">
        <div className="flex flex-col justify-center items-center">
          <div className="">
            <h1 className="text-3xl font-bold">Opor - Group X - 64</h1>
          </div>
          <div className="w-72 h-56 pt-7">
            <img
              src="https://pakmud.com/wp-content/uploads/2023/03/%E0%B8%A1%E0%B8%B5%E0%B8%A1%E0%B9%81%E0%B8%A1%E0%B8%A7-10-356x362.jpg"
              alt=""
              className="w-72 h-56"
            />
          </div>
          <div className=" w-804 h-28 justify-center items-center text-center pt-14">
            <h1 className="font-bold justify-center items-center">
              Short Biography :
            </h1>
            <br />
            <p className="text-sm justify-center items-center text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              est, cumque officiis obcaecati cupiditate nemo dignissimos
              laboriosam eaque expedita facere eveniet nostrum molestiae
              mollitia earum recusandae ullam ipsa esse repellat!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homeowner;
