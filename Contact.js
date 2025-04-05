import React from "react";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-blue-700 mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">
        Have questions or need help finding the right book? Reach out to us! We’re happy to assist students,
        professionals, and institutions with the best legal resources.
      </p>
      <form className="grid gap-4">
        <input type="text" placeholder="Your Name" className="border rounded px-4 py-2 w-full" />
        <input type="email" placeholder="Your Email" className="border rounded px-4 py-2 w-full" />
        <textarea rows="4" placeholder="Your Message" className="border rounded px-4 py-2 w-full"></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
      </form>

      <div className="mt-8 text-gray-700">
        <h3 className="text-xl font-bold mb-2">Store Address</h3>
        <p>Warangal Law House</p>
        <p>Near XYZ Circle, Hanamkonda, Warangal, Telangana - 506001</p>
        <p>Phone: +91-98765-43210</p>
        <p>Email: contact@warangallawhouse.com</p>
      </div>
    </div>
  );
}
