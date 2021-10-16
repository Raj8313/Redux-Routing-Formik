import products from "../products";
import { Link } from "react-router-dom";

// we have used ProductScreen (as component) in routing , so routing gives us object, match is one of property in that object
// products.find (we are trying to match id's of the products in productscreen, so that related product information can be displayed)
const ProductScreen = ({ match }) => {
  const product = products.find((p) => p.id == match.params.id);

  return (
    <div>
      <Link className="btn btn-dark my-2" to="/">
        Go Back
      </Link>
      <div className="conatiner">
        <div className="row">
          <div className="col-md-3">
            <img src={product.image} className="img-fluid" />
          </div>
          <div className="col-md-3">
            <h4 className="my-2">{product.name}</h4>
            <h5 className="border-top ">Brand : {product.brand} </h5>
            <div> Rating : {product.rating} </div>
            <div className="border-top my-4">{product.description} </div>
          </div>
          <div className="col-md-3">
            <div className="border text-center p-2">
              Price : Rs. {product.price} /-
            </div>
            <div className="border text-center p-2">
              Stock : {product.CountInStock > 0 ? "In Stock" : "Out Of Stock"}
            </div>
            <div className="border text-center p-2">
              <button
                type="button"
                class="btn btn-dark"
                disabled={product.CountInStock == 0}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
