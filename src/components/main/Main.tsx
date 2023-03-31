import React from 'react'
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"

import { InitialStateType } from "../../store/reducer"
import { incrementStage, setZodiac, setAge, setEmail, CombinedType } from "../../store/actionCreators"

import GenderSelection from "./gender_selection/GenderSelection";
import BirthdaySelection from "./birthday_selection/BirthdaySelection";
import ZodiacSignPrediction from "./zodiac_sign_prediction/ZodiacSignPrediction";
import RelationshipStatus from "./relationship_status/RelationshipStatus";
import ParentSelection from "./parent_selection/ParentSelection";
import FeelSelection from "./feel_selection/FeelSelection";
import DecisionSelection from "./decision_selection/DecisionSelection";
import FullPrediction from "./full_prediction/FullPrediction";
import EmailBlock from "./email_block/EmailBlock";

type MainType = {
  stage: number
  previousStage: (stage: number) => void
}

const Main = ( {stage, previousStage}:MainType ) => {

  const status: string = useSelector(
    (state: InitialStateType) => state.status,
    shallowEqual
  )

  const gender: string = useSelector(
    (state: InitialStateType) => state.gender,
    shallowEqual
  )

  const age: number = useSelector(
    (state: InitialStateType) => state.age,
    shallowEqual
  )

  const zodiac: string | null = useSelector(
    (state: InitialStateType) => state.zodiac,
    shallowEqual
  )

  const isParent: boolean = useSelector(
    (state: InitialStateType) => state.isParent,
    shallowEqual
  )

  const isSingleParent: boolean = useSelector(
    (state: InitialStateType) => state.isSingleParent,
    shallowEqual
  )

  const decisionSourse: string = useSelector(
    (state: InitialStateType) => state.decisionSourse,
    shallowEqual
  )


  const dispatch: Dispatch<CombinedType> = useDispatch()

  const nextStage = React.useCallback(
    (stage: number) => dispatch(incrementStage(stage)),
    [dispatch]
  )

  const setCurrentZodiac = React.useCallback(
    (zodiac: string | null) => dispatch(setZodiac(zodiac)),
    [dispatch]
  )

  const setCurrentAge = React.useCallback(
    (age: number) => dispatch(setAge(age)),
    [dispatch]
  )

  const setCurrentEmail = React.useCallback(
    (email: string) => dispatch(setEmail(email)),
    [dispatch]
  )

  const mainBlock = ( stage: number ) => {
    switch(stage) {
      case 1:
        return <GenderSelection nextStage={nextStage} stage={stage} />
    
      case 2:
        return <BirthdaySelection nextStage={nextStage} stage={stage} setCurrentZodiac={setCurrentZodiac} setCurrentAge={setCurrentAge} />

      case 3:
        return <ZodiacSignPrediction nextStage={nextStage} stage={stage} zodiac={zodiac}/>

      case 4:
          return <RelationshipStatus nextStage={nextStage} stage={stage} />

      case 5:
          return <ParentSelection nextStage={nextStage} stage={stage} status={status} />

      case 6:
          return <FeelSelection nextStage={nextStage} stage={stage} status={status} gender={gender} age={age} isParent={isParent} isSingleParent={isSingleParent} />

      case 7:
          return <DecisionSelection nextStage={nextStage} stage={stage} />

      case 8:
          return <FullPrediction nextStage={nextStage} stage={stage} previousStage={previousStage} zodiac={zodiac} decisionSourse={decisionSourse} />
      
      case 9:
          return <EmailBlock setCurrentEmail={setCurrentEmail} />
    
      default:
        <main>Main content</main>
    }
  }


  return (
    <>
      { mainBlock(stage) }
    </>
  )
}

export default Main