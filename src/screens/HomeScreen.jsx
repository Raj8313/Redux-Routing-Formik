import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../services/AxiosInstance";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // useEffect lo promise based syntax
    // AxiosInstance.get("/products")
    //   .then((res) => {
    //     console.log("result", res.data);
    //     setProducts(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("Error", err);
    //   });

    /**
     * ASYNC AWAIT SYNTAX
     * rendu combination lo vadalsina keywords
     * - idi oka simple arrow funtion
     * - daaniki mundu async ane keyword add cheyali
     * - yekkada ayte network request perform chestunnavo daaniki mundu
     *   await keyword add cheyali
     *
     * await add cheste.. network request(server nundi data ravadaniki time padutundi)
     * data vache varaku next line execution aputunnatu..
     */

    const loadInitialData = async () => {
      const result = await AxiosInstance.get("/products");
      console.log(result.data);
      setProducts(result.data);
    };
    loadInitialData();
  }, []);

  return (
    <div>
      <h1>LATEST PRODUCTS</h1>

      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-md-3 my-3" key={product._id}>
              <div className="card h-100">
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} className="img-fluid" />
                </Link>

                <div className="card-body">
                  <Link to={`/products/${product.id}`}>
                    <h4 className="fw-bold card-title">{product.name} </h4>
                  </Link>

                  <h5>Price: Rs.{product.price}/- </h5>
                  <h6 className="card-text">{product.description} </h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
