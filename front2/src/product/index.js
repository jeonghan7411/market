import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import Loading from '../common/loading';
import './index.css';
import {API_URL} from '../config/constants.js'
import dayjs from 'dayjs';
import {Button, message} from 'antd';
import ProductCard from '../components/ProductCard.js';


function ProductPage() {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const getProduct = () => {
    axios.get(`${API_URL}/products/${id}`).then((res)=>{
      setProduct(res.data.products);
    }).catch((error)=>{
      console.error(error);
    })
  };

  const getRecommendations = () => {
    axios.get(`${API_URL}/products/${id}/recommendation`)
    .then((result)=>{
      setProducts(result.data.products);
    }).catch((error)=>{
      console.error(error);
    })
  }

  useEffect(()=>{
    getProduct();
    getRecommendations();
  },[id]);

  // 로딩중
  if (!product) {
    return <Loading />; 
  }

  const onClickPurchase = () =>{
    axios.post(`${API_URL}/purchase/${id}`)
    .then((result)=>{
      getProduct();
      message.info("구매가 완료되었습니다.");
    }).catch((err)=>{
      message.error(`에러가 발생했습니다. ${err.message}`);
    })
  }

  return (
    <div>
      <div id='image-box'>
        <img src={`${API_URL}/${product.imageUrl}`} />
      </div>
      <div id='profile-box'>
        <img src={`/images/icons/avatar.png`}/>
        <span>{product.seller}</span>
      </div>
      <div id='contents-box'>
        <div id='name'>{product.name}</div>
        <div id='price'>{product.price}원</div>
        <div id='createdAt'>{dayjs(product.createdAt).format('YYYY년 MM월 DD일')}</div>
        <Button id='purchase-button' size='large' type='primary' danger onClick={onClickPurchase} disabled={product.soldout === 1 ? true : false}>
          재빨리 구매하기
        </Button>
        <div id='description-box'>
          <pre id='description'>{product.description}</pre>
        </div>
        <h1>추천 상품</h1>
        <div style={{display:'flex',flexWrap : 'wrap' }}>
          {
            products.map((product,index)=>{
              return (
                <ProductCard product={product} key={index}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default ProductPage;