import axios from "axios";

//******************************CONSTANTS******************************
const initialData = {
  array: [],
  modalInsert: false,
  modalEdit: false,
  filter: "",
  itemSelected: {
    id: 0,
    name: "",
  },
};

//******************************TYPES******************************
const GET_CAT_INFO = "GET_CAT_INFO";
const SHOW_CLOSE_CAT_MODAL = "SHOW_CLOSE_CAT_MODAL";
const SHOW_CLOSE_CAT_MODAL_EDIT = "SHOW_CLOSE_CAT_MODAL_EDIT";
const SET_FILTER_CAT = "SET_FILTER_CAT";
const ADD_CAT = "ADD_CAT";
const DELETE_CAT = "DELETE_CAT";
const SET_CAT_SELECTED_INFO = "SET_CAT_SELECTED_INFO";
const UPDATE_CAT = "UPDATE_CAT";

//******************************REDUCER******************************
export default function catReducer(state = initialData, action) {
  switch (action.type) {
    case GET_CAT_INFO:
      return {
        ...state,
        array: action.payload.array,
      };
    case SHOW_CLOSE_CAT_MODAL:
      return {
        ...state,
        modalInsert: action.payload,
      };
    case SHOW_CLOSE_CAT_MODAL_EDIT:
      return {
        ...state,
        modalEdit: action.payload,
      };
    case SET_FILTER_CAT:
      return {
        ...state,
        filter: action.payload.filter,
      };
    case ADD_CAT:
      return {
        ...state,
        modalInsert: action.payload.modalInsert,
        array: action.payload.array,
      };
    case DELETE_CAT:
      return {
        ...state,
        array: action.payload.array,
      };
    case SET_CAT_SELECTED_INFO:
      return {
        ...state,
        itemSelected: action.payload.itemSelected,
      };
    case UPDATE_CAT:
      return {
        ...state,
        array: action.payload.array,
        modalEdit: action.payload.modalEdit,
      };

    default:
      return state;
  }
}

//******************************ACTIONS******************************



export const showCloseCatModalActions = () => (dispatch, getState) => {
  const { modalInsert } = getState().cat;
  try {
    dispatch({
      type: SHOW_CLOSE_CAT_MODAL,
      payload: !modalInsert,
    });
  } catch (error) {
    console.log(error);
  }
};

export const showCloseCatModalEditActions = () => (dispatch, getState) => {
  const { modalEdit } = getState().cat;
  try {
    dispatch({
      type: SHOW_CLOSE_CAT_MODAL_EDIT,
      payload: !modalEdit,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setFilterActions = (filter) => (dispatch, getState) => {
  try {
    dispatch({
      type: SET_FILTER_CAT,
      payload: {
        filter: filter,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCatInfoActions = () => async (dispatch, getState) => {
  try {
    let response = await axios.get(`cats`);
    if (response.status === 200) {
      dispatch({
        type: GET_CAT_INFO,
        payload: {
          array: response.data,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

/*

export const addCatActions = (item) => async (dispatch, getState) => {
  try {
    let response = await axios.post(`Role`, item);
    if (response.status === 200) {
      array.push(response.data);
      dispatch({
        type: ADD_CAT,
        payload: {
          modalInsert: false,
          array: array,
        },
      });
    } 
  } catch (error) {
    console.log(error);
  }
};

export const deleteCatActions = (id) => async (dispatch, getState) => {
  const { idToken } = getState().auth;
  const headers = { headers: { Authorization: `Bearer ${idToken}` } };

  try {
    let response = await axios.delete(`Role/${id}`, headers);
    if (response.status === 200) {
      let roles = await axios.get(`Role`, headers);
      dispatch({
        type: DELETE_CAT,
        payload: {
          array: roles.data,
          page_number: 1,
        },
      });
    } 
  } catch (error) {
    console.log(error);
  }
};

export const setCatSelectedActions = (itemSelected) => (dispatch, getState) => {
    try {
      dispatch({
        type: SET_CAT_SELECTED_INFO,
        payload: {
          itemSelected: itemSelected,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updateCatActions = (role) => async (dispatch, getState) => {
  const { modalEdit } = getState().cat;
  try {
    let res = await axios.patch(`Role/${role.id}`, role, headers);
    if (res.status === 200) {
      await axios.get(`Role`, headers).then((response) => {
        dispatch({
          type: UPDATE_CAT,
          payload: {
            array: response.data,
            modalEdit: !modalEdit,
          },
        });
      });
    } 
  } catch (error) {
    console.log(error);
  }
};
*/