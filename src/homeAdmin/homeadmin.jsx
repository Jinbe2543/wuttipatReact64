import React from "react";
import Layout from "../Layout.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import mockEmployees from "../Home.jsx";
import axios from 'axios';
const Homeadmin = () => {
  const [name, setName] = useState([]);
  const [lastname, setLastname] = useState([]);
  const [position, setPosition] = useState([]);
  const mockEmployees = [
    {
      id: 0,
      name: "mock",
      lastname: "mocklastname",
      position: "Manager",
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer",
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer",
    },
  ];

 
  return (
    <>
      <Layout />
      <div
        className="flex justify-center items-center w-full h-full "
      >
        <div className="">
          <div>
            <h1 className="text-5xl font-bold mt-36 ml-auto text-center">
              Generation Thailand
              <br />
              Home - Admin Sector
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

      {/* Create User here */}
      <div className="w-full h-full flex justify-center ">
        <div className="  flex flex-row items-center ">
          <div className="mt-4">
          <h2 className="text-sm font-bold mb-3.5">Create User Here</h2>
            <input
              type="text"
              className="border-2 border-black-800  w-76 h-12 "
              placeholder="Name"
            />
          </div>

          <div className="mt-12">
            <input
              type="text"
              className="border-2 border-black-800  w-76 h-12 "
              placeholder="Last Name"
            />
          </div>

          <div className="mt-12">
            <input
              type="text"
              className="border-2 border-black-800  w-76 h-12 "
              placeholder="Position"
            />
          </div>

          <div className=" flex justify-start w-16 h-12 mt-12">
          <button class="btn btn-outline btn-primary">Save</button>
          </div>
        </div>
      </div>

      {/* Table Admin */}
      <div className="flex flex-col justify-center items-center mt-24">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {mockEmployees.map((item) => {
              return (
                <tr key={item.key}>
                  <td>{item.name}</td>
                  <td>{item.lastname}</td>
                  <td>{item.position}</td>
                  <td><button>delede</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button class="btn btn-active" >Delete</button>
        </div>
      </div>
    </>
  );
};

export default Homeadmin;
