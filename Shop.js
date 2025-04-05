import React from "react";

const products = [
  {
    id: 1,
    title: "Indian Penal Code (IPC)",
    price: "₹450",
    description: "Comprehensive guide to the Indian Penal Code with annotations and recent amendments."
  },
  {
    id: 2,
    title: "Constitution of India",
    price: "₹599",
    description: "Detailed edition of the Constitution of India with comments, suitable for students and practitioners."
  },
  {
    id: 3,
    title: "Law of Evidence",
    price: "₹520",
    description: "In-depth analysis of the Indian Evidence Act with case references."
  },
  {
    id: 4,
    title: "Legal GK & Competitive Exams Guide",
    price: "₹390",
    description: "Essential book for CLAT, AIBE, and other legal competitive exams."
  }
];

export default function Shop() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-blue-700 mb-6">Shop Legal Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 shadow hover:shadow-md transition duration-300"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-blue-600 font-semibold">{product.price}</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Enquire Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
