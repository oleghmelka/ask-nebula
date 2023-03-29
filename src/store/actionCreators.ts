import * as actionTypes from "./actionTypes"


type IncrementActionType = {
  type: typeof actionTypes.INCREMENT_STAGE
  payload: {
    stage: number
  }
}

type DecrementActionType = {
  type: typeof actionTypes.DECREMENT_STAGE
  
  payload: {
    stage: number
  }
}

type GenderActionType = {
  type: typeof actionTypes.SET_GENDER
  payload: {
    gender: string
  }
}

type ZodiacActionType = {
  type: typeof actionTypes.SET_ZODIAC
  payload: {
     zodiac: string | null
  }
}

type AgeActionType = {
  type: typeof actionTypes.SET_AGE
  payload: {
    age: number
  }
}

type RaltionshipStatusActionType = {
  type: typeof actionTypes.SET_STATUS
  payload: {
    status: 'single' | 'in a relationship'
  }
}

type IsParentActionType = {
  type: typeof actionTypes.SET_IS_PARENT
  payload: {
    isParent: boolean
  }
}

type IsSingleParentActionType = {
  type: typeof actionTypes.SET_IS_SINGLE_PARENT
  payload: {
    isSingleParent: boolean
  }
}

type DecisionSourseActionType = {
  type: typeof actionTypes.SET_DECISION_SOURSE
  payload: {
    decisionSourse: 'heart' | 'head' | 'both'
  }
}


export type CombinedType = IncrementActionType | DecrementActionType | 
                            GenderActionType | RaltionshipStatusActionType |
                            IsParentActionType | IsSingleParentActionType |
                            DecisionSourseActionType | ZodiacActionType |
                            AgeActionType

export const incrementStage =(stage: number):IncrementActionType => ({
  type: actionTypes.INCREMENT_STAGE,
  payload: {stage},
})

export const decrementStage =(stage: number):DecrementActionType => ({
  type: actionTypes.DECREMENT_STAGE,
  payload: {stage},
})

export const setGender = (gender: string):GenderActionType => ({
  type: actionTypes.SET_GENDER,
  payload: {gender},
})

export const setZodiac = (zodiac: string | null):ZodiacActionType => ({
  type: actionTypes.SET_ZODIAC,
  payload: {zodiac},
})

export const setAge = (age: number):AgeActionType => ({
  type: actionTypes.SET_AGE,
  payload: {age},
})

export const setRelationshipStatus = (status: 'single' | 'in a relationship'):RaltionshipStatusActionType => ({
  type: actionTypes.SET_STATUS,
  payload: {status},
})

export const setIsParent = (isParent: boolean):IsParentActionType => ({
  type: actionTypes.SET_IS_PARENT,
  payload: {isParent},
})

export const setIsSingleParent = (isSingleParent: boolean):IsSingleParentActionType => ({
  type: actionTypes.SET_IS_SINGLE_PARENT,
  payload: {isSingleParent},
})

export const setDecisionSourse = (decisionSourse: 'heart' | 'head' | 'both'):DecisionSourseActionType => ({
  type: actionTypes.SET_DECISION_SOURSE,
  payload: {decisionSourse},
})




