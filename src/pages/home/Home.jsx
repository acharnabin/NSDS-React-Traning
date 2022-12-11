import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../../component/productCard/ProductCard";
import { removeFromCart } from "../../ReduxToolkit/Cart.slice";
import {
  filterByPrice,
  GetProductData,
  searchByName,
} from "../../ReduxToolkit/product.slice";

const Home = () => {
  const [search, setsearch] = useState("");
  const [filter_price, setFilter_price] = useState(0);
  const dispatch = useDispatch();
  const { cartItems, count } = useSelector((store) => store.cart_slice);
  const { data, status, error } = useSelector((state) => state.product);

  // remove from cart
  const handleRemoveFromCart = (_id, _index) => {
    let payload = {
      id: _id,
      index: _index,
    };

    dispatch(removeFromCart(payload));
  };

  // price filter by redux
  const handlePriceFilter = (_price) => {
    setFilter_price(_price);
    dispatch(filterByPrice(_price));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchByName(search));
  };

  useEffect(() => {
    dispatch(GetProductData());
  }, []);

  return (
    <div className="container">
      <div className="card p-2 mb-3">
        <h2>Cart({cartItems?.length})</h2>

        <div className="d-flex flex-wrap">
          {cartItems?.map((item, index) => {
            return (
              <div className="card m-1">
                <div className="card-body">
                  <h5 className="card-title">{item?.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {item?.price}
                  </h6>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromCart(item?.id, index)}
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {status !== "loading" && (
        <div className="card p-2 mb-3">
          <h1>Price filter - {filter_price}</h1>
          <div>
            <button
              className="btn btn-primary mx-2"
              onClick={() => handlePriceFilter(100)}
            >
              Under 100
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={() => handlePriceFilter(200)}
            >
              Under 200
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={() => handlePriceFilter(500)}
            >
              Under 500
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={() => handlePriceFilter(1000)}
            >
              Under 1000
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSearch}>
        <input
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="input"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {status === "loading" ? (
        <h1>Loading.....</h1>
      ) : (
        <>
          {data?.length === 0 && <h1>No product found</h1>}

          {data?.length > 0 && (
            <>
              <div className="row">
                <h3 className="text-danger">Products- {data?.length}</h3>
                {data?.map((item, index) => {
                  return <ProductCard index={index} item={item} />;
                })}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
