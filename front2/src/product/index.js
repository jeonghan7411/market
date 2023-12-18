import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import Loading from '../common/loading';
import './index.css';
import {API_URL} from '../config/constants.js'
import dayjs from 'dayjs';


function ProductPage() {
  const {id} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(()=>{
    axios.get(`${API_URL}/products/${id}`).then((res)=>{
      setProduct(res.data.products);
    }).catch((error)=>{
      console.error(error);
    })
  },[]);

  // 로딩중
  if (!product) {
    return <Loading />; 
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
        <pre id='description'>{product.description}</pre>
      </div>
    </div>
  );
}

export default ProductPage;