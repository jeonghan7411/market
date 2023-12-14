import React, { useEffect, useState } from 'react';
import "./index.css";
import axios from "axios";
import {Link} from 'react-router-dom';

function MainPage(props) {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get("https://a1df68c2-74f7-428f-b34e-b9393873ddee.mock.pstmn.io/products").then((result)=>{
      const products = result.data.products;
      setProducts(products);
    }).catch((error)=>{
      console.error("에러발생")
    });
  },[])
  

  return (
    <div>
      <div id="header">
          <div id="header-area">
              <img src="images/icons/logo.png" />
          </div>
      </div>
      <div id="body">
          <div id="banner">
              <img src="images/banners/banner1.png" />
          </div>
          <h1>판매되는 상품들</h1>
          <div id="product-list">
            {
              products.map((product, index)=>{
                return (
                  <div className='product-card' key={index}>
                    <Link className='product-link' to={`/products/${product.id}`}>
                      <div>
                        <img className='product-img' src={product.imageUrl}/>
                      </div>
                      <div className='product-contents'>
                        <span className='product-name'>{product.name}</span>
                        <span className='product-price'>{product.price}원</span>
                        <div className='product-seller'>
                          <img className='product-avatar' src='images/icons/avatar.png'/>
                          <span>{product.seller}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })
            }
          </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;