import * as actionsTypes from "./actionsTypes";

export const traerTodas = (data) => ({
    type: actionsTypes.TRAER_TODOS,
    payload: data
})

export const cargando = (data) => ({
    type: actionsTypes.CARGANDO,
    payload: data
})

export const limpiar = (data) => ({
    type: actionsTypes.LIMPIAR,
    payload: data
})

