import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import clsx from 'clsx';

import { incrementStage, decrementStage, setZodiac, setAge, setEmail, CombinedType } from "./store/actionCreators"
import { InitialStateType } from "../src/store/reducer"

import "./App.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GenderSelection from "./components/main/gender_selection/GenderSelection";
import BirthdaySelection from "./components/main/birthday_selection/BirthdaySelection";
import ZodiacSignPrediction from "./components/main/zodiac_sign_prediction/ZodiacSignPrediction";
import RelationshipStatus from "./components/main/relationship_status/RelationshipStatus";
import ParentSelection from "./components/main/parent_selection/ParentSelection";
import FeelSelection from "./components/main/feel_selection/FeelSelection";
import DecisionSelection from "./components/main/decision_selection/DecisionSelection";
import FullPrediction from "./components/main/full_prediction/FullPrediction";
import EmailBlock from "./components/main/email_block/EmailBlock";


function App() {

  const stage: number = useSelector(
    (state: InitialStateType) => state.stage,
    shallowEqual
  )

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


  const previousStage = React.useCallback(
    (stage: number) => dispatch(decrementStage(stage)),
    [dispatch]
  )

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

  
  const mainBlock = () => {
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
    <div className={clsx('app', {'app-background': stage === 3 || stage === 8})}>
      <div className="workzone">
        <Header stage={stage} previousStage={previousStage}/>
        { mainBlock() }
        <Footer stage={stage} />
      </div>
    </div>
  );
}

export default App;
