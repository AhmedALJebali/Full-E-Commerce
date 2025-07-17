"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus("Your message has been sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-8 md:px-16 lg:px-32">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-neutral-800">Contact Us</h1>
        <p className="mb-8 text-neutral-600 text-lg">
          We'd love to hear from you! Send us your questions or feedback.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label className="block mb-1 text-xs font-semibold text-neutral-700 tracking-wide">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-xs font-semibold text-neutral-700 tracking-wide">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-xs font-semibold text-neutral-700 tracking-wide">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white font-semibold px-6 py-3 rounded-xl hover:bg-neutral-800 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {status && (
            <div className="text-center mt-4 text-sm text-green-600 font-medium">
              {status}
            </div>
          )}
        </form>
      </section>
    </main>
  );
}
