import React, { useEffect, useState } from "react";
import data from "../assets/services.json";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((d) => setUser(d));
  }, []);
  return (
    <div>
      <div className="text-center space-y-8">
        <p className=" font-bold">service</p>
        <p className=" font-extrabold text-3xl">Our Service Area</p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised{" "}
        </p>
        <p>words which don't look even slightly believable.</p>
      </div>
      <div className="grid grid-cols-3 place-items-center">
        {user.map((res) => (
          <div key={res._id} className="w-[364px]">
            <div className="rounded-xl p-6  border">
              <img src={res.img} className="rounded-xl w-full" alt="" />
              <p>{res.title}</p>
              <p>Price: $ {res.price}</p>
              <div className="flex justify-end">
                <Link to={`checkout/${res._id}`}>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center ">
        <button className="m-8  btn btn-outline text-orange-700 hover:bg-orange-500">
          More services
        </button>
      </div>
    </div>
  );
};

export default Service;
