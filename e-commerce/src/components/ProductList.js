import React from "react";
import withContext from "../withContext";
import ProductItem from "./ProductItem";

const ProductList = props => {
  const { products } = props.context;
  return (
    <>
        <div>
          <h6 className="title"><center>Flatiron Exclusive Merchandise</center></h6>
        </div>
      <div className="container">
        <center>
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
          </center>
      </div>
    </>
  );
};

export default withContext(ProductList);
