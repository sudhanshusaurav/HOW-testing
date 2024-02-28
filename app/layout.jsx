import "react-perfect-scrollbar/dist/css/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/tailwind.css";
import "react-phone-input-2/lib/style.css";

import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="body" className="relative font-roboto text-gray-600">
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
