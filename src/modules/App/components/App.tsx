import * as React from "react";
import styles from "./app.module.scss";

interface IAppProps {
  topBarComponent: JSX.Element;
  sideBarComponent: JSX.Element;
  layoutComponent: JSX.Element;
  children: any;
}

const App: React.SFC<IAppProps> = ({
  topBarComponent,
  sideBarComponent,
  layoutComponent,
  children
}) => {
  return (
    <div className={styles.self}>
      {topBarComponent}
      <div className={styles.page}>
        <div>{sideBarComponent}</div>
        {layoutComponent}
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};

export default App;
