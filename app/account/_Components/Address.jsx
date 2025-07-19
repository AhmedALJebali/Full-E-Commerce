"use client";
import React, { useState } from "react";

function Address({ user, onSave = null }) {
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState({
    Street_Address: "",
    City: "",
    State: "",
    Country: "",
    ZipCode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm({ ...user.Addresses[index] });
  };

  const handleCancel = () => {
    setEditIndex(null);
    resetForm();
  };

  const resetForm = () =>
    setForm({
      Street_Address: "",
      City: "",
      State: "",
      Country: "",
      ZipCode: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedAddresses = [...user.Addresses];

    if (editIndex === "new") {
      updatedAddresses.push(form);
    } else {
      updatedAddresses[editIndex] = form;
    }

    onSave?.(updatedAddresses);
    resetForm();
    setEditIndex(null);
  };

  const handleRemove = (index) => {
    const updated = user.Addresses.filter((_, i) => i !== index);
    onSave?.(updated);
    if (editIndex === index) {
      setEditIndex(null);
      resetForm();
    }
  };

  const handleAddNew = () => {
    resetForm();
    setEditIndex("new");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-800 mb-6 border-b pb-2">
        Address
      </h2>

      {editIndex === "new" && (
        <div className="bg-white border border-neutral-300 rounded-md p-4 mb-4">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <InputField
              name="Street_Address"
              value={form.Street_Address}
              onChange={handleChange}
            />
            <InputField name="City" value={form.City} onChange={handleChange} />
            <InputField
              name="State"
              value={form.State}
              onChange={handleChange}
            />
            <InputField
              name="Country"
              value={form.Country}
              onChange={handleChange}
            />
            <InputField
              name="ZipCode"
              value={form.ZipCode}
              onChange={handleChange}
            />

            <div className="sm:col-span-2 text-right space-x-2">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 border rounded-md cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-900"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {user.Addresses?.map((address, index) => (
        <div
          key={index}
          className="bg-white border border-neutral-300 rounded-md p-4 mb-4"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-neutral-800">
              {address.isDefault ? "Default Address" : `Address ${index + 1}`}
            </h3>
            <div className="space-x-3">
              <button
                onClick={() =>
                  editIndex === index ? handleCancel() : handleEdit(index)
                }
                className="text-sm text-neutral-900 hover:underline cursor-pointer"
              >
                {editIndex === index ? "Cancel" : "Edit"}
              </button>
              <button
                onClick={() => handleRemove(index)}
                className="text-sm text-red-600 hover:underline cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>

          {editIndex === index ? (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <InputField
                name="Street_Address"
                value={form.Street_Address}
                onChange={handleChange}
              />
              <InputField
                name="City"
                value={form.City}
                onChange={handleChange}
              />
              <InputField
                name="State"
                value={form.State}
                onChange={handleChange}
              />
              <InputField
                name="Country"
                value={form.Country}
                onChange={handleChange}
              />
              <InputField
                name="ZipCode"
                value={form.ZipCode}
                onChange={handleChange}
              />

              <div className="sm:col-span-2 text-right space-x-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 border rounded-md cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-700"
                >
                  Save
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-1 text-neutral-700">
              <p>
                <span className="font-medium">Street:</span>{" "}
                {address.Street_Address}
              </p>
              <p>
                <span className="font-medium">City:</span> {address.City}
              </p>
              <p>
                <span className="font-medium">State:</span> {address.State}
              </p>
              <p>
                <span className="font-medium">Country:</span> {address.Country}
              </p>
              <p>
                <span className="font-medium">Zip Code:</span> {address.ZipCode}
              </p>
            </div>
          )}
        </div>
      ))}

      <button
        onClick={handleAddNew}
        className="cursor-pointer mb-4 px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-700"
      >
        Add Address
      </button>
    </div>
  );
}

// 🔧 Reusable input field
function InputField({ name, value, onChange }) {
  const label = name.replace(/_/g, " ");
  return (
    <div>
      <label className="text-sm text-neutral-600">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 mt-1 border rounded-md"
      />
    </div>
  );
}

export default Address;
