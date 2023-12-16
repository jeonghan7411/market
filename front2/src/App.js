// import 'antd/dist/antd.css'
import './App.css';
import MainPageComponent from "./main/index.js"
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ProductPage from './product/index.js';
import UploadPage from './upload/index.js';
import {Button} from 'antd';
import {DownloadOutlined} from '@ant-design/icons'


function App() {

  const navigate = useNavigate();

  return (
    <div>
        <div id="header">
          <div id="header-area">
            <Link to='/'>
              <img src="/images/icons/logo.png" />
            </Link>
            <Button 
            size='large'
            onClick={()=>{
              navigate("/upload");
            }}
            icon={<DownloadOutlined />}
            >상품 업로드
            </Button>
          </div>
        </div>
        <div id="body">
          <Routes>
            <Route exact path='/' element={<MainPageComponent />}/>
            <Route exact path='/products/:id' element={<ProductPage />}/>
            <Route exact path='/upload' element={<UploadPage />}/>
          </Routes>
        </div>
        <div id="footer"></div>
    </div>
  );
}

export default App;
