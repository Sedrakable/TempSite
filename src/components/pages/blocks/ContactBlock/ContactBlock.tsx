import React, { FC } from "react";
import styles from "./ContactBlock.module.scss";
import { Form } from "../../contact page/Form";
import { Block } from "../../containers/Block";
import FlexDiv from "../../../reuse/FlexDiv";

export interface ContactPageProps {
  title: string;
}

export const ContactBlock: FC<ContactPageProps> = (props) => {
  return (
    props && (
      <Block variant="dark" title={props?.title}>
        <FlexDiv
          width100
          flex={{ x: "stretch", direction: "column" }}
          className={styles.container}
          gapArray={[6]}
        >
          <iframe
            className={styles.map}
            title="google-map"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=582&amp;hl=en&amp;q=%20Laval+(Seto%20Arts)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
          <Form />
        </FlexDiv>
      </Block>
    )
  );
};
