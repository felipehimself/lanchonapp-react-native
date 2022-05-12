const reducer = (state, action) => {
  switch (action.type) {
    case 'FAVORITAR':
      return {
        ...state,
        foods: state.foods.map((food) => {
          if (food.id === action.payload.id) {
            return { ...food, favoritado: !food.favoritado };
          }

          return food;
        }),
      };

    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };

    default:
      return state;
  }
};

export default reducer;
