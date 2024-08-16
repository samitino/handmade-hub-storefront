"use client";

import CategoriesMenu from "@/components/CategoriesMenu";
import FilterProducts from "@/components/FilterProducts";
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/sub/filter?q=${searchQuery}`,
        {
          cache: "no-cache",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [searchQuery]);

  if (loading) return <Loader />;

  return (
    <div className="mt-10 min-h-screen px-8 md:px-20">
      <div className="flex gap-12 items-start flex-wrap">
        <div className="w-60">
          <CategoriesMenu />
        </div>
        <div>
          <div className="mb-6">
            <FilterProducts />
          </div>
          <div className="flex flex-wrap gap-3">
            {products?.map((product: ProductType) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
