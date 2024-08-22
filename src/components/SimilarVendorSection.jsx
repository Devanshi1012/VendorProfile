import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

// Sample data for similar vendors
const similarVendors = [
  {
    id: 1,
    name: "Vendor A",
    category: "Restaurant",
    location: "Downtown",
    rating: 4.5,
    image:
      "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Vendor B",
    category: "Cafe",
    location: "Uptown",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhZmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Vendor C",
    category: "Bakery",
    location: "Midtown",
    rating: 4.8,
    image:
      "https://plus.unsplash.com/premium_photo-1665669263531-cdcbe18e7fe4?q=80&w=1850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Vendor D",
    category: "Restaurant",
    location: "Suburb",
    rating: 4.0,
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
  },
];

function SimilarVendorsSection() {
  return (
    <div className="p-8 bg-white rounded-lg mt-8 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">
        Similar Vendors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {similarVendors.map((vendor) => (
          <div
            key={vendor.id}
            className="bg-gray-50 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Link to={`/vendors/${vendor.id}`}>
              <img
                src={vendor.image}
                alt={vendor.name}
                className="w-full h-40 object-cover"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                <Link
                  to={`/vendors/${vendor.id}`}
                  className="hover:text-blue-600"
                >
                  {vendor.name}
                </Link>
              </h3>
              <p className="text-gray-600 mb-2">
                {vendor.category} - {vendor.location}
              </p>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < Math.round(vendor.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <Link
                to={`/vendors/${vendor.id}`}
                className="text-blue-500 hover:underline"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarVendorsSection;
