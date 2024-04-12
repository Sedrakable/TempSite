import React, { FC } from "react";
import { Heading } from "../reuse/Heading";
import styles from "./TabButton.module.scss";
import cn from "classnames";
import { ReactComponent as Line } from "../../assets/illu/Line.svg";
import FlexDiv from "../reuse/FlexDiv";
export interface TabButtonProps {
  children: string;
  className?: string;
  line?: boolean;
}

const TabButton: FC<TabButtonProps> = ({ children, className, line }) => {
  return (
    <nav className={cn(styles.tabButton, className)}>
      <FlexDiv
        padding={{ bottom: [1], top: [1] }}
        className={styles.textWrapper}
      >
        <Heading font="Seto" level="5" as="h5" color="black">
          {children}
        </Heading>
      </FlexDiv>
      {line && <Line className={styles.line} />}
    </nav>
  );
};

export default TabButton;
