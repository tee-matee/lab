import { typeRedux } from "../../types";

const updateLookup = (data: any) => (dispatch: (arg0: { type: typeRedux; data: any; }) => void) => {
    dispatch({
        type: typeRedux.lookup,
        data,
    })
}

export default updateLookup