//contain all the action creators that we make
//action creators return an action which will run through all the reducers
export function selectBook(book){
  //selectBook is an action creator, it needs to return an action (An object with a type property (always) and a payload (sometimes))
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

