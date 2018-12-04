import { MenuItem } from "@modules/App/interfaces";
import { Button, Link, List } from "@ui-components/index";
import classnames from "classnames";
import * as React from "react";
import { FaBars, FaRocket } from "react-icons/fa/";
import styles from "./topBar.module.scss";
interface ITopBarProps {
  items: MenuItem[];
  onToggleSideBar: () => void;
}

const TopBar: React.SFC<ITopBarProps> = ({ items, onToggleSideBar }) => {
  return (
    <header className={styles.self}>
      <nav className={styles.selfInner}>
        <Link className={styles.logo} href="/">
          / navtree /
        </Link>

        <div className={classnames(styles.burger, "u-show-small")}>
          <Button
            className={styles.burgerButton}
            noBackground={true}
            onClick={onToggleSideBar}
          >
            <FaBars />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
