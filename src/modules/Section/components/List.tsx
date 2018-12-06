import { Link } from "@ui-components";
import * as React from "react";
import { Section } from "../interfaces";

export interface IListProps {
  index: string;
  menuItem: string;
  list?: Section[];
}

const List: React.SFC<IListProps> = ({ list = [], menuItem, index }) => {
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
