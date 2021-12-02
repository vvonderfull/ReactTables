import { authState, authAction, authActionTypes } from "../../types/auth";

const initialState: authState = {
  token: "",
};

export const authReducer = (
  state = initialState,
  action: authAction
): authState => {
  switch (action.type) {
    case authActionTypes.SET_TOKEN:
      return { token: action.payload };
    default:
      return state;
  }
};
