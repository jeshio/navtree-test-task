import { History } from "history";
import { object } from "prop-types";
import * as React from "react";
import { connect } from "react-redux";
import { Router } from "react-router";
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

interface ISectionContainerContext {
  router: {
    history: History;
    route: Router;
  };
}

class SectionContainer extends React.Component<
  ISectionContainerProps & IDefaultProps,
  any
> {
  public static contextTypes = {
    router: object
  };

  public static defaultProps: IDefaultProps = {
    currentSection: {}
  };

  public context!: ISectionContainerContext;

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
    const menuItemIsChanged = menuItem !== params.menuItem;
    const sectionIdIsChanged = sectionId !== params.sectionId;
    const paramsIsChanged = menuItemIsChanged || sectionIdIsChanged;

    if (paramsIsChanged) {
      const { action } = this.context.router.history;
      const { sectionsStack, sectionsStackPop } = nextProps;
      const isNoBack = action !== "POP";
      const stackNoPop = sectionsStack.length <= 1;

      const needToLoadSection = menuItemIsChanged || isNoBack || stackNoPop;
      if (needToLoadSection) {
        this.loadSection(params.menuItem, params.sectionId);
      } else {
        sectionsStackPop();
      }
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
  sectionsStack: Section[];
}

const mapState2Props = (state): IStateProps => {
  return {
    currentSection: store.selectors.currentSection(state),
    loading: store.selectors.loading(state),
    sectionsStack: store.selectors.sectionsStack(state)
  };
};

interface IDispatchProps {
  fetchSectionById: typeof store.actions.fetchSectionById;
  fetchSectionForMenuItem: typeof store.actions.fetchSectionForMenuItem;
  sectionsStackPop: typeof store.actions.sectionsStackPop;
}

const mapDispatch2Props = dispatch =>
  bindActionCreators(store.actions, dispatch);

export default connect(
  mapState2Props,
  mapDispatch2Props
)(SectionContainer);
