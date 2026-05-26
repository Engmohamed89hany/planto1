import React, { useEffect, useMemo } from "react";
import Heading from "../Heading/Heading";
import Card from "../Card/Card";
import Gallery from "../Gallery/Gallery";

const TopSelling = () => {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/home-decoration")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  const [imgs, setImgs] = React.useState([]);
  useMemo(() => {
    const imgArray = products.flatMap((product) => product.images[0]);
    setImgs([...imgArray,"/assets/1.svg",]);
  }, [products]);
  let showProduct = products.map((product) => {
    return (
      <Card
        key={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        img={product.images[0]}
      />
    );
  });
  return (
    <div className="mt-16 ">
      <Heading text="Our Top Selling" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-4/5 mx-auto py-16">
        {showProduct}
      </div>
      <Gallery imgs={imgs} />
    </div>
  );
};

export default TopSelling;
