import axios from "axios";

//******************************CONSTANTS******************************
const initialData = {
  array: [],
};

//******************************TYPES******************************
const GET_FRUIT_INFO = "GET_FRUIT_INFO";

//******************************REDUCER******************************
export default function catReducer(state = initialData, action) {
  switch (action.type) {
    case GET_FRUIT_INFO:
      return {
        ...state,
        array: action.payload.array,
      };
    

    default:
      return state;
  }
}

//******************************ACTIONS******************************
export const getStoreInfoActions = () => async (dispatch, getState) => {
  try {
    let response = await axios.get(`fuits`);
    if (response.status === 200) {
      dispatch({
        type: GET_FRUIT_INFO,
        payload: {
          array: response.data,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};