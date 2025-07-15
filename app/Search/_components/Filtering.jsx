import React, { useEffect, useState } from "react";
import { useProducts } from "@/app/_context/Products";
import { Range, getTrackBackground } from "react-range";

function Filtering({ AppliedFilters, setAppliedFilters }) {
  const { categories, colors, sizes } = useProducts();

  const STEP = 10;
  const MIN = 0;
  const MAX = 10000;

  const [selectedCategories, setSelectedCategories] = useState(
    AppliedFilters?.categories || []
  );
  const [selectedColor, setSelectedColor] = useState(
    AppliedFilters?.colors || []
  );
  const [selectedSize, setSelectedSize] = useState(AppliedFilters?.sizes || []);
  const [prices, setPrices] = useState(AppliedFilters?.price || [100, 890]);

  const numberSizes = sizes.filter((s) => !isNaN(Number(s)));
  const letterSizes = sizes.filter((s) => isNaN(Number(s)));

  const handleToggle = (stateSetter, values, value) => {
    stateSetter(
      values.includes(value)
        ? values.filter((v) => v !== value)
        : [...values, value]
    );
  };

  useEffect(() => {
    setAppliedFilters({
      categories: selectedCategories,
      colors: selectedColor,
      sizes: selectedSize,
      price: prices,
    });
  }, [selectedCategories, selectedColor, selectedSize, prices]);

  return (
    <div className="w-full md:w-[250px] border border-neutral-300 p-4 rounded-md space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-3">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <label
              key={index}
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() =>
                  handleToggle(
                    setSelectedCategories,
                    selectedCategories,
                    category
                  )
                }
                className="accent-neutral-900"
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-3">Colors</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 max-h-[100px] overflow-y-auto pr-1">
          {colors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className={`w-6 h-6 rounded-full ring-2 cursor-pointer ${
                selectedColor.includes(color)
                  ? "ring-neutral-900 ring-offset-2"
                  : "ring-transparent"
              }`}
              onClick={() =>
                handleToggle(setSelectedColor, selectedColor, color)
              }
            />
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-3">Sizes</h3>

        {letterSizes.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-medium text-neutral-500 mb-1">Letters</p>
            <div className="flex flex-wrap gap-2 max-h-[120px] overflow-y-auto pr-1">
              {letterSizes.map((size, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 rounded border text-sm ${
                    selectedSize.includes(size)
                      ? "border-neutral-900"
                      : "border-neutral-300"
                  }`}
                  onClick={() =>
                    handleToggle(setSelectedSize, selectedSize, size)
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {numberSizes.length > 0 && (
          <div>
            <p className="text-xs font-medium text-neutral-500 mb-1">Numbers</p>
            <div className="flex flex-wrap gap-2 max-h-[120px] overflow-y-auto pr-1">
              {numberSizes.map((size, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 rounded border text-sm ${
                    selectedSize.includes(size)
                      ? "border-neutral-900"
                      : "border-neutral-300"
                  }`}
                  onClick={() =>
                    handleToggle(setSelectedSize, selectedSize, size)
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-4">Price</h3>
        <Range
          step={STEP}
          min={MIN}
          max={MAX}
          values={prices}
          onChange={(vals) => setPrices(vals)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className=" mx-auto h-2 w-[80%] md:w-full rounded-full"
              style={{
                background: getTrackBackground({
                  values: prices,
                  colors: ["#d4d4d8", "#171717", "#d4d4d8"],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => {
            const { key, ...restProps } = props;
            return (
              <div
                key={key}
                {...restProps}
                className="relative w-4 h-4 bg-neutral-900 rounded-full border border-black"
              >
                <div className="absolute top-5 left-1/2 -translate-x-1/2 text-xs bg-neutral-900 text-white px-2 py-1 rounded">
                  ${prices[index].toFixed(2)}
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}

export default Filtering;
