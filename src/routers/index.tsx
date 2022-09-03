import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CheckOut from "./CheckOut";
import Home from "./Home";
import SingleProduct from "./SingleProduct";
import Category from "./Category";
import NotFound from "./NotFound";
const Routers = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="*" element={<NotFound />} />
          {[Home, CheckOut, SingleProduct, Category].map((item) => {
            return (
              <Route key={item.path} path={item.path} element={item.page} />
            );
          })}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Routers;
