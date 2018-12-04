import classnames from "classnames";
import * as React from "react";
import styles from "./layout.module.scss";

interface ILayoutProps {
  isActive: boolean;
  onClick: () => void;
}

const ILayout: React.SFC<ILayoutProps> = ({ isActive, onClick }) => {
  return (
    <div
      className={classnames(styles.self, {
        [styles.isVisible]: isActive
      })}
      onClick={onClick}
      onKeyDown={onClick}
      role="presentation"
    />
  );
};

export default ILayout;
