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

interface IDefaultProps {
  currentSection: object;
}

export interface ISectionContainerProps extends IStateProps, IDispatchProps {
  match: {
    params: {
      menuItem: string;
      sectionId: string;
    };
  };
}

class SectionContainer extends React.Component<
  ISectionContainerProps & IDefaultProps,
  any
> {
  public static defaultProps: IDefaultProps = {
    currentSection: {}
  };
  constructor(props) {
    super(props);

    this.loadSection = this.loadSection.bind(this);
  }

  public render() {
    const { loading, currentSection } = this.props;
    const { menuItem } = this.props.match.params;

    return (
      <Components.Section
        index={currentSection.index}
        loading={loading}
        listComponent={
          <Components.List
            index={currentSection.index}
            list={currentSection.list}
            menuItem={menuItem}
          />
        }
      />
    );
  }

  public componentDidMount() {
    const { menuItem, sectionId } = this.props.match.params;
    this.loadSection(menuItem, sectionId);
  }

  public shouldComponentUpdate(nextProps: ISectionContainerProps): boolean {
    const { menuItem, sectionId } = this.props.match.params;
    const { params } = nextProps.match;

    if (menuItem !== params.menuItem || sectionId !== params.sectionId) {
      this.loadSection(params.menuItem, params.sectionId);
    }

    return true;
  }

  protected loadSection(menuItem: string, sectionId: string) {
    if (sectionId) {
      this.props.fetchSectionById(parseInt(sectionId, 10));
    } else {
      this.props.fetchSectionForMenuItem(menuItem);
    }
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
