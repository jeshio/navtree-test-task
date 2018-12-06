import classnames from "classnames";
import React from "react";

interface IInjectedProps {
  className?: string;
}

/**
 * Add className without overriding
 */
export default function<T extends any>(defaultClassName = "") {
  type WrappedComponent = React.ComponentType<IInjectedProps & T>;

  return (Component: React.ComponentType<T>): WrappedComponent => ({
    className = "",
    ...props
  }: IInjectedProps) => (
    <Component {...props} className={classnames(defaultClassName, className)} />
  );
}
