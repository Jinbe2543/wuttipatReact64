import React from "react";
import Layout from "../Layout";
import "../App.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

const Homeuser = () => {
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

  const [data, setData] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    const getData = async () => {
        const response = await axios.get('https://jsd5-mock-backend.onrender.com/members');
        setData([...mockEmployees, ...response.data]);
    };

    getData();

}, []);
  return (
    <>
      <Layout />
      <div className="flex justify-center items-center w-full h-full  ">
        <div className="">
          <div>
            <h1 className="text-5xl font-bold mt-36 ml-auto text-center">
              Generation Thailand
              <br />
              Home - User Sector
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
      <div className="flex justify-center mt-24">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.key}>
                  <td>{item.name}</td>
                  <td>{item.lastname}</td>
                  <td>{item.position}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Homeuser;
