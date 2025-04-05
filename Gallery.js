import React from "react";

const images = [
  {
    src: "https://via.placeholder.com/400x250?text=Store+Front",
    alt: "Warangal Law House store front"
  },
  {
    src: "https://via.placeholder.com/400x250?text=Books+Display",
    alt: "Books display inside store"
  },
  {
    src: "https://via.placeholder.com/400x250?text=Law+Guides",
    alt: "Various law guides available"
  },
  {
    src: "https://via.placeholder.com/400x250?text=Legal+Events",
    alt: "Legal events and seminars"
  }
];

export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-blue-700 mb-6">Gallery</h2>
      <p className="mb-4 text-gray-700">A glimpse into our store, events, and legal literature collections.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow hover:shadow-lg">
            <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
            <p className="text-center p-2 text-sm text-gray-600">{img.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
