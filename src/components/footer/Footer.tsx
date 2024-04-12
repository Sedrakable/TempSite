import React from "react";
import styles from "./Footer.module.scss";
import { Paragraph } from "../reuse/Paragraph";

import { Link } from "../reuse/Link";
import FlexDiv from "../reuse/FlexDiv";
import { useWindowResize } from "../../helpers/useWindowResize";
import { ICustomImage, IFooter, INavBar } from "../../data.d";
import { Socials } from "./Socials";
import { useAtom } from "jotai";
import { langData } from "../navbar/LangSwitcher/LangSwitcher";
import { SanityImage } from "../reuse/SanityImage/SanityImage";

const Line: React.FC = () => {
  return <div className={styles.line} />;
};
const Nav: React.FC<{ links: string[] }> = ({ links }) => {
  return (
    <FlexDiv
      className={styles.links}
      gapArray={[5, 5, 6, 7]}
      flex={{ x: "center" }}
    >
      {links?.map((link, key) => {
        return (
          <Paragraph
            level="regular"
            weight="regular"
            capitalise
            clickable
            key={key}
          >
            {link}
          </Paragraph>
        );
      })}
    </FlexDiv>
  );
};

const Logo: React.FC<{ trademark: string; logo: ICustomImage }> = ({
  trademark,
  logo,
}) => {
  return (
    <FlexDiv
      className={styles.logoWrapper}
      flex={{ direction: "column", y: "center" }}
      gapArray={[5]}
      padding={{ bottom: [0, 0, 2] }}
    >
      <div className={styles.logo}>
        <SanityImage {...logo} res={30} />
      </div>
      <Paragraph level="small" weight="weak" color="grey" textAlign="center">
        {trademark}
      </Paragraph>
    </FlexDiv>
  );
};

const Legal: React.FC<{ legals: { title: string; path: string }[] }> = ({
  legals,
}) => {
  const [lang] = useAtom(langData);
  return (
    <FlexDiv
      className={styles.legal}
      gapArray={[5]}
      wrap
      flex={{ x: "flex-start" }}
    >
      {legals?.map((cta, key) => {
        return (
          <Link path={`/${lang}${cta?.path!}`} key={key}>
            <Paragraph level="small" weight="weak" color="grey" clickable>
              {cta?.title}
            </Paragraph>
          </Link>
        );
      })}
    </FlexDiv>
  );
};

const DesktopFooter: React.FC<FooterProps> = ({
  links,
  legals,
  trademark,
  logo,
  socials,
}) => {
  return (
    <FlexDiv
      className={styles.container}
      flex={{ y: "stretch" }}
      padding={{ vertical: [7] }}
    >
      <Nav links={links} />
      <Line />
      <Logo trademark={trademark} logo={logo} />
      <Line />
      <FlexDiv
        flex={{ direction: "column", y: "space-between", x: "flex-start" }}
        customStyle={{ flex: 1, minHeight: "100%" }}
        padding={{ vertical: [4] }}
        gapArray={[4]}
      >
        <Legal legals={legals} />
        <Socials {...socials} />
      </FlexDiv>
    </FlexDiv>
  );
};

const TabletFooter: React.FC<FooterProps> = ({
  links,
  legals,
  logo,
  trademark,
  socials,
}) => {
  return (
    <FlexDiv
      className={styles.container}
      flex={{ y: "stretch" }}
      padding={{ top: [7], bottom: [7] }}
    >
      <Logo trademark={trademark} logo={logo} />
      <Line />
      <FlexDiv flex={{ direction: "column" }} gapArray={[4]}>
        <Nav links={links} />
        <FlexDiv flex={{ x: "center" }} gapArray={[4]} wrap width100>
          <Legal legals={legals} />
          <Socials {...socials} />
        </FlexDiv>
      </FlexDiv>
    </FlexDiv>
  );
};
const MobileFooter: React.FC<FooterProps> = ({
  links,
  legals,
  logo,
  trademark,
  socials,
}) => {
  return (
    <FlexDiv
      className={styles.container}
      flex={{ direction: "column" }}
      padding={{ top: [6], bottom: [7] }}
      gapArray={[6]}
    >
      <Socials {...socials} />
      <Nav links={links} />
      <Logo trademark={trademark} logo={logo} />
      <Legal legals={legals} />
    </FlexDiv>
  );
};

type FooterProps = IFooter & INavBar;
export const Footer: React.FC<FooterProps> = (props) => {
  const { isMobile, isTablet } = useWindowResize();

  return (
    <footer className={styles.footer}>
      {isMobile ? (
        <MobileFooter {...props} />
      ) : isTablet ? (
        <TabletFooter {...props} />
      ) : (
        <DesktopFooter {...props} />
      )}
    </footer>
  );
};
