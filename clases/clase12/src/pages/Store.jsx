import React, { useEffect, useState } from 'react'
import { store, products } from '../data.json'
import Header from '../components/header/Header'
import ProductList from '../components/listOfProducts/ProductList'


const findInArray = (arr, id, genre) => {
  if (genre === null){

    const index = arr.findIndex(item => item.id === id);
    return arr[index];
  }else {
    const index = arr.findIndex(item => item.id === id && item.genre === genre);
    return arr[index];
  }
}

const filterArray = (arr, id, genre) => {
  return arr.filter(item => item.id !== id || (item.id === id && item.genre !== genre))
}


const Store = () => {

  const [ countCarrito, setCountCarrito ] = useState(0);
  const [ viewSelected, setViewSelected ] = useState("local");
  const  [ productsInCart, setProductsInCart ] = useState([]);
  

  const handleCarrito = (e, id, genre) => {

    switch (e.target.innerText) {
      case "REMOVE":
        if (findInArray(productsInCart, id, genre).count === 1) {
          const newArray = filterArray(productsInCart, id, genre);
          setProductsInCart(newArray)
        }else {
          findInArray(productsInCart, id, genre).count -= 1;
        }
        break;
    
      default:
        case "ADD TO CART" || "ADD + 1":
          if (findInArray(productsInCart, id, genre) !== undefined){
            findInArray(productsInCart, id, genre).count += 1;
          }else {
            const newObject = {
              ...findInArray(products, id, null),
              count: 1,
              genre
            }
            setProductsInCart([...productsInCart, newObject])
            setCountCarrito(prev => prev + 1)
          }
        break;
    }
  }
  console.log(productsInCart);

  const headerProps = {
    ...store, countCarrito, setViewSelected
  }

  const productListProps = {
    handleCarrito, products, productsInCart, viewSelected, findInArray
  }

  return (
    <div>
      <Header {...headerProps}/>
      <ProductList {...productListProps}/>
    </div>
  )
}

export default Store