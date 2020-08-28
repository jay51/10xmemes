import { combineReducers } from 'redux';
import * as Actions from "actions";

function posts(state={count:0, memes:[]}, action) {
  switch(action.type){
    case Actions.ADD_POSTS:
        return {...action.payload};

    default:
        return state;
  }

}

const rootReducer = combineReducers({
    posts,
})
export default rootReducer
