import * as actions from "../actions/actions";

//import { CARGANDO, TRAER_TODOS, ACTUALIZAR } from "../actions/actionsTypes";
import * as actionsTypes from "../actions/actionsTypes";

const INITIAL_STATE = {
    cargando: false,
    user: null,
};


const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionsTypes.TRAER_TODOS:
            return {
                ...state, user: action.payload
            }
            case actionsTypes.CARGANDO:
                return {
                    ...state, cargando: !state.cargando
                }
                case actionsTypes.LIMPIAR:
                    return {
                        ...state, user: null
                    }
                    default:
                        return state
    }
};

export default reducer;