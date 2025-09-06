// src/components/Pricing.jsx

import React from "react";

const tiers = [
  {
    scale: "SMALL SCALE (100-500 UNITS)",
    price: "$0.75",
    features: [
      "Receiving & Inspection",
      "FNSKU Labeling",
      "Box Label",
      "Forwarding",
    ],
  },
  {
    scale: "MEDIUM SCALE (500-1000 UNITS)",
    price: "$0.65",
    features: [
      "Receiving & Inspection",
      "FNSKU Labeling",
      "Box Label",
      "Forwarding",
    ],
  },
  {
    scale: "LARGE SCALE (ABOVE 1000 UNITS)",
    price: "$0.60",
    features: [
      "Receiving & Inspection",
      "FNSKU Labeling",
      "Box Label",
      "Forwarding",
    ],
  },
];

const fbm = {
  scale: "FULFILLMENT BY MERCHANT (FBM)",
  price: "$2.25",
  features: [
    "Receiving & Inspection",
    "Labeling",
    "Box Label",
    "Forwarding",
  ],
};

export default function Pricing() {
  return (
    <section style={{ background: "#fff", padding: "60px 0" }}>
      <h2 style={{ textAlign: "center", fontWeight: 700, fontSize: "2.5rem" }}>
        Our Competitive Pricing
      </h2>
      <h3 style={{
        textAlign: "center",
        fontWeight: 700,
        fontSize: "2rem",
        marginBottom: "2rem",
        marginTop: "1rem"
      }}>
        FULFILLMENT BY AMAZON
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          marginBottom: "3rem"
        }}
      >
        {tiers.map((tier, idx) => (
          <div
            key={tier.scale}
            style={{
              background: idx === 1 ? "#2435ff" : "#ededf6",
              color: idx === 1 ? "#fff" : "#090915",
              borderRadius: "36px",
              padding: "2.5rem 2rem",
              width: "330px",
              textAlign: "center",
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)"
            }}
          >
            <div style={{
              fontSize: "1rem",
              fontWeight: 600,
              marginBottom: "10px",
              letterSpacing: "0.02em"
            }}>
              {tier.scale}
            </div>
            <div style={{
              fontSize: "2.7rem",
              fontWeight: 700,
              margin: "16px 0"
            }}>
              {tier.price}
            </div>
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: "1.5rem 0 0 0",
              textAlign: "left",
              color: "inherit"
            }}>
              {tier.features.map(feature => (
                <li key={feature} style={{ marginBottom: "0.75rem", fontSize: "1.1rem" }}>
                  • {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h3 style={{
        textAlign: "center",
        fontWeight: 700,
        fontSize: "2rem",
        marginBottom: "2rem"
      }}>
        FULFILLMENT BY MERCHANT (FBM)
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#2435ff",
            color: "#fff",
            borderRadius: "36px",
            padding: "2.5rem 2rem",
            width: "400px",
            textAlign: "center",
            boxShadow: "0 4px 16px rgba(0,0,0,0.04)"
          }}
        >
          <div style={{
            fontSize: "2.7rem",
            fontWeight: 700,
            margin: "16px 0"
          }}>
            {fbm.price}
          </div>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: "1.5rem 0 0 0",
            textAlign: "left"
          }}>
            {fbm.features.map(feature => (
              <li key={feature} style={{ marginBottom: "0.75rem", fontSize: "1.1rem" }}>
                • {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
