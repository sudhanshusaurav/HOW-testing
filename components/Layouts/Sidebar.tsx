import PerfectScrollbar from "react-perfect-scrollbar";
// import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { toggleSidebar } from "../../store/themeConfigSlice";
import AnimateHeight from "react-animate-height";
import { IRootState } from "../../store";
import { useState, useEffect } from "react";
import IconCaretsDown from "@/components/Icon/IconCaretsDown";
import IconMenuDashboard from "@/components/Icon/Menu/IconMenuDashboard";
import IconCaretDown from "@/components/Icon/IconCaretDown";
import IconMinus from "@/components/Icon/IconMinus";
import IconMenuChat from "@/components/Icon/Menu/IconMenuChat";
import IconMenuMailbox from "@/components/Icon/Menu/IconMenuMailbox";
import IconMenuTodo from "@/components/Icon/Menu/IconMenuTodo";
import IconMenuNotes from "@/components/Icon/Menu/IconMenuNotes";
import IconMenuScrumboard from "@/components/Icon/Menu/IconMenuScrumboard";
import IconMenuContacts from "@/components/Icon/Menu/IconMenuContacts";
import IconMenuInvoice from "@/components/Icon/Menu/IconMenuInvoice";
import IconMenuCalendar from "@/components/Icon/Menu/IconMenuCalendar";
import IconMenuComponents from "@/components/Icon/Menu/IconMenuComponents";
import IconMenuElements from "@/components/Icon/Menu/IconMenuElements";
import IconMenuCharts from "@/components/Icon/Menu/IconMenuCharts";
import IconMenuWidgets from "@/components/Icon/Menu/IconMenuWidgets";
import IconMenuFontIcons from "@/components/Icon/Menu/IconMenuFontIcons";
import IconMenuDragAndDrop from "@/components/Icon/Menu/IconMenuDragAndDrop";
import IconMenuTables from "@/components/Icon/Menu/IconMenuTables";
import IconMenuDatatables from "@/components/Icon/Menu/IconMenuDatatables";
import IconMenuForms from "@/components/Icon/Menu/IconMenuForms";
import IconMenuUsers from "@/components/Icon/Menu/IconMenuUsers";
import IconMenuPages from "@/components/Icon/Menu/IconMenuPages";
import IconMenuAuthentication from "@/components/Icon/Menu/IconMenuAuthentication";
import IconMenuDocumentation from "@/components/Icon/Menu/IconMenuDocumentation";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const [currentMenu, setCurrentMenu] = useState<string>("");
  const [errorSubMenu, setErrorSubMenu] = useState(false);
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const semidark = useSelector(
    (state: IRootState) => state.themeConfig.semidark
  );
  const toggleMenu = (value: string) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  useEffect(() => {
    const selector = document.querySelector(
      '.sidebar ul a[href="' + window.location.pathname + '"]'
    );
    if (selector) {
      selector.classList.add("active");
      const ul: any = selector.closest("ul.sub-menu");
      if (ul) {
        let ele: any =
          ul.closest("li.menu").querySelectorAll(".nav-link") || [];
        if (ele.length) {
          ele = ele[0];
          setTimeout(() => {
            ele.click();
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    setActiveRoute();
    if (window.innerWidth < 1024 && themeConfig.sidebar) {
      dispatch(toggleSidebar());
    }
  }, [pathname]);

  const setActiveRoute = () => {
    let allLinks = document.querySelectorAll(".sidebar ul a.active");
    for (let i = 0; i < allLinks.length; i++) {
      const element = allLinks[i];
      element?.classList.remove("active");
    }
    const selector = document.querySelector(
      '.sidebar ul a[href="' + window.location.pathname + '"]'
    );
    selector?.classList.add("active");
  };

  const dispatch = useDispatch();
  // const { t } = useTranslation();

  return (
    <div className={semidark ? "dark" : ""}>
      <nav
        className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${
          semidark ? "text-white-dark" : ""
        }`}
      >
        <div className="h-full bg-white dark:bg-black">
          <div className="flex items-center justify-between px-4 py-3">
            <Link
              href="/"
              className="main-logo flex shrink-0 items-center"
            ></Link>

            <button
              type="button"
              className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
              onClick={() => dispatch(toggleSidebar())}
            >
              <IconCaretsDown className="m-auto rotate-90" />
            </button>
          </div>
          <PerfectScrollbar className="relative h-[calc(100vh-80px)]">
            <ul className="relative space-y-0.5 p-4 py-0 font-semibold">
              <li className="menu nav-item">
                <button
                  type="button"
                  className={`${
                    currentMenu === "dashboard" ? "active" : ""
                  } nav-link group w-full`}
                  onClick={() => toggleMenu("dashboard")}
                >
                  <div className="flex items-center">
                    <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                    <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                      {"dashboard"}
                    </span>
                  </div>

                  <div
                    className={
                      currentMenu !== "dashboard"
                        ? "-rotate-90 rtl:rotate-90"
                        : ""
                    }
                  >
                    <IconCaretDown />
                  </div>
                </button>

                <AnimateHeight
                  duration={300}
                  height={currentMenu === "dashboard" ? "auto" : 0}
                >
                  <ul className="sub-menu text-gray-500">
                    <li>
                      <Link href="/">{"sales"}</Link>
                    </li>
                    <li>
                      <Link href="/analytics">{"analytics"}</Link>
                    </li>
                    <li>
                      <Link href="/finance">{"finance"}</Link>
                    </li>
                    <li>
                      <Link href="/crypto">{"crypto"}</Link>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>

              <li className="menu nav-item">
                <button
                  type="button"
                  className={`${
                    currentMenu === "crm" ? "active" : ""
                  } nav-link group w-full`}
                  onClick={() => toggleMenu("crm")}
                >
                  <div className="flex items-center">
                    <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                    <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                      {"CRM"}
                    </span>
                  </div>

                  <div
                    className={
                      currentMenu !== "crm" ? "-rotate-90 rtl:rotate-90" : ""
                    }
                  >
                    <IconCaretDown />
                  </div>
                </button>

                <AnimateHeight
                  duration={300}
                  height={currentMenu === "crm" ? "auto" : 0}
                >
                  <ul className="sub-menu text-gray-500">
                    <li>
                      <Link href="/admin/countries">{"Countries"}</Link>
                    </li>
                    <li>
                      <Link href="/admin/states">{"States"}</Link>
                    </li>
                    <li>
                      <Link href="/admin/destinations">{"Destinations"}</Link>
                    </li>
                    <li>
                      <Link href="/admin/stays">{"Stays"}</Link>
                    </li>
                    <li>
                      <Link href="/admin/activities">{"Activities"}</Link>
                    </li>
                    <li>
                      <Link href="/admin/categories">{"Categories"}</Link>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>

              <li className="menu nav-item">
                <button
                  type="button"
                  className={`${
                    currentMenu === "configure" ? "active" : ""
                  } nav-link group w-full`}
                  onClick={() => toggleMenu("configure")}
                >
                  <div className="flex items-center">
                    <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                    <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                      {"Configure"}
                    </span>
                  </div>

                  <div
                    className={
                      currentMenu !== "configure"
                        ? "-rotate-90 rtl:rotate-90"
                        : ""
                    }
                  >
                    <IconCaretDown />
                  </div>
                </button>

                <AnimateHeight
                  duration={300}
                  height={currentMenu === "configure" ? "auto" : 0}
                >
                  <ul className="sub-menu text-gray-500">
                    <li>
                      <Link href="/admin/configure/UI">{"Front UI"}</Link>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>

              <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase text-gray-500 dark:bg-dark dark:bg-opacity-[0.08]">
                <IconMinus className="hidden h-5 w-4 flex-none" />
                <span>{"Package Manager"}</span>
              </h2>

              <li className="nav-item">
                <ul>
                  <li className="nav-item">
                    <Link href="/admin/packages" className="group">
                      <div className="flex items-center">
                        <IconMenuChat className="shrink-0 group-hover:!text-primary" />
                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                          {"Packages"}
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/admin/customized-packages" className="group">
                      <div className="flex items-center">
                        <IconMenuChat className="shrink-0 group-hover:!text-primary" />
                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                          {"Customized Packages"}
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>

              <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase text-gray-500 dark:bg-dark dark:bg-opacity-[0.08]">
                <IconMinus className="hidden h-5 w-4 flex-none" />
                <span>{"Lead Manager"}</span>
              </h2>
              <li className="nav-item">
                <ul>
                  <li className="nav-item">
                    <Link href="/admin/leads" className="group">
                      <div className="flex items-center">
                        <IconMenuChat className="shrink-0 group-hover:!text-primary" />
                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                          {"Leads"}
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
