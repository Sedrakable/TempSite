import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import TabButton from "./TabButton";
import { useWindowResize } from "../../helpers/useWindowResize";
import { IconButton } from "../reuse/IconButton";
import cn from "classnames";
import FlexDiv from "../reuse/FlexDiv";
import { ReactComponent as Logo } from "../../assets/illu/LogoSmall.svg";
import { Button } from "../reuse/Button";
import { ICta, INavBar, INavLink } from "../../data.d";
import { LangSwitcher } from "./LangSwitcher/LangSwitcher";
import { SanityImage } from "../reuse/SanityImage/SanityImage";

export const isCta = (link: INavLink | ICta): link is ICta => {
  return (link as ICta).link !== undefined;
};

export const Navbar: React.FC<INavBar> = ({ links, logo, lang }) => {
  const { isMobile, isMobileOrTablet } = useWindowResize();

  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const offset = navRef?.current?.clientHeight!;
      const isScrolled = window.scrollY > offset;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navRef]);

  return (
    <>
      <div
        className={cn(styles.navbarWrapper, { [styles.scrolled]: scrolled })}
        ref={navRef}
      >
        <FlexDiv
          className={styles.navbar}
          flex={{ x: "space-between", y: "center" }}
          height100
        >
          <div className={styles.logo}>
            <SanityImage {...logo} res={30} />
          </div>

          <FlexDiv
            flex={{ x: "space-between", y: "center" }}
            gapArray={[3, 5, 6, 7]}
          >
            {!isMobile && (
              <FlexDiv gapArray={[5, 4, 5, 6]}>
                {links?.map((link: string, key) => {
                  if (key === links.length - 1) {
                    return (
                      <Button variant="primary" small={isMobile} key={key}>
                        {link}
                      </Button>
                    );
                  }
                  return (
                    !isMobileOrTablet && (
                      <TabButton key={key} className={styles.tab}>
                        {link}
                      </TabButton>
                    )
                  );
                })}
              </FlexDiv>
            )}
            {!isMobile && <LangSwitcher />}
            {isMobileOrTablet && (
              <IconButton
                iconProps={{ icon: "burger", size: "regular" }}
                background="white"
              />
            )}
          </FlexDiv>
        </FlexDiv>
      </div>
    </>
  );
};
