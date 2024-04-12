import React from "react";
import styles from "./Services.module.scss";
import FlexDiv from "../../../reuse/FlexDiv";
import { Heading } from "../../../reuse/Heading";
import { Block } from "../../containers/Block";
import { IService, IServices } from "../../../../data.d";
import { useAtom } from "jotai";
import { langData } from "../../../navbar/LangSwitcher/LangSwitcher";
import { getTranslations } from "../../../../helpers/langUtils";
import { SanityImage } from "../../../reuse/SanityImage/SanityImage";
import { Paragraph } from "../../../reuse/Paragraph";

const Service: React.FC<IService> = ({ customImage, description, title }) => {
  return (
    <FlexDiv
      flex={{ direction: "column", x: "flex-start", y: "flex-start" }}
      width100
      gapArray={[1]}
      className={styles.container}
    >
      <div className={styles.imgWrapper}>
        <SanityImage {...customImage} />
      </div>

      <Heading as="h3" level="4" font="Seto" color="white">
        {title}
      </Heading>
      <Paragraph level="small" color="white" weight="weak">
        {description}
      </Paragraph>
    </FlexDiv>
  );
};

export const Services: React.FC<IServices> = ({ services }) => {
  const [lang] = useAtom(langData);
  const translations = getTranslations(lang);

  return (
    <Block title={translations.blockTitles.services} variant="fabric">
      <FlexDiv
        gapArray={[6]}
        flex={{ y: "flex-start" }}
        width100
        className={styles.services}
      >
        {services?.map((service: IService, key) => {
          return <Service {...service} key={key} />;
        })}
      </FlexDiv>
    </Block>
  );
};
