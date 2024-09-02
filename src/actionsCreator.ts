export const HAPPY_BUTTON_CLICKED = "happy button clicked";
export const SAD_BUTTON_CLICKED = "sad button clicked";
export const CLEAR_ALL = "clear all";
export function happyButtonClicked(count:number,date:Date){
  return{
     type:HAPPY_BUTTON_CLICKED,
     payload:{
      count:count,
      date:date,
     }
  }
}
export function sadButtonClicked(count:number,date:Date){
  return{
  type:SAD_BUTTON_CLICKED,
  payload:{
    count:count,
    date:date,
  }
  }
}

export function clearAllButtonClicked(){
  return {
    type:CLEAR_ALL
  }
}