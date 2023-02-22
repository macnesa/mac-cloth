



import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { getProducts, getProductById, getByType, getCategories } from '../store/actions/actionCreator';

import Carousel from '../components/Carousel';
import Loading from '../components/others/loading-animation';
import Kartu from '../components/Kartu';

export default function KidPage() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    product: { productsByType, loading, error },
    category: { categories }
  } = useSelector((state) => state)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getByType("Kids"))
  }, []);

  console.log(productsByType, "SHELO YIHYEH");
  console.log(categories, "SHELO YIHYEH LECHA");


  if (loading) {
    // return <div>LOADING</div>
    // return (
    //   <div className="flex justify-center items-center  max-w-screen-xl h-[100vh] mx-auto box-border border-5 border-red-800 ">
    //     <Loading />
    //   </div>
    // )

  }
  if (error) {
    // return <div>ERRROR</div>
  }
  // if (Object.keys(productById).length) {


  if (productsByType.length) { 
    
    
    return (
      <div className="max-w-screen-xl mx-auto pt-[5.5em] box-border   border-red-800 ">
        <p className='text-center text-4xl my-10 font-bold '>KID'S CLOTHING</p>
  
        <div style={{ listStyle: "none", gridTemplateColumns: "repeat(3, 1fr)" }} className=" p-2  border border-white grid gap-4 box-border ">
          {productsByType.map(each => (
            <Kartu key={each.id} onClick={() => { navigate(`/detail/${each.slug}?id=${each.id}`) }} data={each} />
          ))}
        </div>
  
      </div>
    );
    
    
  }


  // }

}





















