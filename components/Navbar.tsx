"use client";

import useCart from "@/lib/hooks/useCart";

import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import LeftBar from "./LeftBar";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-2">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={130} height={100} />
        </Link>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`/search/${query}`);
          }}
          className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg"
        >
          <input
            className="outline-none max-sm:max-w-[120px]"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button disabled={query === ""} type="submit">
            <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
          </button>
        </form>

        <div className="relative flex gap-4 items-center">
          <div className="flex gap-4 text-base-bold max-lg:hidden">
            <Link
              href="/"
              className={`hover:text-red-1 ${pathname === "/" && "text-red-1"}`}
            >
              Home
            </Link>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className={`hover:text-red-1 ${
                pathname === "/wishlist" && "text-red-1"
              }`}
            >
              Wishlist
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className={`hover:text-red-1 ${
                pathname === "/orders" && "text-red-1"
              }`}
            >
              Orders
            </Link>
          </div>
          <Link
            href="/cart"
            className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
          >
            <ShoppingCart />
            <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
          </Link>
          <Menu
            className="cursor-pointer lg:hidden"
            onClick={() => setDropdownMenu(!dropdownMenu)}
          />
          {dropdownMenu && (
            <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
              <Link href="/" className="hover:text-red-1">
                Home
              </Link>
              <Link
                href={user ? "/wishlist" : "/sign-in"}
                className="hover:text-red-1"
              >
                Wishlist
              </Link>
              <Link
                href={user ? "/orders" : "/sign-in"}
                className="hover:text-red-1"
              >
                Orders
              </Link>
              <Link
                href="/cart"
                className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
              >
                <ShoppingCart />
                <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
              </Link>
            </div>
          )}
          {user ? (
            <UserButton afterSignOutUrl="/sign-in" />
          ) : (
            <Link href="/sign-in">
              <CircleUserRound />
            </Link>
          )}
        </div>
      </div>
      <div className="py-1 px-10 flex gap-2 justify-between items-center bg-black text-white max-sm:px-2">
        <div className="flex gap-4 items-center">
          <LeftBar />
          <Link className="font-medium max-sm:hidden" href={"#"}>
            Today's deals
          </Link>
          <Link className="font-medium max-sm:hidden" href={"#"}>
            Customer Service
          </Link>
          <Link className="font-medium max-sm:hidden" href={"#"}>
            Registery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
