// app/search/page.tsx أو app/search/page.jsx (حسب استخدامك)
"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Filtering from "./_components/Filtering";
import ProductsView from "./_components/ProductsView";
import { X, SlidersHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function SearchPage() {
  const [AppliedFilters, setAppliedFilters] = useState({
    categories: [],
    colors: [],
    sizes: [],
    price: [0, 10000],
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    const initialFilters = {
      categories: searchParams.get("categories")?.split(",") || [],
      colors: searchParams.get("colors")?.split(",") || [],
      sizes: searchParams.get("sizes")?.split(",") || [],
      price: searchParams.get("price")
        ? searchParams.get("price").split(",").map(Number)
        : [0, 10000],
    };
    setAppliedFilters(initialFilters);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();

    if (AppliedFilters.categories.length > 0) {
      params.set("categories", AppliedFilters.categories.join(","));
    }
    if (AppliedFilters.colors.length > 0) {
      params.set("colors", AppliedFilters.colors.join(","));
    }
    if (AppliedFilters.sizes.length > 0) {
      params.set("sizes", AppliedFilters.sizes.join(","));
    }
    if (AppliedFilters.price.length === 2) {
      params.set("price", AppliedFilters.price.join(","));
    }

    router.push(`/Search?${params.toString()}`);
  }, [AppliedFilters]);

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <div className="w-[95%] md:w-[90%] mx-auto my-10">
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-5">
        <button
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black rounded-md"
          onClick={() => setShowMobileFilters(true)}
        >
          <SlidersHorizontal size={18} />
          Filter
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="hidden md:block md:w-[250px] shrink-0">
          <Filtering
            AppliedFilters={AppliedFilters}
            setAppliedFilters={setAppliedFilters}
          />
        </div>

        <div className="flex-1 w-full min-w-0">
          <ProductsView
            AppliedFilters={AppliedFilters}
            setAppliedFilters={setAppliedFilters}
          />
        </div>
      </div>

      {/* Mobile Filters */}
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
