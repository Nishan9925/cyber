import React from "react";
import ProductCard from "../components/ProductCard";
import {
  HomeBeyond,
  HomeBeyondLeft,
  HomeBeyondParagraph,
  HomeBeyondRight,
  HomeBeyondTexts,
  HomeBeyoundImg,
  HomeWrapper,
} from "../assets/styles/HomeStyles/home.styles";
import { ButtonShop } from "../ui/ButtonUI/Button.styles";

const products = [
  { id: 1, name: "Product 1", description: "This is product 1" },
  { id: 2, name: "Product 2", description: "This is product 2" },
  { id: 3, name: "Product 3", description: "This is product 3" },
];

function Home() {
  return (
    <HomeWrapper>
      {/* <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
          />
        ))}
      </div> */}
      <HomeBeyond>
        <HomeBeyondLeft>
          <HomeBeyondParagraph variant="bigger">
            Pro.Beyond.
          </HomeBeyondParagraph>
          <h2>
            IPhone 14 <span>Pro</span>
          </h2>
          <HomeBeyondParagraph>
            Created to change everything for the better. For everyone
          </HomeBeyondParagraph>
          <ButtonShop variant="shop">Button</ButtonShop>
        </HomeBeyondLeft>
        <HomeBeyondRight>
          <HomeBeyoundImg />
        </HomeBeyondRight>
      </HomeBeyond>
    </HomeWrapper>
  );
}

export default Home;
