import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes, useParams } from "react-router";
import { addToCart, removeFromCart } from "../../ReduxToolkit/Cart.slice";

const ProductDetails = () => {
  const params = useParams();
  const { cartHash, cartItems } = useSelector((s) => s.cart_slice);

  const dispatch = useDispatch();

  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);

  const GetProductData = async () => {
    setloading(true);
    let res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
    setloading(false);
    setdata(res.data);
  };

  useEffect(() => {
    GetProductData();
  }, []);

  const handleItemAddToCart = (_item) => {
    // addToCart(item)
    dispatch(addToCart(_item));
  };

  const RemoveFromCart = (_item) => {
    // find the index from cartItems
    let find_index = cartItems?.findIndex((item) => item?.id === _item?.id);

    let payload = {
      id: _item?.id,
      index: find_index,
    };

    dispatch(removeFromCart(payload));
  };

  return (
    <>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <div class="container" id="product_view">
          <div class="card">
            <div class="">
              <div class="card-header">
                <a href="#" data-dismiss="modal" class="class pull-right">
                  <span class="glyphicon glyphicon-remove"></span>
                </a>
                <h3 class="card-title">{data?.title}</h3>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 product_img">
                    <img
                      src={data?.image}
                      alt={data?.title}
                      style={{
                        height: 500,
                        width: 500,
                      }}
                      class="img-responsive"
                    />
                  </div>
                  <div class="col-md-6 product_content">
                    <h4>
                      Product Id: <span>{data?.id}</span>
                    </h4>
                    <div class="rating">
                      <span class="glyphicon glyphicon-star"></span>
                      <span class="glyphicon glyphicon-star"></span>
                      <span class="glyphicon glyphicon-star"></span>
                      <span class="glyphicon glyphicon-star"></span>
                      <span class="glyphicon glyphicon-star"></span>(
                      {data?.rating?.count} reviews)
                    </div>
                    <p>{data?.description}</p>
                    <h3 class="cost">
                      <span class="glyphicon glyphicon-usd"></span>${" "}
                      {data?.price}
                    </h3>

                    <div class="btn-ground">
                      {cartHash[data?.id] ? (
                        <button
                          className="btn btn-primary m-2"
                          onClick={() => RemoveFromCart(data)}
                        >
                          Remove from cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-secondary m-2"
                          onClick={() => handleItemAddToCart(data)}
                        >
                          Add to cart +
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
