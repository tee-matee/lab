import { typeRedux } from "../../types";

export interface ExampleReducerState {
    [index: string]: string,
    sample: string
}

export interface LookupReducerState {
    [index: string]: [] | object | string | boolean,
    isHasData: boolean,
    data: {
        name: string
    }[]
}

const initialState: LookupReducerState = {
    isHasData: false,
    data: []
}

export const lookup = (state = initialState, action: { type: any; data: any; }) => {
    switch (action.type) {
        case typeRedux.lookup:
            return action.data
        default:
            return state
    }
}