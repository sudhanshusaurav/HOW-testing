"use client";

import "react-perfect-scrollbar/dist/css/styles.css";
import "@/styles/tailwind.css";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function RootLayout({ children, modal }) {
  return (
    <>
      <DefaultLayout>{children}</DefaultLayout>
      {modal}
    </>
  );
}
