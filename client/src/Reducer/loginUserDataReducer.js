const initialState = {
  userInfo:{}
  
};

export function loginUserDataReducer(state=initialState,action){
  switch(action.type){
    case "DATA":
      return{...state,userInfo:action.payload}
    case "CLEAR":
      return{userInfo:{}}
    default:
      return {...state}
  }
}
