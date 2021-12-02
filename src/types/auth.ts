export interface authState {
  token: string;
}

export enum authActionTypes {
  SET_TOKEN = "SET_TOKEN",
}

interface setTokenAction {
  type: authActionTypes.SET_TOKEN;
  payload: string;
}

export type authAction = setTokenAction;
