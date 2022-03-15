import { userTypeRedux } from "../../types"

export interface IUserReducerState {
    [index: string]: string,
    permissions: string
}

const initialState: IUserReducerState = {
    permissions: ''
}

export const user = (state = initialState, action: { type: any; data: any; }) => {
    switch (action.type) {
        case userTypeRedux.SET:
            return {
                permissions: 'non-user'
            }
        case userTypeRedux.RESET:
            return initialState
        case userTypeRedux.UPDATE:
            return action.data
        default:
            return state
    }
}