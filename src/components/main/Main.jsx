import { useState } from "react";
import ProductCard from "./ProcdctCard";
import "./_main.scss";

export default function Main() {
  const [items] = useState([
    {
      id: 1,
      title: "Forbes Self Made T-Shirt",
      img: "https://cdn.shopify.com/s/files/1/0459/4728/9756/products/T-Shirts-Black_5000x.jpg?v=1654249677",
      hoverImg:
        "https://cdn.shopify.com/s/files/1/0459/4728/9756/products/Forbes-PowerWoman-Sweatshirt-Black_400x.jpg?v=1646071535",
      preOrder: false,
      price: 40.0,
    },
    {
      id: 2,
      title: "Forbes Self Made T-Shirt",
      img: "https://cdn.shopify.com/s/files/1/0459/4728/9756/products/ForbesWomen-SelfMadeTShirt_400x.jpg?v=1654773767",
      hoverImg:
        "https://cdn.shopify.com/s/files/1/0459/4728/9756/products/Forbes-PowerWoman-Sweatshirt-Black_400x.jpg?v=1646071535",
      preOrder: false,
      price: 40.0,
    },
    {
      id: 3,
      title: "Forbes Self Made T-Shirt",
      img: "https://cdn.shopify.com/s/files/1/0459/4728/9756/products/T-Shirts-Black_5000x.jpg?v=1654249677",
      hoverImg:
        "https://cdn.shopify.com/s/files/1/0459/4728/9756/products/Forbes-PowerWoman-Sweatshirt-Black_400x.jpg?v=1646071535",
      preOrder: false,
      price: 40.0,
    },
    {
      id: 4,
      title: "Forbes Self Made T-Shirt",
      img: "https://cdn.shopify.com/s/files/1/0459/4728/9756/products/hat-black_3855f691-5693-45d7-a81d-46c031a112c3_5000x.jpg?v=1623782184%205000w",
      hoverImg:
        "https://cdn.shopify.com/s/files/1/0459/4728/9756/products/Forbes-PowerWoman-Sweatshirt-Black_400x.jpg?v=1646071535",
      preOrder: true,
      price: 40.0,
    },
    {
      id: 5,
      title: "Forbes Self Made T-Shirt",
      img: "https://cdn.shopify.com/s/files/1/0459/4728/9756/products/T-Shirts-Black_5000x.jpg?v=1654249677",
      hoverImg:
        "https://cdn.shopify.com/s/files/1/0459/4728/9756/products/Forbes-PowerWoman-Sweatshirt-Black_400x.jpg?v=1646071535",
      preOrder: false,
      price: 40.0,
    },
    {
      id: 6,
      title: "Forbes Self Made T-Shirt",
      img: "https://cdn.shopify.com/s/files/1/0459/4728/9756/products/T-Shirts-HeatherGrey_800x.jpg?v=1654250617",
      hoverImg:
        "https://cdn.shopify.com/s/files/1/0459/4728/9756/products/Forbes-PowerWoman-Sweatshirt-Black_400x.jpg?v=1646071535",
      preOrder: false,
      price: 40.0,
    },
  ]);
  return (
    <main className="main">
      <div className="container">
        <div className="main-item-wrp">
          {items &&
            items.map((item) => <ProductCard key={item.id} data={item} />)}
        </div>
      </div>
    </main>
  );
}
