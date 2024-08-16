"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";
import { Card, CardContent } from "./ui/card";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <Link href={`/products/${product._id}`} className="">
      <Card className="w-[250px]">
        <CardContent className="flex flex-col gap-2">
          <Image
            src={product.media[0]}
            alt="product"
            width={250}
            height={300}
            className="h-[250px] rounded-lg object-cover"
          />
          <div>
            <p className="text-base-bold line-clamp-2">{product.title}</p>
            <p className="text-small-medium text-grey-2">
              {product.subcategory?.name}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-body-bold">${product.price}</p>
            <HeartFavorite
              product={product}
              updateSignedInUser={updateSignedInUser}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
