import * as React from "react";
import { connect } from "react-redux";
import * as Components from "./components";

export interface ISectionContainerProps {}

class SectionContainer extends React.Component<ISectionContainerProps, any> {
  public render() {
    return <Components.Section />;
  }
}

const mapState2Props = state => {
  return {};
};

export default connect(mapState2Props)(SectionContainer);
