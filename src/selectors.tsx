import { initialState, State } from "./store";

export function happyCountSelector(state:State=initialState){
  return state.happyMoments;
}
export function sadCountSelector(state:State=initialState){
  return state.sadMoments;
}
