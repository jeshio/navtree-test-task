import "loaders.css/src/animations/ball-pulse.scss";
import React, { CSSProperties } from "react";
import Loader from "react-loaders";

interface IInjectedProps {
  loading: boolean;
}

/**
 * Add loader by prop
 */
export default function<WrappedProps extends object>(
  Component: React.ComponentType<WrappedProps>
): React.SFC<WrappedProps & IInjectedProps> {
  return (props: IInjectedProps) => {
    const isLoading = props.loading;

    const wrapperStyle: CSSProperties = {
      position: "relative"
    };
    const lockLayerStyle: CSSProperties = {
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 1)",
      display: isLoading ? "flex" : "none",
      height: "100%",
      justifyContent: "center",
      position: "absolute",
      width: "100%",
      zIndex: 999
    };

    return (
      <div style={isLoading ? wrapperStyle : undefined}>
        <div style={lockLayerStyle}>
          <Loader
            type="ball-pulse"
            active={isLoading}
            innerClassName={"u-loader"}
          />
        </div>
        <Component {...props as WrappedProps} />
      </div>
    );
  };
}
