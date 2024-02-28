"use client";

import { unBlockPageScroll } from "@/utils/common";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function ClientComponent() {
  const pathname = usePathname();

  useEffect(() => {
    unBlockPageScroll();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the threshold as needed
      const scrollThreshold = 50;

      // Toggle class based on scroll position
      if (scrollPosition > scrollThreshold) {
        document
          .getElementById("navbar-desktop")
          .classList.add("navbar-desktop-active");
        document.getElementById("header").classList.add("header-active");
      } else {
        document
          .getElementById("navbar-desktop")
          .classList.remove("navbar-desktop-active");
        document.getElementById("header").classList.remove("header-active");
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return null;
}

export default ClientComponent;
