"use client";

import store from "@/store";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { fetchCountries } from "@/store/countrySlice";

function Layout({ children }) {
  useEffect(() => {
    console.log("frtching data again=========");
    store.dispatch(fetchCountries());
    console.log("data fetvhed=============");
  }, []);
  return (
    <main>
      <Provider store={store}>{children}</Provider>
    </main>
  );
}

export default Layout;
