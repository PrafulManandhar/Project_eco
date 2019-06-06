const initialState={
  data:{}
}

export function dataReducer(state=initialState,action){
  switch(action.type){
    case "POSITION":
      return {...state,data:action.payload}
    case "LOGOUT":
      return {...state,data:{}}
    default :
    return {...state}
  }
}