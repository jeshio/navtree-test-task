import * as React from "react";
import { connect } from "react-redux";
import * as Components from "./components";
import { MENU_ITEMS } from "./constants";

export interface IAppProps {}

export interface IAppState {
  sidebarIsOpen: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      sidebarIsOpen: false
    };
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  public render() {
    const { sidebarIsOpen } = this.state;
    const { children } = this.props;

    return (
      <Components.App
        topBarComponent={
          <Components.TopBar onToggleSideBar={this.toggleSideBar} />
        }
        sideBarComponent={
          <Components.SideBar
            items={MENU_ITEMS}
            isOpen={sidebarIsOpen}
            onClickLink={this.toggleSideBar}
          />
        }
        layoutComponent={
          <Components.Layout
            isActive={sidebarIsOpen}
            onClick={this.toggleSideBar}
          />
        }
      >
        {children}
      </Components.App>
    );
  }

  protected toggleSideBar() {
    this.setState(({ sidebarIsOpen }) => ({ sidebarIsOpen: !sidebarIsOpen }));
  }
}

const mapState2Props = state => {
  return {};
};

export default connect(mapState2Props)(App);
