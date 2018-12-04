import { string } from "prop-types";
import * as React from "react";
import styles from "./list.module.scss";

type Item = JSX.Element | string;

interface IListProps {
  items: React.ReactNode[];
  itemClassName?: string;
}

const List: React.SFC<IListProps & React.HTMLAttributes<HTMLUListElement>> = ({
  items,
  itemClassName,
  className,
  ...props
}) => {
  return (
    <ul {...props} className={`${styles.self} ${className} u-override`}>
      {items.map((item, index) => (
        <li
          className={`${styles.item} ${itemClassName} u-override`}
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

List.defaultProps = {
  className: "",
  itemClassName: ""
};

export default List;
