import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(() => {
    return localStorage.getItem("profileImage") || null;
  });
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => {
    setImage("");
    localStorage.removeItem("profileImage");
  };

  return (
    <>
      <div className=" p-2 bg-gradient-to-r from-blue-200 to-blue-500 h-28 flex">
        <div
          className="bg-blue-500 rounded-full h-44 w-44 m-4 overflow-hidden"
          onClick={() => setShowModal(true)}
        >
          {image ? (
            <img src={image} className="h-40 w-40 rounded-full m-2" />
          ) : (
            <FaUser className="h-40 w-40  text-gray-600 m-2" />
          )}
        </div>

        <div className="my-28 mx-4">
          <h2 className="font-bold">VENDOR NAME</h2>
          <h3>DESIGNATION</h3>
          <a
            href="mailto:vendor@example.com?subject=Inquiry"
            className="p-2 my-2 rounded-lg bg-blue-400 text-white inline-block"
          >
            Contact Me
          </a>
        </div>
        <p className="flex justify-center my-8 mx-12  text-white font-semibold font-sans text-2xl">
          "Excellence is our standard, and your satisfaction is our promise."
        </p>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500"
              >
                &times;
              </button>
            </div>
            {image ? (
              <img src={image} alt="Profile" className="max-w-full max-h-96" />
            ) : (
              <FaUser className="text-gray-600 text-9xl" />
            )}
            <button
              onClick={handleRemoveImage}
              className="bg-red-500 text-white px-4 py-2 rounded mt-8"
            >
              Remove Photo
            </button>
            <button
              onClick={() => document.getElementById("imageUpload").click()}
              className="bg-blue-500 text-white px-4 py-2 rounded mx-4"
            >
              Change Profile Photo
            </button>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
