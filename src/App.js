import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Services/NavBar';
import Footer from './Services/Footer';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import ForgotPass from './Components/Login/ForgotPass/ForgotPass';
import SixDigit from './Components/Login/ForgotPass/SixDigit';
import ResetPass from './Components/Login/ForgotPass/ResetPass';
import ProductList from './Components/Home/ProductList';
import AddProduct from './Components/Products/AddProduct';
import UpdateProduct from './Components/Update/UpdateProduct';
import Profile from './Components/Profile/Profile';
import ChangePass from './Components/Profile/ChangePass';
import PrivateComp from './Services/PrivateComp';

function App() {
  return (
    <div style={{ position: "relative" }}>
      <NavBar />

      <Routes basename="/mern">

        <Route element={<PrivateComp />}>
          <Route path='/' element={<ProductList />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/update/:id' element={<UpdateProduct />} />
          <Route path='/logout' element={'Logout'} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/changePassword' element={<ChangePass />} />
        </Route>
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotPass' element={<ForgotPass />} />
        <Route path='/sixDigit/:id' element={<SixDigit />} />
        <Route path='/resetPass/:id' element={<ResetPass />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
