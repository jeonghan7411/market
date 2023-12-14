import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';

function ProductPage() {
  const {id} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(()=>{
    axios.get(`https://a1df68c2-74f7-428f-b34e-b9393873ddee.mock.pstmn.io/products/${id}`).then((res)=>{
      setProduct(res.data);
    }).catch((error)=>{
      console.error(error);
    })
  },[])

  return (
    <div>
      <h1>상품 상세페이지 {product.name} 상품</h1>
    </div>
  );
}

export default ProductPage;