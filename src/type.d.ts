//import * as actionTypes from "../src/store/actionTypes"

/* type StagesState = {
  stage: number
  total: number
  gender: string
} */

/* type GenderState = {
  stage: number
  gender: string
} */



/* type StagesAction = {
  type: string
  payload: {
    stage: number
  }
}

type GenderAction = {
  type: string
  payload: {
    gender: string
  }
}

type SomethingAction = {
  type: string
  payload: {
    something: boolean
  }
} */

/* type StagesAction = {
  type: typeof INCREMENT_STAGE
  stage: number
}

type GenderAction = {
  type: typeof SET_GENDER
  gender: string
}

type SomethingAction = {
  type: string
  something: boolean
}


type CombinedType = StagesAction | GenderAction */


type DispatchType = (args: any) => any
//type DispatchType = (args: StagesAction | GenderAction) => StagesAction | GenderAction