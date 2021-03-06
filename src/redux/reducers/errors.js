import { GET_ERRORS } from "../../actions/types";

const initialState = {
    msg: {},
    status: null
}

const ErrFunction = (state = initialState, action) => {
    switch(action.type) {
        case GET_ERRORS:
            return {
                ...state,
                msg: action.payload.msg,
                status: action.payload.status
            }
        default:
            return state;
    }
}

export default ErrFunction;