const initialState = {
    items: [],
    isLoaded: false,
  };
  
  const cats = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CATS':
        return {
          ...state,
          items: action.payload,
          isLoaded: true,
        }
  
  
      default:
        return state;
    }
  };
  
  export default cats;