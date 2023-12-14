import React from 'react';
import {useParams} from 'react-router-dom'

function ProductPage() {
  const {id} = useParams();

  console.log(id)

  return (
    <div>
      <h1>상품 상세페이지 {id} 상품</h1>
    </div>
  );
}

export default ProductPage;