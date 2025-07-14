import React from "react";

function Features() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 mx-auto w-[95%] lg:w-[80%] py-20">
      {/* Feature 1 */}
      <div className="flex-1">
        <div className="rounded-full mb-3 w-9 h-9 flex justify-center items-center bg-[#F6F6F6]">
          {/* SVG 1 */}
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7007 14.7309V3.0985C15.7007 2.15172 14.9332 1.38422 13.9864 1.38422H2.91838C1.97162 1.38422 1.2041 2.15172 1.2041 3.0985V14.4568C1.2041 15.4036 1.97162 16.171 2.91838 16.171H4.2041M22.7959 9.49694H15.7031M20.489 15.8512H21.0799C22.0267 15.8512 22.7942 15.0837 22.7942 14.1369V8.9924L20.4072 4.10522C20.1197 3.5166 19.5219 3.14328 18.8667 3.14328H16.0099M14.7037 16.1707H9.66797M4.28914 16.2226C4.28914 16.8573 4.54128 17.4661 4.99008 17.9149C5.43888 18.3637 6.04758 18.6158 6.68229 18.6158C7.31699 18.6158 7.92569 18.3637 8.37449 17.9149C8.82329 17.4661 9.07543 16.8573 9.07543 16.2226C9.07543 15.5879 8.82329 14.9792 8.37449 14.5304C7.92569 14.0816 7.31699 13.8295 6.68229 13.8295C6.04758 13.8295 5.43888 14.0816 4.99008 14.5304C4.54128 14.9792 4.28914 15.5879 4.28914 16.2226ZM15.1526 16.2226C15.1526 16.8573 15.4047 17.4661 15.8535 17.9149C16.3023 18.3637 16.911 18.6158 17.5457 18.6158C18.1804 18.6158 18.7891 18.3637 19.2379 17.9149C19.6867 17.4661 19.9389 16.8573 19.9389 16.2226C19.9389 15.5879 19.6867 14.9792 19.2379 14.5304C18.7891 14.0816 18.1804 13.8295 17.5457 13.8295C16.911 13.8295 16.3023 14.0816 15.8535 14.5304C15.4047 14.9792 15.1526 15.5879 15.1526 16.2226Z"
              stroke="#0E1422"
              strokeWidth="1.71429"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-neutral-900 text-xl font-medium mb-2">Free Shipping</h2>
        <p className="text-neutral-600 text-sm">
          Upgrade your style today and get FREE shipping on all orders! Don't miss out.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="flex-1">
        <div className="rounded-full mb-3 w-9 h-9 flex justify-center items-center bg-[#F6F6F6]">
          {/* SVG 2 */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7272 8.27901L10.7633 13.8604L8.28131 11.9999M12.443 19.9176C12.1579 20.0275 11.842 20.0275 11.5569 19.9176C9.33201 19.0638 7.41857 17.5557 6.06934 15.5921C4.7201 13.6287 3.99856 11.3024 4 8.92041V5.2301C4 4.90386 4.12967 4.59097 4.36048 4.36029C4.5913 4.1296 4.90435 4 5.23077 4H18.7692C19.0956 4 19.4087 4.1296 19.6395 4.36029C19.8703 4.59097 20 4.90386 20 5.2301V8.92041C20.0014 11.3024 19.2799 13.6287 17.9307 15.5921C16.5814 17.5557 14.6679 19.0638 12.443 19.9176Z"
              stroke="#0E1422"
              strokeWidth="1.43"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-neutral-900 text-xl font-medium mb-2">Secure Payment</h2>
        <p className="text-neutral-600 text-sm">
          Your payment information is processed securely. Shop with confidence!
        </p>
      </div>

      {/* Feature 3 */}
      <div className="flex-1">
        <div className="rounded-full mb-3 w-9 h-9 flex justify-center items-center bg-[#F6F6F6]">
          {/* SVG 3 */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.05174 11.2695L1 16.5764L4.29748 15.6893L5.18103 19L7.82887 14.3955M15.9483 11.2695L19 16.5764L15.7025 15.6893L14.819 19L12.1712 14.3955M16.8587 7.88992C16.8587 11.6951 13.7862 14.7799 9.99621 14.7799C6.20619 14.7799 3.13379 11.6951 3.13379 7.88992C3.13379 4.08472 6.20619 1 9.99621 1C13.7862 1 16.8587 4.08472 16.8587 7.88992Z"
              stroke="#0E1422"
              strokeWidth="1.43"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-neutral-900 text-xl font-medium mb-2">Customer Support</h2>
        <p className="text-neutral-600 text-sm">
          Need help? Our friendly support team is available 24/7.
        </p>
      </div>
    </div>
  );
}

export default Features;
