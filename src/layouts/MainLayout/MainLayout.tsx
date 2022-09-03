import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import Footer from "../Footer";
import CartModal from "../../components/CartModal";
import { cartType, closeModal } from "../../store/Cart/Slices";
export type categoryType = {
  id: number;
  name: string;
  image: string;
};

type propsType = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: propsType) {
  const [categories, setCategories] = useState<categoryType[]>([]);
  const dispatch = useDispatch();
  const cartStore = useSelector(
    ({ CartStore }: { CartStore: cartType }) => CartStore
  );

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("https://api.escuelajs.co/api/v1/categories");
      const data = await res.json();
      setCategories(data);
    };
    getCategories();
  });

  return (
    <div className="">
      <div className="header menu">
        <Header categories={categories} />
      </div>
      {children}
      <Footer />
      <CartModal
        visible={cartStore.open}
        close={() => dispatch(closeModal())}
      />
    </div>
  );
}
