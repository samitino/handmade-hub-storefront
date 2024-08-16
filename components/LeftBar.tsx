"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const LeftBar = () => {
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
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="items-center gap-2">
          <MenuIcon /> All
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-white">
        <SheetHeader>
          <SheetTitle>Categories</SheetTitle>
          <SheetDescription>
            Select from the list of sub-categories
          </SheetDescription>
        </SheetHeader>
        <Accordion type="single" collapsible className="w-full mt-5">
          {categories.length === 0 && <p>No available categories</p>}

          {categories.map((category: any) => (
            <AccordionItem key={category._id} value={category._id}>
              <AccordionTrigger className="font-medium text-lg hover:no-underline">
                {category?.name}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 ml-2">
                {category.subcategories?.map((subcategory: any) => (
                  <SheetClose key={subcategory._id} asChild>
                    <Link
                      href={`/sub?q=${subcategory._id}`}
                      className="hover:underline"
                    >
                      {subcategory.name}
                    </Link>
                  </SheetClose>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <SheetFooter className="mt-20">
          <div className="flex flex-col gap-4">
            <Link className="font-medium sm:hidden" href={"#"}>
              Today's deals
            </Link>
            <Link className="font-medium sm:hidden" href={"#"}>
              Customer Service
            </Link>
            <Link className="font-medium sm:hidden" href={"#"}>
              Registery
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default LeftBar;
