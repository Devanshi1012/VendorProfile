import React from "react";
import ModalImage from "react-modal-image";

const images = [
  "https://images.unsplash.com/photo-1484325881845-65073528922e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFzdGElMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyaWxsZWQlMjBjaGlja2VufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1671559021919-19d9610c8cad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1708793873401-e8c6c153b76a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhbmVlcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1621608953630-00d9eb860392?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvdXB8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1667428304095-35b50b35566a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmFhbnxlbnwwfHwwfHx8MA%3D%3D",
];

function PhotoGallery() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 bg-gray-100 rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <ModalImage
            key={index}
            small={src}
            large={src}
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
