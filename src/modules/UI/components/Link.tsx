import { addClassNameProp } from "@hocs/index";
import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "recompose";
import styles from "./link.module.scss";

interface ILinkProps extends RouteComponentProps<any> {
  noRouter?: boolean;
  isBackLink?: boolean;
  blank?: boolean;
  href: string;
  onClick: () => void;
}

class Link extends React.PureComponent<
  ILinkProps & React.HTMLProps<HTMLAnchorElement>
> {
  public static defaultProps = {
    blank: false,
    href: "",
    onClick: () => ({})
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  public render() {
    const {
      staticContext,
      history,
      noRouter,
      isBackLink,
      blank,
      ...props
    } = this.props;
    return (
      <a
        {...props}
        onClick={this.onClick}
        target={blank ? "_blank" : "_self"}
      />
    );
  }

  protected onClick(e) {
    const { noRouter, href, history, isBackLink, onClick } = this.props;

    if (isBackLink) {
      e.preventDefault();
      const { pathname } = window.location;

      const regexp = new RegExp(/\/modal\/.*/);

      // if it's modal
      if (pathname.match(regexp)) {
        // close it
        const url = pathname.replace(regexp, "");
        history.push(url);
      } else {
        history.goBack();
      }
    } else if (noRouter !== true) {
      e.preventDefault();
      history.push(href);
    }
    onClick(e);
  }
}

export default compose(
  addClassNameProp(styles.self),
  withRouter
)(Link);
