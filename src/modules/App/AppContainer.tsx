import * as React from "react";
import { connect } from "react-redux";
import * as Components from "./components";
export interface IAppProps {}

export interface IAppState {
  sidebarIsOpen: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  get menuItems() {
    return [
      {
        title: "Пункт 1",
        link: "/item1"
      }
    ];
  }
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
          <Components.TopBar
            items={this.menuItems}
            onToggleSideBar={this.toggleSideBar}
          />
        }
        sideBarComponent={
          <Components.SideBar
            items={this.menuItems}
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
