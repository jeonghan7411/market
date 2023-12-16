import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import Loading from '../common/loading';
import './index.css'


function ProductPage() {
  const {id} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(()=>{
    axios.get(`https://a1df68c2-74f7-428f-b34e-b9393873ddee.mock.pstmn.io/products/${id}`).then((res)=>{
      setProduct(res.data);
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
        <img src={`/${product.imageUrl}`} />
      </div>
      <div id='profile-box'>
        <img src={`/images/icons/avatar.png`}/>
        <span>{product.seller}</span>
      </div>
      <div id='contents-box'>
        <div id='name'>{product.name}</div>
        <div id='price'>{product.price}원</div>
        <div id='createdAt'>2020년 12월 8일</div>
        <div id='description'>{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;