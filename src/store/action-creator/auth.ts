import { authAction, authActionTypes } from "../../types/auth";
import { Dispatch } from "redux";

export const setToken = (token: string) => (dispatch: Dispatch<authAction>) => {
  dispatch({
    type: authActionTypes.SET_TOKEN,
    payload: token,
  });
};
