const initialState = {
    activeTab: 'Home',
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ACTIVE_TAB':
        return {
          ...state,
          activeTab: action.payload,
        };
      default:
        return state;
    }
  };
  