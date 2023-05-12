import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    let url = "https://fakestoreapi.com/products";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
    
      {Array.isArray(products) &&
        products.map((product) => {
          return (
            <div
              key={product.id}
              style={{
                margin: "10px",
                padding: "10px",
                border: "1px solid black",
              }}
            >
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>

              <p>{product.image}</p>

            </div>
          );
        })}
    </div>
  );
}

export default Products;
