import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "../../Pages/Products";
import Sales from "../../Pages/Products";
import Developement from "../../Pages/Products";
import Design from "../../Pages/Products";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Product />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/Sales" element={<Sales />}></Route>
      <Route path="/development" element={<Developement />}></Route>
      <Route path="/design" element={<Design />}></Route>
    </Routes>
  );
}
export default AppRoutes;
