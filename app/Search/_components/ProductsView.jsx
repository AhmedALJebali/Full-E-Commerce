import ProductCard from "@/app/_components/ProductCard";
import React, { useState, useEffect } from "react";
import { useProducts } from "@/app/_context/Products";
import { motion, AnimatePresence } from "framer-motion";

function ProductsView({ AppliedFilters, setAppliedFilters }) {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (!products?.length) return;

    const filtered = products.filter((product) => {
      const {
        colors = [],
        sizes = [],
        categories = [],
        price = [],
      } = AppliedFilters;

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

    setFilteredProducts(filtered);
  }, [AppliedFilters, products]);

  return (
    <div className="w-full px-4 md:px-6">
      <div className="flex flex-col gap-3 mb-3">
        <h1 className="text-xl md:text-2xl font-bold text-neutral-900">
          Applied Filters:
        </h1>
      </div>

      <h2 className="text-xs md:text-sm text-neutral-400 tracking-wider mb-4">
        Showing 1–9 of {filteredProducts.length} results.
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={JSON.stringify(AppliedFilters)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ProductsView;
