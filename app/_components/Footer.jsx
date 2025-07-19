import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
const Footer = ({ isDark = false }) => {
  return (
    <footer
      className={`${isDark ? "bg-neutral-100" : "bg-white"} py-10`}
      aria-label="Footer"
    >
      <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-8 px-6 md:px-10 max-w-[1440px]">
        {/* Logo and About */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-neutral-800">
              <svg
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="border border-neutral-200  rounded-full"
              >
                <rect
                  y="0.5"
                  width="40"
                  height="40"
                  rx="20"
                  fill="currentCollor"
                />
                <path
                  d="M24.4769 11.8485L18.204 8.05509C17.6119 7.69292 16.9388 7.5015 16.2532 7.50031C14.2094 7.50031 12.3348 9.21225 12.3348 11.605V25.8073L24.4769 18.4669C26.9083 16.9947 26.9083 13.32 24.4769 11.8485ZM15.8484 18.948V11.3679L22.1163 15.1567L15.8484 18.948Z"
                  fill="#0E1422"
                />
                <path
                  d="M27.8489 33.4844C27.8489 33.5273 15.9908 33.466 15.9908 33.466L14.9434 33.3425C13.2467 33.144 11.9443 31.6233 12.002 29.8346C12.002 29.7917 12.0057 29.7519 12.0081 29.7103C12.0547 28.9365 12.3261 28.1961 12.7858 27.5885C12.9725 27.3461 13.2009 27.1425 13.4592 26.9882L22.4782 21.5725C24.3414 20.4535 25.8931 20.062 26.6999 18.0341C26.9974 17.2757 27.126 16.4562 27.0757 15.6379L27.0446 15.0865L27.9651 20.4204C28.083 21.3264 27.9013 22.2537 27.4211 23.0169C27.1326 23.4785 26.7475 23.8653 26.2951 24.1479L15.8295 29.3943C15.8191 29.4006 15.809 29.4074 15.7993 29.4149C15.5127 29.6293 15.6896 30.1069 16.0403 30.0867L24.7515 30.1403C26.4433 30.0417 27.8526 31.7112 27.8489 33.4844Z"
                  fill="#0E1422"
                />
              </svg>
            </div>
            <span className="text-neutral-900 text-lg font-bold">
              Ecommerce
            </span>
          </div>
          <p className="text-neutral-600 font-light text-sm">
            DevCut is a YouTube channel for practical project-based learning.
          </p>

          {/* Social Icons */}
          <nav className="flex gap-4 mt-2" aria-label="Social media">
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="hover:text-black text-[#5C5F6A] text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-black text-[#5C5F6A] text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-black text-[#5C5F6A] text-xl"
            >
              <FaLinkedin />
            </a>
          </nav>
        </div>

        {/* Links Section */}
        <div className="col-span-2 grid grid-cols-3 gap-6">
          {/* SUPPORT */}
          <nav aria-label="Support Links">
            <h2 className="text-neutral-900 font-bold mb-2">SUPPORT</h2>
            <ul className="space-y-1">
              <li>
                <a href="/faq" className="text-neutral-600 hover:text-black">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/terms" className="text-neutral-600 hover:text-black">
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-neutral-600 hover:text-black"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>

          {/* COMPANY */}
          <nav aria-label="Company Links">
            <h2 className="text-neutral-900 font-bold mb-2">COMPANY</h2>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="text-neutral-600 hover:text-black">
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-neutral-600 hover:text-black"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-neutral-600 hover:text-black"
                >
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          {/* SHOP */}
          <nav aria-label="Shop Links">
            <h2 className="text-neutral-900 font-bold mb-2">SHOP</h2>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/account"
                  className="text-neutral-600 hover:text-black"
                >
                  My Account
                </Link>
              </li>{" "}
              <li>
                <Link
                  href="/Cart"
                  className="text-neutral-600 hover:text-black"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  href="/Checkout"
                  className="text-neutral-600 hover:text-black"
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Payment section */}
        <div className="col-span-1 lg:col-span-2 flex flex-col items-center justify-center mt-4 lg:mt-0 ">
          <h2 className="text-neutral-900 font-bold mb-2 text-center">
            ACCEPTED PAYMENTS
          </h2>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="177"
              height="32"
              fill="none"
              viewBox="0 0 177 32"
            >
              <g opacity="0.8">
                <g clipPath="url(#clip0_1771_19959)">
                  <path
                    fill="#ED0006"
                    d="M15.017 22.85A9.14 9.14 0 0 1 9.108 25C4.078 25 0 20.97 0 16s4.078-9 9.108-9c2.255 0 4.318.81 5.909 2.15A9.14 9.14 0 0 1 20.925 7c5.03 0 9.108 4.03 9.108 9s-4.078 9-9.108 9a9.14 9.14 0 0 1-5.908-2.15"
                  ></path>
                  <path
                    fill="#F9A000"
                    d="M15.017 22.85a8.94 8.94 0 0 0 3.2-6.85c0-2.743-1.242-5.2-3.2-6.85A9.14 9.14 0 0 1 20.925 7c5.03 0 9.108 4.03 9.108 9s-4.078 9-9.108 9a9.14 9.14 0 0 1-5.908-2.15"
                  ></path>
                  <path
                    fill="#FF5E00"
                    d="M15.017 22.85a8.94 8.94 0 0 0 3.2-6.85c0-2.743-1.242-5.2-3.2-6.85a8.94 8.94 0 0 0-3.2 6.85c0 2.743 1.241 5.2 3.2 6.85"
                  ></path>
                </g>
                <path
                  fill="#016FD0"
                  fillRule="evenodd"
                  d="m64.224 10-5.191 11.826h6.215l.77-1.885h1.761l.771 1.886h6.84v-1.44l.61 1.44h3.54l.609-1.47v1.47h14.227l1.73-1.837 1.62 1.837 7.307.015-5.208-5.896L105.033 10h-7.194l-1.684 1.803L94.586 10H79.109l-1.33 3.053L76.42 10h-6.201v1.39l-.69-1.39h-5.305m1.203 1.68h3.03l3.443 8.019v-8.02h3.319l2.66 5.75 2.45-5.75h3.304v8.487h-2.01l-.016-6.65-2.93 6.65H76.88l-2.945-6.65v6.65h-4.134l-.783-1.903h-4.235l-.782 1.901h-2.214zm28.213 0h-8.17v8.48h8.043l2.593-2.81 2.499 2.81h2.612l-3.797-4.215 3.797-4.266h-2.499l-2.58 2.779zM66.9 13.115l-1.394 3.39h2.788zm20.587 1.87v-1.55h5.098l2.224 2.477-2.323 2.492h-4.999v-1.692h4.457v-1.726h-4.457z"
                  clipRule="evenodd"
                ></path>
                <g clipPath="url(#clip1_1771_19959)">
                  <path
                    fill="#00579F"
                    d="M161.515 9a8.2 8.2 0 0 1 3.052.577l-.463 2.926-.308-.143a5.64 5.64 0 0 0-2.534-.52c-1.343 0-1.946.591-1.96 1.168 0 .635.73 1.053 1.92 1.673 1.96.966 2.868 2.148 2.855 3.69-.028 2.813-2.352 4.63-5.922 4.63-1.526-.016-2.996-.348-3.794-.722l.476-3.043.448.217c1.106.505 1.834.72 3.192.72.98 0 2.03-.418 2.043-1.325 0-.592-.447-1.024-1.763-1.688-1.288-.649-3.01-1.73-2.982-3.676.014-2.639 2.38-4.484 5.74-4.484m-12.684 13.798h3.402l2.128-13.552h-3.402z"
                  ></path>
                  <path
                    fill="#00579F"
                    fillRule="evenodd"
                    d="M173.288 9.246h-2.631c-.812 0-1.428.245-1.779 1.124l-5.053 12.428h3.57l.714-2.033h4.368c.098.476.406 2.033.406 2.033h3.15zm-4.2 8.75 1.36-3.79c-.007.01.038-.116.104-.305.098-.28.243-.693.343-.993l.237 1.167s.645 3.244.785 3.922h-2.829"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#00579F"
                    d="m142.657 18.487 3.332-9.24h3.598l-5.348 13.537h-3.598l-3.052-11.852c2.156 1.168 4.088 3.518 4.704 5.68z"
                  ></path>
                  <path
                    fill="#FAA61A"
                    d="M139.563 9.246h-5.474l-.056.273c4.27 1.125 7.098 3.836 8.26 7.094l-1.19-6.228c-.196-.866-.798-1.11-1.54-1.14z"
                  ></path>
                </g>
                <path
                  fill="none"
                  d="M.033 0h176.033v32H.033z"
                  style={{ mixBlendMode: "saturation" }}
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1771_19959">
                  <path fill="#fff" d="M0 0h30.033v32H0z"></path>
                </clipPath>
                <clipPath id="clip1_1771_19959">
                  <path fill="#fff" d="M134.033 0h42v32h-42z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      <hr className="border-t border-gray-300 my-6 mx-6 md:mx-10" />

      <p className="text-center text-gray-600 text-sm px-4">
        © 2025 Al-jebali. All rights reserved.
      </p>
    </footer>
  );
};

const NewsletterSection = () => {
  return (
    <div className="bg-neutral-100 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side: Title and description */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Join Our Newsletter
          </h2>
          <p className="text-sm text-gray-500">
            We love to surprise our subscribers with occasional gifts.
          </p>
        </div>

        {/* Right side: Email input + button */}
        <form className="flex flex-col sm:flex-row w-full md:w-auto lg:min-w-[500px] max-w-lg gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-gray-800 transition cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export { NewsletterSection };

export default Footer;
