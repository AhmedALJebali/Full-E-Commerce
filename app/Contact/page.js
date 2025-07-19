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
        <p className="mb-8 text-neutral-600 text-lg">
          We'd love to hear from you! Whether you have a question about our
          products, need assistance with an order, or just want to share your
          feedback — we're here to help. Our team values your input and will do
          our best to get back to you as soon as possible. Don't hesitate to
          reach out; your thoughts matter to us!
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label className="block mb-1 font-medium tracking-wide">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none text-left"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium tracking-wide">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none text-left"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium tracking-wide">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none text-left"
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
