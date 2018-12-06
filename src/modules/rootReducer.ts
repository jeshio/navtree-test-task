import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { store as sectionStore } from "./Section";

export default history =>
  combineReducers({
    router: connectRouter(history),
    section: sectionStore.default
  });
