import { createAsyncAction } from "typesafe-actions";
import { AsyncActionBuilder } from "typesafe-actions/dist/create-async-action";
import { StringType } from "typesafe-actions/dist/types";

export default function<T1, T2, T3>(
  moduleName: string,
  actionName: string
): AsyncActionBuilder<StringType, StringType, StringType, T1, T2, T3> {
  const moduleActionName = `${moduleName}/${actionName}`;
  return createAsyncAction(
    moduleActionName,
    `${moduleActionName}_SUCCESS`,
    `${moduleActionName}_FAIL`
  )<T1, T2, T3>();
}
