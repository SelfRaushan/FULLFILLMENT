// src/components/LogisticsSection.jsx
import React from "react";
import truckImage from "../assets/truck-on-the-road.webp";

const LogisticsSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Top content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="w-[60%] ml-18">
          <h2 className="text-4xl text-center font-bold leading-[1.1]" style={{ marginBottom: "2px" }}>
            Best and Reliable 3PL
          </h2>
          <h2 className="text-4xl text-center font-bold leading-[1.1] " style={{ marginBottom: "2px" }}>
            Services <span className="font-extrabold">Provider</span>
          </h2>
          <ul className="text-lg list-disc ml-8 mt-9.5">
            <li className="mb-5 text-gray-600">We provide dependable logistics services, earning client trust through on-time delivery, accurate order fulfillment, and safe storage.</li>
            <li className="mb-5 text-gray-600">We create custom logistics plans with our clients to align goals and achieve success.</li>
            <li className="mb-5 text-gray-600">To ensure a smooth collaboration, our team provides individualized support, proactive issue resolution, and open communication.</li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={truckImage}
            alt="Logistics Truck"
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      {/* Bottom Logos */}
      <div className="flex flex-wrap justify-center items-center gap-10 mt-16">
        <img
          src="https://hhsfulfillment.com/wp-content/uploads/2024/12/amz.jpg"
          alt="Amazon"
          className="h-30 object-contain"
        />
        <img
          src="https://hhsfulfillment.com/wp-content/uploads/2024/12/shopify-logo.jpeg"
          alt="Shopify"
          className="h-30 object-contain"
        />
        <img
          src="https://hhsfulfillment.com/wp-content/uploads/2024/12/wallmart1.jpg"
          alt="Walmart"
          className="h-20 object-contain"
        />
        <img
          src="https://hhsfulfillment.com/wp-content/uploads/2024/12/tiktokshop.jpg"
          alt="TikTok Shop"
          className="h-30 object-contain"
        />
      </div>
    </section>
  );
};

export default LogisticsSection;
