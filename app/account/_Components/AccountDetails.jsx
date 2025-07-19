import React from "react";
function AccountDetails({ user }) {
  const defaultAddress = user.Addresses?.find((addr) => addr.isDefault);
  return (
    <div className="bg-white  rounded-xl  w-full max-w-3xl  ">
      <h2 className="text-2xl font-bold text-neutral-800 mb-6 border-b pb-2">
        Account Details
      </h2>

      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={user.ProfilePicture}
          alt={user.Full_Name}
          className="w-20 h-20 rounded-full object-cover border"
        />
        <div>
          <h3 className="text-xl font-semibold">{user.Full_Name}</h3>
          <p className="text-neutral-600">{user.Email}</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-neutral-500">Phone</p>
          <p className="font-medium">{user.Phone}</p>
        </div>
        <div>
          <p className="text-sm text-neutral-500">Gender</p>
          <p className="font-medium">{user.Gender}</p>
        </div>
        <div>
          <p className="text-sm text-neutral-500">City</p>
          <p className="font-medium">{defaultAddress.City}</p>
        </div>
        <div>
          <p className="text-sm text-neutral-500">State</p>
          <p className="font-medium">{defaultAddress.State}</p>
        </div>
        <div>
          <p className="text-sm text-neutral-500">Country</p>
          <p className="font-medium">{defaultAddress.Country}</p>
        </div>
        <div>
          <p className="text-sm text-neutral-500">Zip Code</p>
          <p className="font-medium">{defaultAddress.ZipCode}</p>
        </div>
      </div>

      {/* Address */}
      <div className="mb-6">
        <p className="text-sm text-neutral-500">Street Address</p>
        <p className="font-medium">{defaultAddress.Street_Address}</p>
      </div>

      {/* Payment Methods */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-2">Payment Methods</h4>
        {user.PaymentMethods.map((method, index) => (
          <div key={index} className="mb-2 border p-3 rounded-md bg-neutral-50">
            <p className="font-medium">{method.name}</p>
            {method.last4 && (
              <p className="text-sm text-neutral-600">
                •••• •••• •••• {method.last4} — Expires {method.expiryMonth}/
                {method.expiryYear}
              </p>
            )}
            {method.email && (
              <p className="text-sm text-neutral-600">Email: {method.email}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccountDetails;
