//all reducers get to arguments, the current state and an action
//reducers are only ever called when an action occurs
//State argument is not application state, only the state this reducer is responsible for
//default state to null so react doesnt get mad about it being undefined on initalization
export default function(state=null, action){
  //switch statement to check action type
  switch(action.type){
    case 'BOOK_SELECTED':
      //always return a fresh object, never try to change state
      return action.payload;
  }
  //base case if we dont care about the action
  return state
}