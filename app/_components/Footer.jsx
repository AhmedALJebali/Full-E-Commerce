import React from "react";

const Footer = ({ isDark = false }) => {
  return (
    <footer className={`${isDark ? "bg-neutral-100" : "bg-white"} py-10`}>
      {/* Main Footer Content */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 py-8 md:w-[80%] w-[95%]">
        <div className="flex flex-col w-full ml-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="border border-neutral-200 rounded"
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
            <span className="text-neutral-900 text-lg font-bold">
              Ecommerce
            </span>
          </div>
          <span className="text-neutral-600 font-light text-sm mt-4">
            DevCut is a YouTube channel for practical project-based learning.
          </span>

          {/* Social Icons */}
          <div className="grid grid-cols-4 w-full mx-auto max-w-[150px] mt-5 items-center gap-3 sm:gap-5">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                fill="#5C5F6A"
              />
            </svg>
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99731 4.86903C7.15795 4.86903 4.86644 7.16058 4.86644 10C4.86644 12.8394 7.15795 15.131 9.99731 15.131C12.8367 15.131 15.1282 12.8394 15.1282 10C15.1282 7.16058 12.8367 4.86903 9.99731 4.86903ZM9.99731 13.3348C8.16111 13.3348 6.66262 11.8362 6.66262 10C6.66262 8.16376 8.16111 6.66525 9.99731 6.66525C11.8335 6.66525 13.332 8.16376 13.332 10C13.332 11.8362 11.8335 13.3348 9.99731 13.3348ZM15.3383 3.46308C14.6754 3.46308 14.14 3.99845 14.14 4.66139C14.14 5.32434 14.6754 5.8597 15.3383 5.8597C16.0013 5.8597 16.5366 5.32684 16.5366 4.66139C16.5368 4.50397 16.5059 4.34806 16.4458 4.20259C16.3856 4.05711 16.2974 3.92493 16.1861 3.81362C16.0748 3.70231 15.9426 3.61405 15.7971 3.5539C15.6516 3.49375 15.4957 3.46289 15.3383 3.46308ZM19.9989 10C19.9989 8.61907 20.0114 7.25064 19.9338 5.87221C19.8563 4.27113 19.4911 2.85017 18.3203 1.67938C17.147 0.506085 15.7286 0.14334 14.1275 0.065788C12.7466 -0.0117644 11.3782 0.000744113 9.99981 0.000744113C8.61891 0.000744113 7.25051 -0.0117644 5.8721 0.065788C4.27105 0.14334 2.85012 0.508587 1.67935 1.67938C0.506076 2.85267 0.143338 4.27113 0.0657868 5.87221C-0.0117642 7.25314 0.000744099 8.62157 0.000744099 10C0.000744099 11.3784 -0.0117642 12.7494 0.0657868 14.1278C0.143338 15.7289 0.508578 17.1498 1.67935 18.3206C2.85262 19.4939 4.27105 19.8567 5.8721 19.9342C7.25301 20.0118 8.62141 19.9993 9.99981 19.9993C11.3807 19.9993 12.7491 20.0118 14.1275 19.9342C15.7286 19.8567 17.1495 19.4914 18.3203 18.3206C19.4936 17.1473 19.8563 15.7289 19.9338 14.1278C20.0139 12.7494 19.9989 11.3809 19.9989 10ZM17.7974 15.899C17.6148 16.3543 17.3947 16.6945 17.0419 17.0448C16.6892 17.3975 16.3515 17.6176 15.8962 17.8003C14.5803 18.3231 11.4558 18.2055 9.99731 18.2055C8.53885 18.2055 5.4118 18.3231 4.09593 17.8028C3.64064 17.6201 3.30041 17.4 2.95018 17.0473C2.59745 16.6945 2.37731 16.3568 2.19469 15.9015C1.67434 14.5831 1.79192 11.4585 1.79192 10C1.79192 8.54151 1.67434 5.4144 2.19469 4.09851C2.37731 3.6432 2.59745 3.30298 2.95018 2.95274C3.30291 2.6025 3.64064 2.37985 4.09593 2.19723C5.4118 1.67688 8.53885 1.79446 9.99731 1.79446C11.4558 1.79446 14.5828 1.67688 15.8987 2.19723C16.354 2.37985 16.6942 2.6 17.0444 2.95274C17.3972 3.30548 17.6173 3.6432 17.7999 4.09851C18.3203 5.4144 18.2027 8.54151 18.2027 10C18.2027 11.4585 18.3203 14.5831 17.7974 15.899Z"
                fill="#5C5F6A"
              />
            </svg>
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.983 3.5C4.983 4.328 4.312 5 3.483 5C2.655 5 1.983 4.328 1.983 3.5C1.983 2.672 2.655 2 3.483 2C4.312 2 4.983 2.672 4.983 3.5ZM5 8H2V22H5V8ZM8.5 8H11.5V10.06H11.55C11.98 9.244 13 8.39 14.47 8.39C17.39 8.39 18 10.26 18 12.9V22H15V13.83C15 12.15 14.54 10.92 13.29 10.92C11.99 10.92 11.5 11.93 11.5 13.83V22H8.5V8Z"
                fill="#5C5F6A"
              ></path>
            </svg>
          </div>
        </div>

        <div className="hidden md:block"></div>
        <div className="col-span-3 grid grid-cols-3 ml-10 ">
          {/* Support */}
          <div>
            <h3 className="text-neutral-900 font-bold mb-2">SUPPORT</h3>
            <ul>
              <li>
                <a href="#" className="text-neutral-600 hover:text-black">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-black">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-black">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="text-neutral-900 font-bold mb-2">COMPANY</h3>
            <ul>
              <li>
                <a href="#" className="text-neutral-600 hover:text-black">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-black">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-black">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* Shop */}
          <div>
            <h3 className="text-neutral-900 font-bold mb-2">SHOP</h3>
            <ul>
              <li>
                <a href="#" className="text-neutral-600 hover:text-black">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-black">
                  Checkout
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-black">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-center">
          <h3 className="text-neutral-900 font-bold mb-2">ACCEPTED PAYMENTS</h3>
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
      </div>
      <hr className="border-t border-gray-300 my-4" />
      <p className="text-center text-gray-600 text-sm">
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
