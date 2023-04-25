import React, { useContext } from 'react'
import { ProuctContext } from './Roots'
import Product from './Product';

const Shop = () => {


  const products = useContext(ProuctContext);
  console.log(products)

  const handleAddToCart = () => {

    console.log("first")

  }


  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
     
{/* 
   {
          products.map(product => (
          <Product product={product}></Product>
    ))
   } */}

{products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          
          />
        ))}



      </div>
    </div>
  )
}

export default Shop
