import { combineReducers } from "react";

import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer
});
