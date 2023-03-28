import * as actionTypes from "./actionTypes"

/* export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  }

  return simulateHttpRequest(action)
}

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}
 */

export function incrementStage(stage: number) {
  const action: StagesAction = {
    type: actionTypes.INCREMENT_STAGE,
    stage,
  }
  return simulateHttpRequest(action)
}

export function decrementStage(stage: number) {
  const action: StagesAction = {
    type: actionTypes.DECREMENT_STAGE,
    stage,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: StagesAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}

/* export function setGender(gender: string) {
  const action: GenderAction = {
    type: actionTypes.SET_GENDER,
    gender,
  }
  return action 
} */