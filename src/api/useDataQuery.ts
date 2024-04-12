import { useFetchPage } from "./useFetchPage";
import { LangType } from "../components/navbar/LangSwitcher/LangSwitcher";

import { HomePageProps } from "../components/pages/HomePage";
import { IColorTheme, IFooter, INavBar, ISettings } from "../data";

const { generateQueries } = require("./generateSanityQueries");

// Custom hook for handling form state
export const useDataQuery = () => {
  // Load JSON data from files using require

  const {
    navbarQuery,
    footerQuery,
    homeQuery,
    settingsQuery,
  } = generateQueries();

  const navbarData: INavBar = useFetchPage(navbarQuery, "navbar")!;
  const footerData: IFooter = useFetchPage(footerQuery, "footer")!;
  const homePageData: HomePageProps = useFetchPage(homeQuery, "homePage")!;
  const settingsData: ISettings = useFetchPage(settingsQuery, "settings")!;

  // const settingsData: ISettings = useFetchPage(settingsQuery)!;
  // const navbarData: INavBar = useFetchPage(navbarQuery)!;
  // const footerData: IFooter = useFetchPage(footerQuery)!;
  // const homePageData: HomePageProps = useFetchPage(homeQuery)!;

  return {
    settingsData,
    navbarData,
    footerData,
    homePageData,
  };
};
