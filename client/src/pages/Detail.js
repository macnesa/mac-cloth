import { useEffect, useState } from 'react';

import { Link, useParams, useLocation } from 'react-router-dom';


import { useSelector, useDispatch } from "react-redux"
import { getProducts, getProductById } from '../store/actions/actionCreator';
import Carousel from '../components/Carousel';
import Loading from '../components/others/loading-animation';

export default function Home() {
  // const { id } = useParams();
  const dispatch = useDispatch()
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get('id');
  
  // console.log(name, "akshaf");
  
  
  const { product: { allProduct, productById, loading, error }, } = useSelector((state) => state)

  console.log(allProduct, loading, error, "milch");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(getProductById(id))
  }, [id]);


  if (loading) {
    // return <div>LOADING</div>
    return (
      <div className="flex justify-center items-center  max-w-screen-xl h-[100vh] mx-auto box-border border-5 border-red-800 ">
        <Loading />
      </div>
    )

  }
  if (error) {
    return <div>ERRROR</div>
  }
  if (Object.keys(productById).length) {




    return (
      <>
        <div className=" w-full mx-auto box-border border border-[#fffff] ">

          <div className=' mt-[5.5em]  w-full mx-auto     box-border  border-blue-800 grid gap-5 grid-flow-col grid-cols-[1fr_1fr] "'>

            <div className=' border-black  '>
              {/* {renderImg()} */}
              {productById.Images.map(each => {
                return (
                  <div className='w-full  border-black'>
                    <img src={each.imgUrl} />
                  </div>
                )
              })}
            </div>
            <div className=' border-black'>
              <div className='w-full sticky top-[90px] p-4 pt-20 '>
                <p className='font-thin '> {productById.Type.name} </p>
                <h1 className='font-bold text-[2rem]'> {productById.name} </h1>
                <h1 className='mt-4'> {productById.description} </h1>
                <h1 className='mt-4'> {productById.Category.name} </h1>
                <h1 className='mt-4 font-bold'>Rp. {productById.price.toLocaleString("id-ID")} </h1>

                <button className='w-full border bg-black text-white py-3 mt-12 '>Add to cart</button>

              </div>
            </div>

          </div>

          <div className='mt-[25vh]'>
            <p className='font-bold ml-5'>YOU MAY ALSO LIKE</p>
            <Carousel data={allProduct} />
          </div>

        </div>

      </>







    );
  }

}






















