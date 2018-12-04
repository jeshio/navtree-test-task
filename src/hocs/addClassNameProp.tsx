import classnames from "classnames";
import { string } from "prop-types";
import React from "react";

/**
 * Add className without overriding
 */
export default (defaultClassName = "") => Component => ({
  className = "",
  ...props
}) => (
  <Component {...props} className={classnames(defaultClassName, className)} />
);
