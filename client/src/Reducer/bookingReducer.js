const initialState = {
  bookingInfo:{}
};

export function bookingReducer(state=initialState,action){
  switch(action.type){
    case "DATA":
      return{...state,bookingInfo:action.payload}
    case "CLEAR":
      return{bookingInfo:{}}
    default:
      return {...state}
  }
}
