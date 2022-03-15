import { combineReducers } from "redux"
import { user, IUserReducerState } from "./user"

export interface DefaultRootState {
    [index: string]: IUserReducerState,
    user: IUserReducerState
}

export default combineReducers({
    user
})