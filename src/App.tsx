import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import clsx from 'clsx';

import { incrementStage, decrementStage, setZodiac, setAge } from "./store/actionCreators"
import { InitialStateType } from "../src/store/reducer"

import "./App.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main_1 from "./components/main/main_1/Main_1";
import Main_2 from "./components/main/main_2/Main_2";
import Main_3 from "./components/main/main_3/Main_3";
import Main_4 from "./components/main/main_4/Main_4";
import Main_5 from "./components/main/main_5/Main_5";
import Main_6 from "./components/main/main_6/Main_6";
import Main_7 from "./components/main/main_7/Main_7";
import Main_8 from "./components/main/main_8/Main_8";
import Main_9 from "./components/main/main_9/Main_9";


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


  const dispatch: Dispatch<any> = useDispatch()


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

  
  const mainBlock = () => {
    switch(stage) {
      case 1:
        return <Main_1 nextStage={nextStage} stage={stage} />
    
      case 2:
        return <Main_2 nextStage={nextStage} stage={stage} setCurrentZodiac={setCurrentZodiac} setCurrentAge={setCurrentAge} />

      case 3:
        return <Main_3 nextStage={nextStage} stage={stage} zodiac={zodiac}/>

      case 4:
          return <Main_4 nextStage={nextStage} stage={stage} />

      case 5:
          return <Main_5 nextStage={nextStage} stage={stage} status={status} />

      case 6:
          return <Main_6 nextStage={nextStage} stage={stage} status={status} gender={gender} age={age} isParent={isParent} isSingleParent={isSingleParent} />

      case 7:
          return <Main_7 nextStage={nextStage} stage={stage} />

      case 8:
          return <Main_8 nextStage={nextStage} stage={stage} previousStage={previousStage} zodiac={zodiac} decisionSourse={decisionSourse} />
      
      case 9:
          return <Main_9 />
    
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
