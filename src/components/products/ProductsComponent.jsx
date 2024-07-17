import {
  ProductsContainerStyled,
  ProductsH2Styled,
  ProductsSectionStyled,
} from "./productsStyles";

import { useState, useEffect } from "react";
import axios from "axios";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/category/electronics",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <ProductsSectionStyled>
        <ProductsH2Styled>Bestbuy!</ProductsH2Styled>
        <ProductsContainerStyled className="product-container">
          {data.map((product) => (
            <div className="card-container" key={product.id}>
              <div className="img-container">
                <img className="card-img" src={product.image} alt="" />
              </div>
              <h3 className="card-h3">{product.title}</h3>
              <h4 className="card-h4">{product.category}</h4>
              <h4 className="card-price">${product.price}</h4>
              <button className="add-btn">Add to cart</button>
              <hr />
            </div>
          ))}
        </ProductsContainerStyled>
      </ProductsSectionStyled>
    </>
  );
}

export default Products;
