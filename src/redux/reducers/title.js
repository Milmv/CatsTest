const initialState = {
    items: [],
    isLoaded: false,
  };
  
  const title = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TITLE':
        return {
          ...state,
          items: action.payload,
          isLoaded: true,
        };
  
  
      default:
        return state;
    }
  };
  
  export default title;