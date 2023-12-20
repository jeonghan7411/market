import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/ko';
import {API_URL} from '../config/constants.js'

//dayjs 설치시 같이 설치되는 relativeTime
//이렇게 선언 해주면 dayjs에서 확장 기능을 사용하곘다 라는 의미
dayjs.extend(relativeTime);
dayjs.locale("ko");

function ProductCard(props) {
  const product =props.product;
  return (
    <div className='product-card'>
      {
        product.soldout === 1 && <div className='product-blur' />
      }
      <Link className='product-link' to={`/products/${product.id}`}>
        <div>
          <img className='product-img' src={`${API_URL}/${product.imageUrl}`}/>
        </div>
        <div className='product-contents'>
          <span className='product-name'>{product.name}</span>
          <span className='product-price'>{product.price}원</span>
          <div className='product-footer'>
            <div className='product-seller'>
              <img className='product-avatar' src='/images/icons/avatar.png'/>
              <span>{product.seller}</span>
            </div>
            <span className='product-date'>{dayjs(product.createdAt).fromNow()}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard;