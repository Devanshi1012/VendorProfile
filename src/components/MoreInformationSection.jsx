import React from "react";

const menuItems = [
  {
    id: 1,
    name: "Burger",
    description: "Juicy grilled burger with lettuce and tomato",
    price: "Rs 55",
  },
  {
    id: 2,
    name: "Pizza",
    description: "Cheese pizza with a variety of toppings",
    price: "Rs 180",
  },
  {
    id: 3,
    name: "Pasta",
    description: "Creamy pasta with mushrooms and spinach",
    price: "Rs 250",
  },
];

const specialFeatures = [
  "Organic ingredients used",
  "Home delivery available",
  "Vegetarian and vegan options",
  "Live music on weekends",
];

const faqs = [
  {
    question: "What are your operating hours?",
    answer: "We are open from 10 AM to 10 PM every day.",
  },
  {
    question: "Do you offer delivery?",
    answer: "Yes, we offer home delivery within a 5-mile radius.",
  },
  {
    question: "Are there vegetarian options available?",
    answer:
      "Yes, we have a variety of vegetarian and vegan dishes on our menu.",
  },
];

function MoreInformationSection() {
  return (
    <div className="p-8 bg-white rounded-lg mt-8 shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          Menu
        </h2>
        <ul className="space-y-6">
          {menuItems.map((item) => (
            <li key={item.id} className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-blue-600">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <span className="text-lg font-bold text-green-600">
                {item.price}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          Special Features
        </h2>
        <ul className="space-y-4">
          {specialFeatures.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-gray-700 font-medium"
            >
              <span className="mr-2 text-green-500">✔</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          FAQs
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold text-purple-600">
              {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoreInformationSection;
