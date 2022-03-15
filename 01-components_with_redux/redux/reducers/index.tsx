import { combineReducers } from "redux"
import { lookup, LookupReducerState, ExampleReducerState } from "./lookup"

export interface DefaultRootState {
    [index: string]: LookupReducerState | ExampleReducerState,
    lookup: LookupReducerState,
    example: ExampleReducerState
}

export default combineReducers({
    lookup
})