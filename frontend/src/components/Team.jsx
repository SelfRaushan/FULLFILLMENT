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
  <div style={{ textAlign: "center", margin: "40px 0" }}>
    <h1 className="text-4xl font-bold mb-4">
      MEET OUR TEAM
    </h1>
    <hr style={{ width: "60%", margin: "0 auto 32px", border: "1px solid #ccc" }} />
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "100px",
      marginBottom: 40,
      flexWrap: "wrap"
    }}>
      {team.map((member) => (
        <div key={member.name} style={{ textAlign: "center" }}>
          <img
            src={member.img}
            alt={member.name}
            style={{
              width: 220,
              height: 260,
              objectFit: "cover",
              borderRadius: 16,
              marginBottom: 24,
            }}
          />
          <div style={{
            marginTop: 8,
            fontWeight: 700,
            letterSpacing: 1,
            fontSize: 15
          }}>
            {member.name}
          </div>
        </div>
      ))}
    </div>
    <hr style={{ width: "60%", margin: "0 auto", border: "1px solid #ccc" }} />
  </div>
);

export default Team;
