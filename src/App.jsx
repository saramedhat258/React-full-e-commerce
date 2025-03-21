
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import Home from './pages/Home'
import 'flowbite';
import Productdetail from './pages/Productdetail';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoutes from './context/ProtectedRoutes';

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/productdetail/:id" element={<Productdetail />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
