import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import clsx from 'clsx';

import { decrementStage, CombinedType } from "./store/actionCreators"
import { InitialStateType } from "../src/store/reducer"

import "./App.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";


function App() {


  const stage: number = useSelector(
    (state: InitialStateType) => state.stage,
    shallowEqual
  )

  const dispatch: Dispatch<CombinedType> = useDispatch()

  const previousStage = React.useCallback(
    (stage: number) => dispatch(decrementStage(stage)),
    [dispatch]
  )


  return (
    <div className={clsx('app', {'app-background': stage === 3 || stage === 8})}>
      <div className="workzone">
        <Header stage={stage} previousStage={previousStage}/>
        <Main stage={stage} previousStage={previousStage} />
        <Footer stage={stage} />
      </div>
    </div>
  );
}

export default App;
