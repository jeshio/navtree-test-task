import * as React from "react";
import { connect } from "react-redux";
import {
  ActionCreatorsMapObject,
  AnyAction,
  bindActionCreators,
  Dispatch
} from "redux";
import * as Components from "./components";
import { Section } from "./interfaces";
import * as store from "./store";

export interface ISectionContainerProps extends IStateProps, IDispatchProps {}

class SectionContainer extends React.Component<ISectionContainerProps, any> {
  public componentDidMount() {
    this.props.fetchSectionForMenuItem("menu-item-1");
  }

  public render() {
    const { loading, currentSection } = this.props;

    if (!currentSection) {
      return null;
    }

    return <Components.Section />;
  }
}

interface IStateProps {
  currentSection?: Section;
  loading: boolean;
}

const mapState2Props = (state): IStateProps => {
  return {
    currentSection: store.selectors.currentSection(state),
    loading: store.selectors.loading(state)
  };
};

interface IDispatchProps {
  fetchSectionById: typeof store.actions.fetchSectionById;
  fetchSectionForMenuItem: typeof store.actions.fetchSectionForMenuItem;
}

const mapDispatch2Props = dispatch => ({
  fetchSectionById: id => dispatch(store.actions.fetchSectionById(id)),
  fetchSectionForMenuItem: id =>
    dispatch(store.actions.fetchSectionForMenuItem(id))
});

export default connect(
  mapState2Props,
  mapDispatch2Props
)(SectionContainer);
