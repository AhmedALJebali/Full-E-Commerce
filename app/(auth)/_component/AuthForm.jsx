"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function AuthForm({ type = "login" }) {
  const isLogin = type === "login";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    const { name, email, password } = formData;

    // ✅ Validation
    if (!email || !password || (!isLogin && !name)) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    // 🔐 Simulate check (replace with real API/auth logic)
    if (isLogin) {
      if (email !== "user@example.com" || password !== "123456") {
        setErrorMsg("Invalid email or password.");
        return;
      }
      alert("Login successful!");
    } else {
      alert("Signup successful!");
    }

    // 🚀 Add redirect / auth logic here
  };

  return (
    <div className="my-20 flex items-center justify-center bg-white px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white space-y-6"
      >
        {/* Google Auth */}
        <button
          type="button"
          className="w-full border border-neutral-300 text-sm py-2 rounded flex items-center justify-center gap-2 hover:bg-neutral-100 cursor-pointer"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px bg-neutral-200 flex-1" />
          <span className="text-sm text-neutral-500">OR</span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        {/* Error Message */}
        {errorMsg && (
          <div className="text-sm text-red-600 bg-red-100 px-3 py-2 rounded border border-red-200">
            {errorMsg}
          </div>
        )}

        {/* Name (only for signup) */}
        {!isLogin && (
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-neutral-300 px-3 py-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400"
              required={!isLogin}
            />
          </div>
        )}

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-neutral-300 px-3 py-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-neutral-300 px-3 py-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400"
            required
          />
          {isLogin && (
            <Link
              href="/forgot-password"
              className="text-xs text-neutral-500 mt-1 inline-block hover:underline"
            >
              Forgot Password?
            </Link>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="cursor-pointer w-full bg-neutral-900 text-white py-2 rounded text-sm font-medium hover:bg-neutral-800"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-neutral-500">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <Link href="/signup" className="hover:underline">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/login" className="hover:underline">
                Login
              </Link>
            </>
          )}
        </p>
      </form>
    </div>
  );
}
