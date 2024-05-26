export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
const initialState:initialStateType = {
    status: 'loading',
    error: null
}
export type initialStateType =
    {
        status: RequestStatusType
        error: null | string
    }
export const appReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}
export const getStatusAC = (status: RequestStatusType) => ({status, type: 'APP/SET-STATUS'} as const)
export const getErrorAC = (error: string | null) => ({error, type: 'APP/SET-ERROR'} as const)
export type SetAppStatusActionType = ReturnType<typeof getStatusAC>
export type SetAppErrorActionType = ReturnType<typeof getErrorAC>
type ActionType = SetAppStatusActionType | SetAppErrorActionType
