import React, { useEffect, useState } from 'react';
import "./index.css";
import axios from "axios";
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {API_URL} from '../config/constants.js'
import {Carousel} from 'antd';
import ProductCard from '../components/ProductCard.js';

//dayjs 설치시 같이 설치되는 relativeTime
//이렇게 선언 해주면 dayjs에서 확장 기능을 사용하곘다 라는 의미
dayjs.extend(relativeTime);

function MainPage(props) {
  const [products, setProducts] = useState([]);
  const [banners,setBanners] = useState([]);
  useEffect(()=>{
    axios.get(`${API_URL}/products`).then((result)=>{
      const products = result.data.products;
      setProducts(products);
    }).catch((error)=>{
      console.error("에러발생")
    });

    axios.get(`${API_URL}/banners`).then((result)=>{
      const banners = result.data.banners;
      setBanners(banners);
    }).catch((err)=>{
      console.log("에러 발생", err);
    })
  },[])
  

  return (
    <div>
      <Carousel autoplay autoplaySpeed={3000}>
        {
          banners.map((banner,index)=>{
            return (
              <Link to={banner.href}>
                <div id="banner">
                  <img src={`${API_URL}/${banner.imageUrl}`} />
                </div>
              </Link>
            )
          })
        }
      </Carousel>
      <h1 id='product-headline'>판매되는 상품들</h1>
      <div id="product-list">
        {
          products.map((product, index)=>{
            return (
              <ProductCard product={product} key={index}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default MainPage;