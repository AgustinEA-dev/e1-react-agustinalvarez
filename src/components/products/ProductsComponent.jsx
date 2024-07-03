import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductsSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #3e8eff;
`;

const ProductsH2Styled = styled.h2`
  font-size: 50px;
  font-family: "Rubik Mono One", monospace;
  color: white;
  text-align: center;
  padding: 40px;
  @media (max-width: 354px) {
    font-size: 35px;
  }
  @media (max-width: 260px) {
    font-size: 27px;
  }
  @media (max-width: 187px) {
    font-size: 18px;
  }
`;

const ProductsContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1080px;
  width: 80%;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 40px;
`;

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/category/electronics",
    })
      .then((res) => {
        console.log(res.data);
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
