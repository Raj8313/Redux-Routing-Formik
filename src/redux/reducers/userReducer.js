const initialState = {
  loading: false,
  error: false,
  success: false,
  errorMessage: false,
  data: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
