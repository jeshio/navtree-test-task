import { Link } from "@ui-components";
import * as React from "react";
import { Section } from "../interfaces";

interface IDefaultProps {
  list?: Section[];
}

export interface IListProps extends Partial<IDefaultProps> {
  index: string;
  menuItem: string;
}

const List: React.SFC<IListProps & IDefaultProps> = ({
  list = [],
  menuItem,
  index
}) => {
  return (
    <div>
      <h3>List {index}</h3>
      {list.map(section => (
        <div key={section.id}>
          <Link href={`/${menuItem}/${section.id}`}>Item {section.index}</Link>
        </div>
      ))}
    </div>
  );
};

List.defaultProps = {
  list: []
};

export default List;
