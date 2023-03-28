import * as actionTypes from "./actionTypes"

const initialState: StagesState = {
  stage: 1,
  total: 100,
  gender: ''
}

const reducer = (
  state: StagesState = initialState,
  action: StagesAction
): StagesState => {
  console.log(action.stage)

  switch (action.type) {
    
    case actionTypes.INCREMENT_STAGE:
      
      return {
        ...state,
        stage: action.stage,
      }
    case actionTypes.DECREMENT_STAGE:

      return {
        ...state,
        stage: action.stage,
      }
  }

  return state
}

export default reducer




/* import * as actionTypes from "./actionTypes"

const initialState: StagesState = {
  stage: 1,
  total: 100,
  gender: ''
} */
//type CombineType = StagesAction | GenderAction | SomethingAction;
//type CombineType = ReturnType<typeof StagesAction> | ReturnType<typeof GenderAction> | ReturnType<typeof SomethingAction>;


/* const reducer = (
  state: StagesState = initialState,
  action: StagesAction
  //action: CombineType
): StagesState => {

  //console.log(action.gender)

  switch (action.type) {
    
    case actionTypes.INCREMENT_STAGE:
      
      return {
        ...state,
        stage: action.stage,
      }
    case actionTypes.DECREMENT_STAGE:

      return {
        ...state,
        stage: action.stage,
      }
    case actionTypes.SET_GENDER: 

      return {
        ...state,
        gender: action.payload.gender,
      }
  }

  return state
}

export default reducer */