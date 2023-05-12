import { useState, useEffect } from "react"
import { ProductsList } from "./components/ProductsList";
import { ProductCard } from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  let productsCopy = [...products];

  useEffect (() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])

  //console.log(productsCopy)
  return (
    <>
      <h1>¡Hola mundo!</h1>
      <ProductsList>
        {
          productsCopy.map(product => (
            <ProductCard
              key={product.id}
              title={product.title}
              img={product.images[0]}
              price={product.price}
            />
          ))
        }
      </ProductsList>
    </>
  )
}

export default App
