import React, { useEffect, useState } from "react";
import { useProducts } from "@/app/_context/ProductsContext";
import { Range, getTrackBackground } from "react-range";

function Filtering({ AppliedFilters, setAppliedFilters }) {
  const { categories, colors, sizes } = useProducts();

  const STEP = 10;
  const MIN = 0;
  const MAX = 10000;
  // تقسيم المقاسات لأرقام وحروف
  const numberSizes = sizes.filter((s) => !isNaN(Number(s)));
  const letterSizes = sizes.filter((s) => isNaN(Number(s)));
  // دالة عامة للتبديل بين تفعيل/إلغاء فلتر
  const handleToggleFilter = (key, value) => {
    const currentValues = AppliedFilters[key] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    setAppliedFilters({ ...AppliedFilters, [key]: newValues });
  };
  const handlePriceChange = (vals) => {
    setAppliedFilters({ ...AppliedFilters, price: vals });
  };

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
                checked={AppliedFilters.categories?.includes(category)}
                onChange={() => handleToggleFilter("categories", category)}
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
        <div className="grid grid-cols-5 md:grid-cols-4 gap-3 max-h-[100px] pt-4 overflow-y-auto px-1 ">
          {colors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className={`w-6 h-6 rounded-full ring-2 cursor-pointer ${
                AppliedFilters.colors.includes(color)
                  ? "ring-neutral-900 ring-offset-2"
                  : "ring-transparent"
              }`}
              onClick={() => handleToggleFilter("colors", color)}
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
                  className={`px-3 py-1 rounded border text-sm cursor-pointer${
                    AppliedFilters?.sizes?.includes(size)
                      ? "border-neutral-900"
                      : "border-neutral-300"
                  }`}
                  onClick={() => handleToggleFilter("sizes", size)}
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
                  className={`px-3 py-1 rounded border text-sm  cursor-pointer${
                    AppliedFilters.sizes.includes(size)
                      ? "border-neutral-900"
                      : "border-neutral-300"
                  }`}
                  onClick={() => handleToggleFilter("sizes", size)}
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
          values={AppliedFilters.price || [100, 890]}
          onChange={handlePriceChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className=" mx-auto h-2 w-[80%] md:w-full rounded-full"
              style={{
                background: getTrackBackground({
                  values: AppliedFilters.price || [100, 890],
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
                  ${AppliedFilters.price[index].toFixed(2)}
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
