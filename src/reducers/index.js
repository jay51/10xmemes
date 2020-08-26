import { combineReducers } from 'redux'

function posts(state={count:0, memes:[]}, action) {
  switch(action.type){
    case "ADD_POSTS":
        return {...action.payload};

    default:
        return state;
  }

}

const rootReducer = combineReducers({
    posts,
})
export default rootReducer
