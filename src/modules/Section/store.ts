import { createAsyncAction } from "@helpers/store";
import { ActionWithPayload } from "@interfaces/ActionWithPayload";
import { string } from "prop-types";
import { Action, ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ActionType, getType } from "typesafe-actions";
import { ActionCreatorMap } from "typesafe-actions/dist/types";
import { MODULE_NAME } from "./constants";
import { Section } from "./interfaces";
import { getSectionById, sectionsForMenuItems } from "./mocks";

export interface IState {
  loading: boolean;
  stack: Section[];
}

export const initialState: IState = {
  loading: false,
  stack: []
};

/**
 * Reducer
 */
export default function reducer(
  state = initialState,
  action: ActionWithPayload<any>
): IState {
  switch (action.type) {
    case getType(asyncActions.fetchSectionById.request):
      return {
        ...state,
        loading: true
      };
    case getType(asyncActions.fetchSectionById.failure):
      return {
        ...state,
        loading: false
      };
    case getType(asyncActions.fetchSectionById.success): {
      const section = action.payload;
      return {
        ...state,
        loading: false,
        stack: [...state.stack, section]
      };
    }

    case getType(asyncActions.fetchSectionForMenuItem.request):
      return {
        ...state,
        loading: true
      };
    case getType(asyncActions.fetchSectionForMenuItem.failure):
      return {
        ...state,
        loading: false
      };
    case getType(asyncActions.fetchSectionForMenuItem.success): {
      const section = action.payload;
      return {
        ...state,
        loading: false,
        stack: [section]
      };
    }
    default:
      return state;
  }
}

/**
 * Actions
 */
const asyncActions = {
  fetchSectionById: createAsyncAction<void, Section | undefined, void>(
    MODULE_NAME,
    "FETCH_BY_ID"
  ),
  fetchSectionForMenuItem: createAsyncAction<void, Section | undefined, void>(
    MODULE_NAME,
    "FETCH_FOR_MENU_ITEM"
  )
};

const fetchSectionForMenuItem = (menuItemName: string) => async dispatch => {
  dispatch(asyncActions.fetchSectionForMenuItem.request());

  const payload = await new Promise<Section | undefined>(resolve =>
    setTimeout(() => resolve(sectionsForMenuItems[menuItemName]), 1500)
  );

  dispatch(asyncActions.fetchSectionForMenuItem.success(payload));
};

const fetchSectionById = (id: number) => async dispatch => {
  dispatch(asyncActions.fetchSectionById.request());

  const payload = await new Promise<Section | undefined>(resolve =>
    setTimeout(() => resolve(getSectionById(id)), 1500)
  );

  dispatch(asyncActions.fetchSectionById.success(payload));
};

export const actions = {
  fetchSectionById,
  fetchSectionForMenuItem
};

/**
 * Selectors
 */
export const getModuleState = (state): IState => state.section;

export const selectors = {
  currentSection: (state): Section | undefined => {
    const moduleState = getModuleState(state);
    return moduleState.stack.length > 0
      ? moduleState.stack[moduleState.stack.length - 1]
      : undefined;
  },
  loading: (state: IState): boolean => getModuleState(state).loading
};
