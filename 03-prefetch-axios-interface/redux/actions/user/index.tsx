import { userTypeRedux } from "../../types";
import { IUserReducerState } from '../../reducers/user'

export const setUser = () => (dispatch: (arg0: { type: userTypeRedux; }) => void) => {
    dispatch({ type: userTypeRedux.SET })
}

export const reSetUser = () => (dispatch: (arg0: { type: userTypeRedux; }) => void) => {
    dispatch({ type: userTypeRedux.RESET })
}

export const updateUser = (data: IUserReducerState) => (dispatch: (arg0: { type: userTypeRedux; data: IUserReducerState; }) => void) => {
    dispatch({
        type: userTypeRedux.UPDATE,
        data,
    })
}