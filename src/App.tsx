import "./App.css";

import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import Stage_1 from "./stages/stage_1/Stage_1";
import Stage_2 from "./stages/stage_2/Stage_2";
import Stage_3 from "./stages/stage_3/Stage_3";
import Stage_4 from "./stages/stage_4/Stage_4";
import Stage_5 from "./stages/stage_5/Stage_5";
import Stage_6 from "./stages/stage_6/Stage_6";
import Stage_7 from "./stages/stage_7/Stage_7";
import Stage_8 from "./stages/stage_8/Stage_8";
import Stage_9 from "./stages/stage_9/Stage_9";

import { incrementStage, decrementStage } from "./store/actionCreators"
import { Dispatch } from "redux"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


function App() {


  const stage: number = useSelector(
    (state: StagesState) => state.stage,
    shallowEqual
  )

/*   const title: string = useSelector(
    (state: StagesState) => state.title,
    shallowEqual
  ) */

  const dispatch: Dispatch<any> = useDispatch()

  const previousStage = React.useCallback(
    (stage: number) => dispatch(decrementStage(stage)),
    [dispatch]
  )

  const nextStage = React.useCallback(
    (stage: number) => dispatch(incrementStage(stage)),
    [dispatch]
  )



  const mainBlock = () => {
    switch(stage) {
      case 1:
        return <Stage_1 nextStage={nextStage} stage={stage} />
    
      case 2:
        return <Stage_2 nextStage={nextStage} stage={stage}  />

      case 3:
        return <Stage_3 nextStage={nextStage} stage={stage} />

      case 4:
          return <Stage_4 nextStage={nextStage} stage={stage} />

      case 5:
          return <Stage_5 nextStage={nextStage} stage={stage} variant="parent"/>

      case 6:
          return <Stage_6 nextStage={nextStage} stage={stage} variant="parent" gender="male" age={25} hasChildren={true} />

      case 7:
          return <Stage_7 nextStage={nextStage} stage={stage} variant="parent" />

      case 8:
          return <Stage_8  nextStage={nextStage} stage={stage} previousStage={previousStage} variant="heart" gender="string" age={41} hasChildren={true} zodiac="string" />
      
      case 9:
          return <Stage_9 nextStage={nextStage} stage={stage} variant="string" />
    
      default:
        <p>Hello Life</p>
    }
  }


  return (
    <div className="App">
      <div className="workzone">
        <Header stage={stage} previousStage={previousStage}/>
        {
          mainBlock()
        }
        <Footer stage={stage} />
      </div>
    </div>
  );
}

export default App;
