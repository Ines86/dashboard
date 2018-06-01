
const formReducerDefaultState = [];

export default (state = formReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_VALUES':
      return [
        ...state,
        action.person
      ];
    
    default:
      return state;
  }
};