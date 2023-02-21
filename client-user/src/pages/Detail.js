import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux"
import { getProducts, getProductById } from '../store/actions/actionCreator';


export default function Home() {
  const { id } = useParams();
  const dispatch = useDispatch()

  const { product: { allProduct, productById }, category } = useSelector((state) => state)


  console.log(productById, "milch");

  useEffect(() => {
    dispatch(getProductById(id))
  }, []);
  
  function renderImg() {
    if (Object.keys(productById).length) {
      if (productById.Images.length) {
        // console.log('kokmasuk');
        return (
          productById.Images.map(each => {
            return (
              <div className='w-[50px] h-[50px] border border-black'>
                <img src={each.imgUrl} className="w-full h-full" />
              </div>
            )
          })
        )
      } else {
        return <p>No Images Available</p>
      }
    }
  }
  

  return (
    <div className='pt-10'>
      {/* <p>{id}</p> */}

      <div className='w-full border border-black grid grid-flow-col grid-cols-[1fr_3fr_2fr]'>
        
        <div className='grid gap-3'>
          {renderImg()}
        </div>
        
        <div className=''>
          <img src={productById.mainImg} className="w-full "/> 
          
        </div>
        
        <div>
          <h1 className='font-bold'> {productById.name} </h1>
          <h1 > {productById.price} </h1>
          <h1> {productById.description} </h1>
        </div>
        
      </div>


    </div>

  );
}






















