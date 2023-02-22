import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux"
import { getProducts, getProductById } from '../store/actions/actionCreator';
import Carousel from '../components/Carousel';
 

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
              <div className='w-full border border-black'>
                <img src={each.imgUrl} />
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

    <>

      <div className=" w-full mx-auto box-border border border-black ">

        <div className=' mt-[100px]  w-full mx-auto    p-[20px] box-border border border-blue-800 grid grid-flow-col grid-cols-[1fr_1fr] "'>

          <div className='border border-black  '>
            {renderImg()}
          </div>
          <div className='border border-black'>
            <div className='w-full sticky top-[90px] p-4 bg-gray-200'>
              {/* <p className=' '> {productById.Type.name} </p> */}
              <h1 className='font-bold text-[2rem]'> {productById.name} </h1>
              {/* <h1 className='mt-4'> {productById.description} </h1> */}
              {/* <h1 className='mt-4'> {productById.Category.name} </h1> */}
              {/* <h1 className='mt-4 font-bold'>Rp. {productById.price.toLocaleString("id-ID")} </h1> */}

              <button className='w-full border border-black py-3 mt-12 '>Add to cart</button>
              
            </div>
          </div>

        </div>

        <div>
          <p>YOU MAY ALSO LIKE</p>
          <Carousel/>
        </div>

      </div>



    </>


    // <div className='pt-10'>
    //   {/* <p>{id}</p> */}

    //   <div className='w-full border border-black grid grid-flow-col grid-cols-[1fr_3fr_2fr]'>

    //     <div className='grid gap-3'>
    //       {renderImg()}
    //     </div>

    //     <div className=''>
    //       <img src={productById.mainImg} className="w-full "/> 

    //     </div>

    //     <div>
    //       <h1 className='font-bold'> {productById.name} </h1>
    //       <h1 > {productById.price} </h1>
    //       <h1> {productById.description} </h1>
    //     </div>

    //   </div>


    // </div>

  );
}






















