// src/components/Team.jsx

import React from "react";
import shaafImg from "../assets/shaaf-1.jpg";
import hashirImg from "../assets/hashir-2.jpg";
import hiraImg from "../assets/hira.jpg";

const team = [
  { name: "MUHAMMAD SHAAF DAGRA", img: shaafImg },
  { name: "MUHAMMAD HASHIR DAGRA", img: hashirImg },
  { name: "HIRA KHAN", img: hiraImg },
];

const Team = () => (
  <div className="text-center my-10">
    <hr className="w-full mx-auto mb-8 border-t border-gray-900" />
    <h1 className="text-4xl font-bold mb-4">
      MEET OUR TEAM
    </h1>
    <hr className="w-3/5 mx-auto mb-8 border-t border-gray-900" />
    <div className="flex justify-center items-start gap-24 mb-10 flex-wrap">
      {team.map((member) => (
        <div key={member.name} className="text-center">
          <img
            src={member.img}
            alt={member.name}
            className="w-56 h-64 object-cover rounded-lg mb-6"
          />
          <div className="mt-2 font-bold tracking-wide text-sm">
            {member.name}
          </div>
        </div>
      ))}
    </div>
    <hr className="w-3/5 mx-auto border-t border-gray-900" />
  </div>
);

export default Team;
