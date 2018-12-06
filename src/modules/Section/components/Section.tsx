import { withLoader } from "@hocs";
import * as React from "react";

interface ISectionProps {
  title: string;
  loading: boolean;
}

const Section: React.SFC<ISectionProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default withLoader<ISectionProps>(Section);
