import React from "react";
import withContext from "../withContext";
import ProductItem from "./ProductItem";

const ProductList = props => {
  const { products } = props.context;
  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Flatiron Exclusive Merchandise</h4>
        </div>
      </div>
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No products!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);
