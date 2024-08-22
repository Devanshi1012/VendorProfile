import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    position: "Founder & CEO",
    bio: "John has over 20 years of experience in the industry and founded the company with a vision to innovate.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1c3NpbmVzcyUyMG1hbiUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Jane Smith",
    position: "Chief Operating Officer",
    bio: "Jane ensures that our operations run smoothly and efficiently.",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzc2luZXNzJTIwbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

function AboutSection() {
  return (
    <div className="p-10 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        ABOUT US
      </h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Our Background
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We are a dedicated team passionate about providing top-notch services.
          Our journey began with a single goal: to innovate and lead in our
          industry.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">History</h3>
        <p className="text-gray-600 leading-relaxed">
          Founded in 2010, we have grown from a small startup to a leading
          player in the market. Our history is marked by key milestones and
          achievements that have shaped our success.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Mission & Vision
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to provide exceptional value to our customers through
          innovation and excellence. We envision a future where we continue to
          lead and set new standards in the industry.
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-gray-800 mb-8">
          Meet the Team
        </h3>
        <div className="flex flex-wrap gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md w-full sm:w-64"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h4>
              <p className="text-gray-600 mb-2">{member.position}</p>
              <p className="text-gray-700 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
