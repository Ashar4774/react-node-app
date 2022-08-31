import './App.css'
import Nav from './partials/Nav.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './partials/footer';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import PrivateComponent from './partials/PrivateComponent';
import AddProduct from './pages/product/addProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Home page component</h1>} />
            <Route path="/product" element={<h1>Product page component</h1>} />
            <Route path="/product/add" element={<AddProduct/>} />
            <Route path="/product/update" element={<h1>Update Product page component</h1>} />
            <Route path="/logout" element={<h1>Logout page component</h1>} />
            <Route path="/profile" element={<h1>Profile page component</h1>} />
          </Route>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;
