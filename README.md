Redux flow chart

# Redux setup

1. npm install redux and react-redux
2. redux folder-> reducer folder-> reducer.js (combinedReducer if you have more reducers)
3. store folder-> store.js -> import {createStore} from "redux" and import rootReducer from index.js (rootReducers)
4. import {Provider} from "react-redux" and wrap App component with provider and pass store as component
5. create constants folder-> index.js (create action type object )
6. npm install axios and create .env variables and axiosInstance folder -> AxiosInstance.js
7. middleware folder-> middleware.js

Redux workflow App.js ->middleware.js->reducer.js
