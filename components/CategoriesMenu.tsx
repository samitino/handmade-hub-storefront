"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const CategoriesMenu = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Accordion type="single" collapsible className="w-full">
      {categories.length === 0 && <p>No available categories</p>}

      {categories.map((category: any) => (
        <AccordionItem key={category._id} value={category._id}>
          <AccordionTrigger className="font-medium text-lg hover:no-underline">
            {category?.name}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 ml-2">
            {category.subcategories?.map((subcategory: any) => (
              <Link
                key={subcategory._id}
                href={`/sub?q=${subcategory._id}`}
                className="hover:underline"
              >
                {subcategory.name}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CategoriesMenu;
