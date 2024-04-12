import React from "react";
import styles from "./Hero.module.scss";
import cn from "classnames";
import { Paragraph } from "../Paragraph";
import { IHero } from "../../../data.d";
import FlexDiv from "../FlexDiv";

import { Button } from "../Button";
import { Quote } from "../Quote";
import { SanityImage } from "../SanityImage/SanityImage";
import { Heading } from "../Heading";

export type VersionType = 1 | 2;

export const Hero: React.FC<IHero> = ({
  customImage,
  desc,
  title,
  ctas,
  subTitle,
  quote,
}) => {
  return (
    <div className={cn(styles.hero)}>
      <FlexDiv className={styles.right}>
        <SanityImage
          image={customImage?.image}
          alt={customImage?.alt}
          res={50}
        />
        <FlexDiv
          className={styles.container}
          flex={{ direction: "column", x: "flex-start", y: "flex-start" }}
          padding={{ vertical: [6, 8, 9, 11], horizontal: [5, 7, 8, 10] }}
          gapArray={[3, 4, 4, 5]}
        >
          <FlexDiv
            flex={{ direction: "column", x: "flex-start" }}
            gapArray={[1]}
            customStyle={{ zIndex: 1 }}
          >
            {subTitle && (
              <Heading
                font="Cursive"
                as="h5"
                level="5"
                color="primary"
                paddingBottomArray={[2]}
              >
                {subTitle}
              </Heading>
            )}
            {title && (
              <Heading font="Seto" as="h1" level="1">
                {title}
              </Heading>
            )}
            <Paragraph
              level="small"
              weight="weak"
              className={styles.description}
              paddingBottomArray={[3]}
            >
              {desc}
            </Paragraph>
          </FlexDiv>
          {ctas && (
            <FlexDiv gapArray={[4]} flex={{ x: "flex-start" }} width100 wrap>
              <Button variant="primary" id="primary">
                {ctas?.cta1.text}
              </Button>
              {ctas?.cta2 && (
                <Button variant="secondary" id="secondary">
                  {ctas?.cta2.text}
                </Button>
              )}
            </FlexDiv>
          )}
        </FlexDiv>
      </FlexDiv>

      <div className={styles.quote}>
        <Quote {...quote} />
      </div>
    </div>
  );
};
