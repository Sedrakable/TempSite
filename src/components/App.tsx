import React, { useEffect, useRef, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import "../css/Main.css";
import "../css/ScrollBar.scss";

import { HomePage } from "./pages/HomePage";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import { useDataQuery } from "../api/useDataQuery";
import { ScrollToTop } from "../helpers/ScrollToTop";

const App = () => {
  const ref = useRef<any>(null);

  const { footerData, navbarData, homePageData, settingsData } = useDataQuery();

  useEffect(() => {
    // Set CSS variables on page load
    if (settingsData) {
      document.documentElement.style.setProperty(
        "--primary",
        settingsData.colors.primary.hex!
      );
      document.documentElement.style.setProperty(
        "--black",
        settingsData.colors.dark.hex
      );
      document.documentElement.style.setProperty(
        "--white",
        settingsData.colors.light.hex
      );
      document.documentElement.style.setProperty(
        "--button-border-radius",
        `${settingsData.buttonBorderRadius}px`
      );
    }
  }, [settingsData]);

  return (
    navbarData && (
      <div className={styles.app} ref={ref}>
        <Navbar {...navbarData} />

        <ScrollToTop />
        <div className={styles.page}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="*" element={<HomePage {...homePageData} />} />
            </Routes>
          </Suspense>
        </div>

        {footerData && (
          <Footer
            legals={footerData?.legals}
            trademark={footerData?.trademark}
            links={navbarData?.links}
            logo={navbarData?.logo}
            lang="en"
            socials={{ links: footerData?.socials?.links }}
          />
        )}
      </div>
    )
  );
};

export default App;
