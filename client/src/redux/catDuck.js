import axios from "axios";

//******************************CONSTANTS******************************
const initialData = {
  array: [],
  modalInsert: false,
  modalEdit: false,
  modalGps: false,
  filter: "",
  itemSelected: {
    id: 0,
    name: "",
    breed: "",
    description: "",
    latitude: "",
    longitude: "",
    image: "",
  },
  position: { lat: 10.471673707651417, lng: -84.6451719761451 },
  isMarkerShown: false,
};

//******************************TYPES******************************
const GET_CAT_INFO = "GET_CAT_INFO";
const SHOW_CLOSE_CAT_MODAL = "SHOW_CLOSE_CAT_MODAL";
const SHOW_CLOSE_CAT_MODAL_EDIT = "SHOW_CLOSE_CAT_MODAL_EDIT";
const SHOW_CLOSE_CAT_MODAL_GPS = "SHOW_CLOSE_CAT_MODAL_GPS";
const SET_FILTER_CAT = "SET_FILTER_CAT";
const ADD_CAT = "ADD_CAT";
const DELETE_CAT = "DELETE_CAT";
const SET_CAT_SELECTED_INFO = "SET_CAT_SELECTED_INFO";
const UPDATE_CAT = "UPDATE_CAT";
const SET_POSITION = "SET_POSITION";


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
    case SHOW_CLOSE_CAT_MODAL_GPS:
      return {
        ...state,
        modalGps: action.payload,
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
    case SET_POSITION:
      return {
        ...state,
        position: action.payload,
      };

    default:
      return state;
  }
}

//******************************ACTIONS******************************
export const setPositionActions = (latitude, longitude) => (dispatch, getState) => {
  try {
    dispatch({
      type: SET_POSITION,
      payload: { lat: latitude, lng: longitude },
    });
  } catch (error) {
    console.log(error);
  }
};
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

export const showCloseCatModalGpsActions = () => (dispatch, getState) => {
  const { modalGps } = getState().cat;
  try {
    dispatch({
      type: SHOW_CLOSE_CAT_MODAL_GPS,
      payload: !modalGps,
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

export const addCatActions = (item) => async (dispatch, getState) => {
  const { array } = getState().cat;
  try {
    let response = await axios.post(`cats`, item);
    if (response.status === 201) {
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

export const updateCatActions = (cat, id) => async (dispatch, getState) => {
  const { modalEdit, itemSelected } = getState().cat;
  try {
    console.log(cat);
    let res = await axios.patch(`cats/${itemSelected.id}`, cat);
    if (res.status === 200) {
      await axios.get(`cats`).then((response) => {
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

export const deleteCatActions = (id) => async (dispatch, getState) => {
  try {
    let response = await axios.delete(`cats/${id}`);
    if (response.status === 200) {
      let cats = await axios.get(`cats`);
      dispatch({
        type: DELETE_CAT,
        payload: {
          array: cats.data,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
