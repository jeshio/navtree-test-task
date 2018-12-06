import { withLoader } from "@hocs";
import { IListProps } from "@modules/Section/components/List";
import * as React from "react";

interface ISectionProps {
  index: string;
  loading: boolean;
  listComponent: React.ReactElement<IListProps>;
}

const Section: React.SFC<ISectionProps> = ({ index, listComponent }) => {
  return (
    <div>
      <h2>Section {index}</h2>

      <div>{listComponent}</div>
    </div>
  );
};

export default withLoader<ISectionProps>(Section);
