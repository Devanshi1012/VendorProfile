import React from "react";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Overview() {
  return (
    <div className="px-6 py-8 bg-white shadow-lg rounded-lg mt-28 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Overview</h2>

      {/* Business Hours */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-700">
          <FaClock className="mr-2 text-blue-500" /> Business Hours
        </h3>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
          <li>Saturday: 10:00 AM - 6:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>

      {/* Location */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-700">
          <FaMapMarkerAlt className="mr-2 text-red-500" /> Location
        </h3>
        <p className="text-gray-600">
          123 Vendor Street, Suite 100, City, State, ZIP
        </p>
        <div className="mt-6">
          <iframe
            title="Vendor Location"
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="300"
            className="rounded-lg border-0 shadow-sm"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-700">
          <FaPhone className="mr-2 text-green-500" /> Contact Information
        </h3>
        <p className="text-gray-600">Phone: +1 234 567 890</p>
        <p className="text-gray-600">Email: vendor@example.com</p>
      </div>

      {/* Highlights */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">
          Highlights
        </h3>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Popular Dishes: Special Pasta, Grilled Chicken</li>
          <li>Special Offers: 20% off on Tuesdays</li>
        </ul>
      </div>
    </div>
  );
}

export default Overview;
