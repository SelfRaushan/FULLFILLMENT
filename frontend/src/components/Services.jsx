// frontend/src/components/ServicesGrid.jsx
import React from "react";
import warehouseImg from "../assets/warehouse.jpg"; // replace with your actual image path
import orderImg from "../assets/orderfulfillment.png"; // replace with your actual image path
import distributionImg from "../assets/distribution.webp"; // replace with your actual image path

const ServicesGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          Our Exceptional Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Service 1 */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Warehousing and Storage
            </h3>
            <img
              src={warehouseImg}
              alt="Warehousing"
              className="rounded-xl shadow-md mb-6 w-full h-56 object-cover"
            />
            <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
              <li>Secure inventory storage.</li>
              <li>Climate-controlled storage for sensitive goods.</li>
              <li>
                Inventory management systems for real-time visibility.
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Order Fulfillment
            </h3>
            <img
              src={orderImg}
              alt="Order Fulfillment"
              className="rounded-xl shadow-md mb-6 w-full h-56 object-cover"
            />
            <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
              <li>
                Pick and pack services: selecting items from inventory and
                preparing them for shipment.
              </li>
              <li>Kitting: creating customized product bundles.</li>
              <li>Order processing and shipment.</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Distribution
            </h3>
            <img
              src={distributionImg}
              alt="Distribution"
              className="rounded-xl shadow-md mb-6 w-full h-56 object-cover"
            />
            <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
              <li>
                Shipping services to deliver goods to customers or distribution
                centers.
              </li>
              <li>Freight coordination with carriers.</li>
              <li>
                International shipping and logistics, including customs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
