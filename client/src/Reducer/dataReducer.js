const initialState={
  data:{}
}

export function dataReducer(state=initialState,action){
  switch(action.type){
    case "POSITION":
      return {...state,data:action.payload}
    case "LOGOUT":
      return {data:{}}
    default :
    return {...state}
  }
}