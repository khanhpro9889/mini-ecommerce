import React, { useEffect, useState } from "react";
import { Typography, message } from "antd";
import { categoryType } from "../../layouts/MainLayout/MainLayout";
import ProductDisplay from "../../components/ProductsDisplay";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/Cart/Slices";
const { Title } = Typography;

export type productType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: categoryType;
  images: string[];
};

export default function Category() {
  const [products, setProducts] = useState<productType[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { id } = useParams();
  const [category, setCategory] = useState<categoryType>({} as categoryType);

  const getProductsByCategory = async (currentPage: number) => {
    const perPage = 10;
    setLoading(true);
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/categories/${id}/products?offset=${
        (currentPage - 1) * perPage
      }&limit=${perPage}`
    );
    const data = await res.json();
    const res1 = await fetch(
      `https://api.escuelajs.co/api/v1/categories/${id}/products`
    );
    const data1 = await res1.json();

    setLoading(false);
    setTotal(data1.length);
    setProducts(data);
  };

  const getSingleCategory = async () => {
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`);
    const data = await res.json();
    setCategory(data);
  };

  useEffect(() => {
    getSingleCategory();
  }, [id]);

  useEffect(() => {
    getProductsByCategory(currentPage);
  }, [currentPage, id]);

  return (
    <div className="container">
      <div className="horizontal-center heading">
        <Title>Category: {category && category.name}</Title>
      </div>
      <ProductDisplay
        products={products}
        loading={loading}
        setCurrentPage={(current) => setCurrentPage(current)}
        total={total}
        currentPage={currentPage}
        isCategory={id}
      />
    </div>
  );
}
