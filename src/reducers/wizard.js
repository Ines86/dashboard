const wizardReducerDefaultState = [];

export default (state = wizardReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_WIZARD_VALUES':
      return [
        ...state,
        action.person
      ];
    
    default:
      return state;
  }
};