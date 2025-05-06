
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import Home from './pages/Home'
import 'flowbite';
import Productdetail from './pages/Productdetail';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CheckoutCart from './components/checkout/CheckoutCart';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoutes from './context/ProtectedRoutes';
import { CartProvider } from './context/CartContext';
import { OrderDetailProvider } from './context/OrderDetailContext';
import Profile from './pages/Profile';
import Orders from './components/profile/Orders';
import Wishlist from './components/profile/Wishlist';
import Logout from './components/profile/Logout';
import { WishProvider } from './context/WishlistContext';

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={
            
            <CartProvider>
              <WishProvider>
                <OrderDetailProvider>
                  <ProtectedRoutes />
                </OrderDetailProvider>
              </WishProvider>
            </CartProvider>}>
            <Route path="/Home" element={<Home />} />
            <Route path="/profile" element={<Profile />} >
              <Route index element={<Orders />} />
              <Route path='orders' element={<Orders />} />
              <Route path='wishlist' element={<Wishlist />} />
              <Route path='logout' element={<Logout />} />
            </Route>
            <Route path="/shop" element={<Shop />} />
            <Route path="/productdetail/:id" element={<Productdetail />} />
            <Route path='/checkout' element={<CheckoutCart />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
