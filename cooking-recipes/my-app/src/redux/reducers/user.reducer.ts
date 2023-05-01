

const initialState = {
  name: '',
  email: '',
  isLogIn: false,
  RecipesDBCollectionId: '',
  userDBCollectionId: '',
};
console.log("amirr")
console.log("amirr")
function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        name: action.payload.displayName,
        email: action.payload.email,
        isLogIn: true,
        RecipesDBCollectionId: action.payload.RecipesDBCollectionId,
        userDBCollectionId:  action.payload.userDBCollectionId
      };
    case 'LOGOUT':
      return {
        ...state,
        name: '',
        email: '',
        isLogIn: false,
        RecipesDBCollectionId: '',
        userDBCollectionId:  ''
      };
    default:
      return state;
  }
}

export default userReducer;