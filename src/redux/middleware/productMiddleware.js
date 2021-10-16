import { LOADING_INITIAL_IMAGES } from "../constants";
import AxiosInstance from "../../services/AxiosInstance";

const productMiddleware = (store) => (next) => async (action) => {
  const { dispatch, getState } = store; //remember
  //   console.log("getState", getState());
  next(action); //remember
  switch (action.type) {
    case LOADING_INITIAL_IMAGES.REQUEST:
      dispatch({ type: LOADING_INITIAL_IMAGES.LOADING });
      try {
        const response = await AxiosInstance.get("/products");
        dispatch({
          type: LOADING_INITIAL_IMAGES.SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: LOADING_INITIAL_IMAGES.ERROR,
          payload: error.message,
        });
      }

    default:
      break;
  }
};

export default productMiddleware;
