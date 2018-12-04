import * as React from "react";
import { connect } from "react-redux";
import * as Components from "./components";

export interface IHomeContainerProps {}

class HomeContainer extends React.Component<IHomeContainerProps, any> {
  public render() {
    return <Components.Home />;
  }
}

const mapState2Props = state => {
  return {};
};

export default connect(mapState2Props)(HomeContainer);
