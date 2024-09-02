import {  AnyAction, createStore } from "redux";
import { CLEAR_ALL, HAPPY_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "./actionsCreator";


export type Moments={
  intensity:number,
  when:Date,
}
export type State ={
  sadMoments: Moments[],
  happyMoments:Moments[],
}

export const initialState:State = {
  sadMoments: [],
  happyMoments:[],
}
//register has to be non mutating 
function reducer(currentState = initialState, action:AnyAction){
  switch(action.type){
    case HAPPY_BUTTON_CLICKED:
      return {...currentState, happyMoments:[...currentState.happyMoments,{intensity:action.payload.count,when:action.payload.date}]};
    case SAD_BUTTON_CLICKED:
      return {...currentState, sadMoments:[...currentState.sadMoments,{intensity:action.payload.count,when:action.payload.date}]};
    case CLEAR_ALL:
      return initialState;
    default:
      return currentState;
  }
}

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;