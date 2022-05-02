import './App.css';
import Headers from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/Shared/NotFound/NotFound'
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import AllProducts from './Pages/AllProducts/AllProducts';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddProduct from './Pages/AddProduct/AddProduct';


function App() {
  return (
    <div className="App">
      <Headers></Headers>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<AllProducts></AllProducts>}></Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        }></Route>
        <Route path='/products/product/:productId' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        }></Route>
        <Route path='/addproduct' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={
          <RequireAuth>
            <Blogs></Blogs>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>

      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
