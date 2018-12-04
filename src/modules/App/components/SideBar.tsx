import { MenuItem } from "@modules/App/interfaces";
import { Link, List } from "@ui-components/index";
import classnames from "classnames";
import * as React from "react";
import styles from "./sideBar.module.scss";

interface ISideBarProps {
  items: MenuItem[];
  isOpen: boolean;
  onClickLink: () => void;
}

const SideBar: React.SFC<ISideBarProps> = ({ items, isOpen, onClickLink }) => {
  return (
    <aside className={classnames(styles.self, { [styles.selfIsOpen]: isOpen })}>
      <List
        items={items.map(({ title, name }) => (
          <span>
            <Link
              href={`/${name}`}
              className={classnames(styles.itemLink, "u-show-small")}
              onClick={onClickLink}
            >
              {title}
            </Link>
            <Link
              href={`/${name}`}
              className={classnames(styles.itemLink, "u-hide-small")}
            >
              {title}
            </Link>
          </span>
        ))}
        className={styles.list}
        itemClassName={styles.item}
      />
    </aside>
  );
};

export default SideBar;
