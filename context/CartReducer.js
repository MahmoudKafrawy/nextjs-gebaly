const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return (state = [...state, action.payload]);
    }
    case "REMOVE": {
      let arr = [...state];
      var index = arr.indexOf(action.payload);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return (state = [...arr]);
    }
    default:
      return state;
  }
};

export default CartReducer;
