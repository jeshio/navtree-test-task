import classnames from "classnames";
import * as React from "react";
import styles from "./button.module.scss";

export interface IButtonProps {
  noBackground?: boolean;
  transparent?: boolean;
}

const Button: React.SFC<IButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  noBackground,
  transparent,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classnames(
        styles.self,
        {
          [styles.tNoBackground]: noBackground,
          [styles.tTransparent]: transparent
        },
        props.className
      )}
    />
  );
};

Button.defaultProps = {
  noBackground: false,
  transparent: false
};

export default Button;
