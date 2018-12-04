import * as React from "react";

interface INoMatchProps {}

const NoMatch: React.SFC<INoMatchProps> = props => {
  return <div>Sorry! The page doesn't found.</div>;
};

export default NoMatch;
