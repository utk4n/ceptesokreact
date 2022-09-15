import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Modal from "./components/modal/Modal";
import CategoriesPage from "./pages/CategoriesPage";
import Home from "./pages/Home";
import ProductsDetail from "./pages/ProductsDetail";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<CategoriesPage />} />
        <Route path=":id" element={<ProductsDetail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Modal />
      <Footer />
    </div>
  );
}

export default App;
