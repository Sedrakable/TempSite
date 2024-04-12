import React, {
  PropsWithChildren,
  ButtonHTMLAttributes,
  FC,
  AnchorHTMLAttributes,
} from "react";
import styles from "./Button.module.scss";
import cn from "classnames";
import { Heading } from "./Heading";
import { useNavigate } from "react-router-dom";

export interface ButtonProps {
  variant: "primary" | "secondary";
  small?: boolean;
  fit?: "grow" | "shrink";
  disabled?: boolean;
  className?: string;
}

export const Button: FC<PropsWithChildren<
  ButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>
>> = ({ children, variant, disabled, small, fit, ...props }) => {
  const navigate = useNavigate();

  const as = props.href ? "a" : "button";

  const ButtonHeading: React.FC<{ className?: string }> = ({ className }) => (
    <Heading
      font="Seto"
      level={small ? "5" : "5"}
      as="h5"
      color={variant === "secondary" ? "primary" : "white"}
      className={className}
    >
      {children as string}
    </Heading>
  );

  return (
    <div className={styles.container}>
      {React.createElement(
        as,
        {
          className: cn(styles.button, styles[variant], {
            [styles.small]: small,
          }),
          style: { width: fit === "grow" && "100%" },
          ...props,
          disabled,
          "aria-label": children as string,
        },
        <ButtonHeading />
      )}
    </div>
  );
};
