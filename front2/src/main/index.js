import React, { useEffect, useState } from 'react';
import "./index.css";
import axios from "axios";
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {API_URL} from '../config/constants.js'

//dayjs 설치시 같이 설치되는 relativeTime
//이렇게 선언 해주면 dayjs에서 확장 기능을 사용하곘다 라는 의미
dayjs.extend(relativeTime);

function MainPage(props) {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}/products`).then((result)=>{
      const products = result.data.products;
      setProducts(products);
    }).catch((error)=>{
      console.error("에러발생")
    });
  },[])
  

  return (
    <div>
      <div id="banner">
          <img src="images/banners/banner1.png" />
      </div>
      <h1 id='product-headline'>판매되는 상품들</h1>
      <div id="product-list">
        {
          products.map((product, index)=>{
            return (
              <div className='product-card' key={index}>
                <Link className='product-link' to={`/products/${product.id}`}>
                  <div>
                    <img className='product-img' src={`${API_URL}/${product.imageUrl}`}/>
                  </div>
                  <div className='product-contents'>
                    <span className='product-name'>{product.name}</span>
                    <span className='product-price'>{product.price}원</span>
                    <div className='product-footer'>
                      <div className='product-seller'>
                        <img className='product-avatar' src='images/icons/avatar.png'/>
                        <span>{product.seller}</span>
                      </div>
                      <span className='product-date'>{dayjs(product.createdAt).fromNow()}</span>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default MainPage;