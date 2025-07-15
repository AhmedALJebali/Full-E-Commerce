"use client";

import { useState } from "react";
import Filtering from "./_components/Filtering";
import ProductsView from "./_components/ProductsView";
import { X, SlidersHorizontal } from "lucide-react";

export default function SearchPage() {
  const [AppliedFilters, setAppliedFilters] = useState({
    categories: [],
    colors: [],
    sizes: [],
    price: [0, 10000],
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <div className="w-[95%] md:w-[90%] mx-auto my-10">
      {/* زر الفلاتر للهاتف فقط */}
      <div className="md:hidden mb-5">
        <button
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black rounded-md"
          onClick={() => setShowMobileFilters(true)}
        >
          <SlidersHorizontal size={18} />
          Filter
        </button>
      </div>

      {/* الصفحة بالكامل */}
      <div className="flex flex-col md:flex-row gap-6 ">
        {/* Sidebar Filtering في الشاشات الكبيرة فقط */}
        <div className="hidden md:block md:w-[250px] shrink-0">
          <Filtering
            AppliedFilters={AppliedFilters}
            setAppliedFilters={setAppliedFilters}
          />
        </div>

        {/* Products */}
        <div className="flex-1 w-full min-w-0">
          <ProductsView
            AppliedFilters={AppliedFilters}
            setAppliedFilters={setAppliedFilters}
          />
        </div>
      </div>

      {/* Overlay لفلاتر الهاتف */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Filters</h2>
            <button onClick={() => setShowMobileFilters(false)}>
              <X size={22} />
            </button>
          </div>
          <Filtering
            AppliedFilters={AppliedFilters}
            setAppliedFilters={setAppliedFilters}
          />
        </div>
      )}
    </div>
  );
}
