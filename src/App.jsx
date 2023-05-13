import { useState, useEffect } from "react"
import Layout from './Components/Layout'

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
      <Layout><h1>¡Hola mundo!</h1></Layout>
    
    </>
  )
}

export default App
