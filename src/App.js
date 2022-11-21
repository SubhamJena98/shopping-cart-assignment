import './App.css';
import HomePage from './Components/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import UserPage from './Components/UserPage';
import ProductList from './Components/ProductList';
import Header from './Components/Header';
import Home from './Components/Home';
import CheckOut from './Components/CheckOut';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <BrowserRouter>
    <Header/>
    <div className='bg-gray-700 text-white'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/admin' element={<Home />} />
        <Route path='/productlist' element={<ProductList />} />
        {/* <Route path='/cart' element={<Cart />} /> */}
        <Route path='/checkout' element={<CheckOut />} />
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
