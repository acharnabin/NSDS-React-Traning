import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../ReduxToolkit/Cart.slice";

const ProductCard = ({ item, index }) => {
  const { cartHash, cartItems } = useSelector((s) => s.cart_slice);

  const dispatch = useDispatch();

  const handleItemAddToCart = () => {
    // addToCart(item)
    dispatch(addToCart(item));
  };

  const RemoveFromCart = () => {
    // find the index from cartItems
    let find_index = cartItems?.findIndex((_item) => _item?.id === item?.id);

    let payload={
      id:item?.id, index:find_index
    }

    dispatch(removeFromCart(payload));
  };

  return (
    <div className="col-4">
     {console.log(item,"item")}
      <div className="card">
        <img className="card-img-top" src={item?.image} alt={item?.title} />
        <div className="card-body">
          <h5 className="card-title">{item?.title}</h5>
          <p className="card-text">{item?.description}</p>
          <Link to={`/product-details/${item.id}`} className="btn btn-primary">
            $ {item?.price}
          </Link>

          {cartHash[item?.id] ? (
            <button className="btn btn-primary m-2" onClick={RemoveFromCart}>
              Remove from cart
            </button>
          ) : (
            <button
              className="btn btn-secondary m-2"
              onClick={handleItemAddToCart}
            >
              Add to cart +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
