import * as actionTypes from "./actionTypes"
import {CombinedType} from "../store/actionCreators"


export type InitialStateType = {
  stage: number
  gender: string
  zodiac: string | null
  age: number
  status: 'single' | 'in a relationship'
  isParent: boolean
  isSingleParent: boolean
  decisionSourse: 'heart' | 'head' | 'both'
  
}

const initialState: InitialStateType = {
  stage: 1,
  gender: '',
  zodiac: '',
  age: 0,
  status: 'single',
  isParent: false,
  isSingleParent: false,
  decisionSourse: 'heart',
  
}

export const rootReducer = (
  state = initialState,
  action: CombinedType
): InitialStateType => {


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

    case actionTypes.SET_ZODIAC: 

      return {
        ...state,
        zodiac: action.payload.zodiac,
      }

    case actionTypes.SET_AGE: 

      return {
        ...state,
        age: action.payload.age,
      }

    case actionTypes.SET_STATUS: 

    return {
      ...state,
      status: action.payload.status,
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


