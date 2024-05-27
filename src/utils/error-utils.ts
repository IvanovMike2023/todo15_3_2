import {Dispatch} from "redux";
import {
    SetAppErrorActionType,
    SetAppStatusActionType,
    setErrorAC,
    setStatusAC
} from "../features/TodolistsList/app-reducer";
import {ResponseType} from "../api/todolists-api";
export const handleServerAppError = <T>(dispatch:ErrorUtilsDispatchType,data:ResponseType<T>)=>{
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some Error'))
    }
    dispatch(setStatusAC('failed'))
}
export const handleServerNetworkAppError=(dispatch:ErrorUtilsDispatchType, error:{message:string})=>{
    dispatch(setErrorAC(error.message))
    dispatch(setStatusAC('failed'))
}
type ErrorUtilsDispatchType= Dispatch<SetAppStatusActionType | SetAppErrorActionType>