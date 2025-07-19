"use client";
import React, { useState, useEffect, useMemo } from "react";
import ProductCard from "@/app/_components/ProductCard";
import { useProducts } from "@/app/_context/ProductsContext";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ITEMS_PER_PAGE = 8;

const FilterBadge = ({ label, onRemove }) => (
  <div className="px-4 py-3 rounded-2xl border border-neutral-300 text-neutral-900 text-sm flex items-center gap-1">
    <span className="capitalize text-sm">{label}</span>
    <button
      onClick={onRemove}
      className="text-neutral-400 hover:text-red-700 cursor-pointer"
    >
      <X size={23} />
    </button>
  </div>
);

function ProductsView({ AppliedFilters = [], setAppliedFilters, category }) {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!products?.length) return;

    const decodedCategory = decodeURIComponent(category || "");
    let filtered = [];

    if (category) {
      filtered = products.filter(
        (product) => product.category === decodedCategory
      );
    } else {
      const {
        colors = [],
        sizes = [],
        categories = [],
        price = [],
      } = AppliedFilters;

      filtered = products.filter((product) => {
        const matchColor =
          !colors.length ||
          product.colors?.some(({ color }) => colors.includes(color));

        const matchSize =
          !sizes.length || product.sizes?.some((size) => sizes.includes(size));

        const matchCategory =
          !categories.length || categories.includes(product.category);

        const matchPrice =
          !price.length ||
          (price[0] <= product.price && product.price <= price[1]);

        return matchColor && matchSize && matchCategory && matchPrice;
      });
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [AppliedFilters, products, category]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [filteredProducts, currentPage]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const removeFilter = (key, item) => {
    setAppliedFilters({
      ...AppliedFilters,
      [key]: AppliedFilters[key].filter((f) => f !== item),
    });
  };

  return (
    <div className="w-full px-4 md:px-6 flex flex-col min-h-full max-h-full">
      <div className="flex flex-col gap-3 mb-3">
        <h1 className="text-xl md:text-2xl font-bold text-neutral-900">
          {category ? decodeURIComponent(category) : "Applied Filters:"}
        </h1>

        {!category && (
          <div className="flex flex-wrap gap-5">
            {Object.entries(AppliedFilters)
              .filter(([key]) => key !== "price")
              .flatMap(([key, value]) =>
                Array.isArray(value)
                  ? value.map((item, index) => (
                      <FilterBadge
                        key={`${key}-${item}-${index}`}
                        label={`${key} : ${item}`}
                        onRemove={() => removeFilter(key, item)}
                      />
                    ))
                  : []
              )}
          </div>
        )}
      </div>

      <h2 className="text-xs md:text-sm text-neutral-400 tracking-wider mb-4">
        Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} -{" "}
        {(currentPage - 1) * ITEMS_PER_PAGE + paginatedProducts.length} of{" "}
        {filteredProducts.length} results.
      </h2>

      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={`filters-${currentPage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="w-full border-t border-neutral-200 pt-6">
          <div className="max-w-[90%] sm:max-w-[80%] mx-auto flex flex-wrap justify-center items-center gap-2 text-sm">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="cursor-pointer px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-40"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page, index, arr) => {
                const isCurrent = page === currentPage;
                const isNear =
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1);

                if (!isNear) {
                  if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <span
                        key={`dots-${page}`}
                        className="px-3 py-1 rounded border border-gray-300 bg-gray-100"
                      >
                        ...
                      </span>
                    );
                  }
                  return null;
                }

                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-2 py-1 rounded border cursor-pointer ${
                      isCurrent
                        ? "bg-neutral-900 text-white"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                );
              }
            )}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="cursor-pointer px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsView;
