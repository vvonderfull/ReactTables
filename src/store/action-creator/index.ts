import * as UserActionCreators from "./user";
import * as authActionCreators from "./auth";
const actions = {
  ...UserActionCreators,
  ...authActionCreators,
};
export default actions;
