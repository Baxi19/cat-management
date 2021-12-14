//******************************CONSTANTS******************************
const initialData = {
  cart: [],
  containers: [
    {
      "id": 1,
      "quantity": 4
    },
    {
      "id": 2,
      "quantity": 4
    },
    {
      "id": 3,
      "quantity": 4
    },
    {
      "id": 4,
      "quantity": 4
    },
  ],
  fruits: [
    {
      "id": 1,
      "price": 1,
      "fruit":"orange",
      "container_id": 1,
      "image":"https://media.istockphoto.com/photos/orange-fruit-isolated-on-a-white-background-picture-id494037460?k=20&m=494037460&s=612x612&w=0&h=Z4hhSeqbMziYlDlawDjiAMH952vSl_C4KI_lU6aEZ1c=",
    },
    {
      "id": 2,
      "price": 1,
      "fruit":"orange",
      "container_id": 1,
      "image":"https://media.istockphoto.com/photos/orange-fruit-isolated-on-a-white-background-picture-id494037460?k=20&m=494037460&s=612x612&w=0&h=Z4hhSeqbMziYlDlawDjiAMH952vSl_C4KI_lU6aEZ1c=",
    },
    {
      "id": 3,
      "price": 1,
      "fruit":"orange",
      "container_id": 1,
      "image":"https://media.istockphoto.com/photos/orange-fruit-isolated-on-a-white-background-picture-id494037460?k=20&m=494037460&s=612x612&w=0&h=Z4hhSeqbMziYlDlawDjiAMH952vSl_C4KI_lU6aEZ1c=",
    },
    {
      "id": 4,
      "price": 1,
      "fruit":"orange",
      "container_id": 1,
      "image":"https://media.istockphoto.com/photos/orange-fruit-isolated-on-a-white-background-picture-id494037460?k=20&m=494037460&s=612x612&w=0&h=Z4hhSeqbMziYlDlawDjiAMH952vSl_C4KI_lU6aEZ1c=",
    },
    {
      "id": 5,
      "price": 1,
      "fruit":"orange",
      "container_id": 2,
      "image":"https://media.istockphoto.com/photos/orange-fruit-isolated-on-a-white-background-picture-id494037460?k=20&m=494037460&s=612x612&w=0&h=Z4hhSeqbMziYlDlawDjiAMH952vSl_C4KI_lU6aEZ1c=",
    },
    {
      "id": 6,
      "price": 1,
      "fruit":"orange",
      "container_id": 2,
      "image":"https://media.istockphoto.com/photos/orange-fruit-isolated-on-a-white-background-picture-id494037460?k=20&m=494037460&s=612x612&w=0&h=Z4hhSeqbMziYlDlawDjiAMH952vSl_C4KI_lU6aEZ1c=",
    },
    {
      "id": 7,
      "price": 2,
      "fruit":"apple",
      "container_id": 3,
      "image":"https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
    },
    {
      "id": 8,
      "price": 2,
      "fruit":"apple",
      "container_id": 3,
      "image":"https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
    },
    {
      "id": 9,
      "price": 2,
      "fruit":"apple",
      "container_id": 3,
      "image":"https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
    },
    {
      "id": 10,
      "price": 2,
      "fruit":"apple",
      "container_id": 3,
      "image":"https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
    }, 
  ],
};

//******************************TYPES******************************
const GET_CONTAINERS= "GET_CONTAINERS";
const GET_FRUITS = "GET_FRUITS";
const ADD_CART = "ADD_CART";
const GET_ALL_FRUITS = "GET_ALL_FRUITS";
const GET_CART = "GET_CART";

//******************************REDUCER******************************
export default function catReducer(state = initialData, action) {
  switch (action.type) {
    case GET_CONTAINERS:
      return {
        ...state,
        containers: action.payload.containers,
      };
    case GET_FRUITS:
      return {
        ...state,
        fruits: action.payload.fruits,
      };
    case ADD_CART:
      return {
        ...state,
        fruits: action.payload.fruits,
        cart: action.payload.cart,
      };
    case GET_ALL_FRUITS:
      return {
        ...state,
        fruits: action.payload.fruits,
      };
    case GET_CART:
      return {
        ...state,
        cart: action.payload.cart,
      };
    
    default:
      return state;
  }
}

//******************************ACTIONS******************************
export const addCartActions = (fruits, buy) => async (dispatch, getState) => {
  const { cart } = getState().store;
  try {
    dispatch({
        type: GET_FRUITS,
        payload: {
          cart: cart.push(buy),
          fruits: fruits,
        },
    }); 
  } catch (error) {
    console.log(error);
  }
};


export const getStoreContainersActions = () => async (dispatch, getState) => {
  const { containers } = getState().store;
  try {
    dispatch({
        type: GET_CONTAINERS,
        payload: {
          containers: containers,
        },
    }); 
  } catch (error) {
    console.log(error);
  }
};

export const getStoreFruitsActions = (id) => async (dispatch, getState) => {
  const { fruits } = getState().store;
  try {
    dispatch({
        type: GET_FRUITS,
        payload: {
          fruits: fruits,
        },
    }); 
  } catch (error) {
    console.log(error);
  }
};

export const getFruitsActions = () => async (dispatch, getState) => {
  const { fruits } = getState().store;
  try {
    dispatch({
        type: GET_ALL_FRUITS,
        payload: {
          fruits: fruits,
        },
    }); 
  } catch (error) {
    console.log(error);
  }
};

export const getCartActions = () => async (dispatch, getState) => {
  const { cart } = getState().store;
  try {
    dispatch({
        type: GET_CART,
        payload: {
          cart: cart,
        },
    }); 
  } catch (error) {
    console.log(error);
  }
};