import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LOADING_INITIAL_IMAGES } from "./redux/constants/index";

const App = () => {
  const productReducer = useSelector(
    (globalStore) => globalStore.productReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOADING_INITIAL_IMAGES.REQUEST });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container">
          <div className="row">
            <div className="col-md-12">
              <Route path="/" component={HomeScreen} exact />
              <Route path="/products/:id" component={ProductScreen} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
