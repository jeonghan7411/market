import './App.css';
import MainPageComponent from "./main/index.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './product/index.js';
import UploadPage from './upload/index.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPageComponent />}/>
        <Route exact path='/products/:id' element={<ProductPage />}/>
        <Route exact path='/upload' element={<UploadPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
