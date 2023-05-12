import { useState, useEffect } from "react"

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
    </>
  )
}

export default App
