type StagesState = {
  stage: number
  total: number
  gender: string
}

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

type StagesAction = {
  type: string
  stage: number
}

type GenderAction = {
  type: string
  gender: string
}

type SomethingAction = {
  type: string
  something: boolean
}

type DispatchType = (args: StagesAction) => StagesAction
//type DispatchType = (args: StagesAction | GenderAction) => StagesAction | GenderAction