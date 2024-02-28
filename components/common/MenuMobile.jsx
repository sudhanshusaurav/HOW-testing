"use client";

import CrossIcon from "@/public/assets/icons/CrossIcon";
import { blockPageScroll, unBlockPageScroll } from "@/utils/common";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";

function MenuMobile({ theme }) {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    open ? unBlockPageScroll() : blockPageScroll();
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div onClick={toggleMenu} className="flex flex-col items-end gap-1">
          <div
            className={`h-[2px] w-7 ${
              theme === "dark" ? "bg-white" : "bg-primary"
            }`}
          ></div>
          <div
            className={`h-[2px] w-5 bg-primary ${
              theme === "dark" ? "bg-white" : "bg-primary"
            }`}
          ></div>
        </div>
      </div>
      <div
        style={
          open
            ? { clipPath: "circle(141.2% at 100% 0)" }
            : { clipPath: "circle(0.4% at 100% 0)" }
        }
        className={`fixed left-0 top-0 z-10 flex h-full w-full flex-col gap-5 bg-gray-100 p-5 shadow-lg transition-all duration-300 ease-out `}
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={toggleMenu} className="text-p-lg text-primary">
            <CrossIcon />
          </div>
        </div>

        <div className="flex w-full items-center gap-4 rounded-[1rem] bg-white p-4 shadow-sm">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border text-h3 text-gray-400">
            <FaUserAlt />
          </div>
          <div>
            <h6 className="text-p-lg font-medium">Hello Guest</h6>
            <Link href={`/login`} className="text-primary">
              Login / Sign Up
            </Link>
          </div>
        </div>

        <nav className="flex w-full flex-col gap-4 rounded-[1rem] bg-white p-4 text-p-md shadow-sm">
          <p className="text-p-lg font-medium"> Menu</p>
          <Link href="/" className="pl-2 font-medium text-gray-500">
            Home
          </Link>
          {/* <Link
            href="/customize-trip"
            className="pl-2 font-medium text-gray-500"
          >
            Customize Your Trip
          </Link> */}
          <Link
            href="/domestic-packages"
            className="pl-2 font-medium text-gray-500"
          >
            Domestic
          </Link>
          <Link
            href="/international-packages"
            className="pl-2 font-medium text-gray-500"
          >
            International
          </Link>
          <Link href="/about" className="pl-2 font-medium text-gray-500">
            About Us
          </Link>
          <Link href="/contact" className="pl-2 font-medium text-gray-500">
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default MenuMobile;
