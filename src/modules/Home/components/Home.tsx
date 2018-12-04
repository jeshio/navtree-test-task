import { Button } from "@ui-components";
import * as React from "react";
import styles from "./home.module.scss";

interface IHomeProps {}

const Home: React.SFC<IHomeProps> = props => {
  return <div className={styles.self}>test</div>;
};

export default Home;
