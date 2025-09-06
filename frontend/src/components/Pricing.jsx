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
    <section className="bg-white py-10">
      <h2 className="text-center font-bold text-[2.5rem]">
        Our Competitive Pricing
      </h2>
      <h3 className="text-center font-bold text-[2rem] mb-8 mt-4">
        FULFILLMENT BY AMAZON
      </h3>
      <hr className="w-3/5 mx-auto mb-8 border-t border-gray-900" />
      <div
        className="flex justify-center gap-8 flex-wrap mb-12"
      >
        {tiers.map((tier, idx) => (
          <div
            key={tier.scale}
            className={`
              ${idx === 1 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"}
              rounded-[36px]
              px-20 py-10
              w-[430px]
              text-left
              shadow-md
            `}
          >
            <div className="text-base font-semibold mb-2 tracking-wide">
              {tier.scale}
            </div>
            <div className="text-[2.7rem] text-center font-bold my-4">
              {tier.price}
            </div>
            <ul className="list-none p-0 mt-6 text-inherit">
              {tier.features.map(feature => (
                <li key={feature} className="mb-3 text-lg">
                  • {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h3 className="text-center font-bold text-[2rem] mb-8">
        FULFILLMENT BY MERCHANT (FBM)
      </h3>
      <hr className="w-full mx-auto mb-8 border-t border-gray-900" />
      <div
        className="flex justify-center"
      >
        <div
          className="bg-blue-600 text-white
            rounded-[36px]
            px-20 py-10
            w-[500px]
            text-center
            shadow-md"
        >
          <div className="text-[2.7rem] font-bold my-4">
            {fbm.price}
          </div>
          <ul className="list-none p-0 mt-6 text-left">
            {fbm.features.map(feature => (
              <li key={feature} className="mb-3 text-lg">
                • {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
