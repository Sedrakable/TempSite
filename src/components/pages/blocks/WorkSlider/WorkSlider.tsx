import React, { PropsWithChildren } from "react";
import styles from "./WorkSlider.module.scss";

import { Splider, SpliderProps } from "../../containers/Splider";
import FlexDiv from "../../../reuse/FlexDiv";
import { IWork, IWorkBlock } from "../../../../data.d";

export const WorkSlider: React.FC<PropsWithChildren<IWorkBlock>> = ({
  works,
}) => {
  const slides: SpliderProps[] = works!?.map(
    (work: IWork): SpliderProps => {
      return {
        customImage: work?.customImage,
        content: {
          title: work.title,
          desc: work.desc,
          primaryCta: work?.primaryLink?.text
            ? {
                text: work?.primaryLink?.text,
              }
            : undefined,
        },
      };
    }
  );
  return (
    <FlexDiv flex={{ direction: "column" }} width100 className={styles.block}>
      <Splider slides={slides} arrows />
    </FlexDiv>
  );
};
