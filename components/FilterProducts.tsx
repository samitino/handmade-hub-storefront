import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterProducts = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery) {
      router.push(`/sub?q=${searchQuery}`);
    }
  };

  return (
    <div className="flex gap-16 justify-between">
      <div className="flex gap-2">
        <Input
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="name, brand, category..."
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div>
        <Select onValueChange={(value) => router.push(`/sub?q=${value}`)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by brands" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectLabel>Brands</SelectLabel>
              <SelectItem value="Apple">Apple</SelectItem>
              <SelectItem value="Samsung">Samsung</SelectItem>
              <SelectItem value="Hisense">Hisense</SelectItem>
              <SelectItem value="LG">LG</SelectItem>
              <SelectItem value="Sony">Sony</SelectItem>
              <SelectItem value="Oraimo">Oraimo</SelectItem>
              <SelectItem value="itel">itel</SelectItem>
              <SelectItem value="Dell">Dell</SelectItem>
              <SelectItem value="Lenovo">Lenovo</SelectItem>
              <SelectItem value="Dangote">Dangote</SelectItem>
              <SelectItem value="Nivea">Nivea</SelectItem>
              <SelectItem value="Nike">Nike</SelectItem>
              <SelectItem value="iPhone">iPhone</SelectItem>
              <SelectItem value="Puma">Puma</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterProducts;
