import * as actionTypes from "./actionTypes"
import {CombinedType} from "../store/actionCreators"


export type InitialStateType = {
  stage: number
  gender: string
  age: number
  status: 'single' | 'in a relationship'
  isParent: boolean
  isSingleParent: boolean
  decisionSourse: 'heart' | 'head' | 'both'
  zodiac: string
}

const initialState: InitialStateType = {
  stage: 1,
  gender: '',
  age: 0,
  status: 'single',
  isParent: false,
  isSingleParent: false,
  decisionSourse: 'heart',
  zodiac: 'lion'
}

export const rootReducer = (
  state = initialState,
  action: CombinedType
): InitialStateType => {

  console.log('action', action.payload)

  switch (action.type) {
    
    case actionTypes.INCREMENT_STAGE:
      
      return {
        ...state,
        stage: action.payload.stage,
      }

    case actionTypes.DECREMENT_STAGE:

      return {
        ...state,
        stage: action.payload.stage,
      }

    case actionTypes.SET_GENDER: 

      return {
        ...state,
        gender: action.payload.gender,
      }

    case actionTypes.SET_STATUS: 

    return {
      ...state,
      gender: action.payload.status,
    }

    case actionTypes.SET_IS_PARENT: 

    return {
      ...state,
      isParent: action.payload.isParent,
    }

    
    case actionTypes.SET_IS_SINGLE_PARENT: 

    return {
      ...state,
      isSingleParent: action.payload.isSingleParent,
    }

    case actionTypes.SET_DECISION_SOURSE: 

    return {
      ...state,
      decisionSourse: action.payload.decisionSourse,
    }

  }

  return state
}

export default rootReducer

//type RootReducerType = typeof rootReducer
//export type AppStateType = ReturnType<RootReducerType>

