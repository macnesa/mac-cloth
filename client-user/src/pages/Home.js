import { useEffect, useState, useRef } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux"
import { getProducts } from '../store/actions/actionCreator';

import Card from '../components/Card';
import Kartu from '../components/Kartu';

import { Button } from "flowbite-react"

import Footer from '../components/Footer';

import "../style/custom.css"

export default function Home() {



  const { product: { allProduct, productById }, category } = useSelector((state) => state)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log(allProduct);

  //   const [products, setProducts] = useState([]);
  //   const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(getProducts())
  }, []);


  const [arrColor, setArrColor] = useState({})

  const [productData, setproductData] = useState(
    [
      {
        id: 9,
        name: "Upright Collar Line Cotton Linen Shirt",
        slug: "upright-collar-line-cotton-linen-shirt",
        description: "Men's Shirt with updated material. It is soft cool, and comfortable to wear. Koko clothes with contemporary fashionable designs",
        price: 499000,
        mainImg: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/457429/item/idgoods_66_457429.jpg?width=750",
        CategoryId: 6,
        TypeId: 1,
        AuthorId: 1,
        createdAt: "2023-02-20T23:07:21.959Z",
        updatedAt: "2023-02-20T23:07:21.959Z",
        User: {
          email: "macnesa@gmail.com"
        },
        Category: {
          name: "Casual Shirt (Long Sleeves)"
        },
        Type: {
          name: "Men"
        }
      }, {
      "id": 10,
      "name": "Upright Collar Cotton Linen Shirt",
      "slug": "upright-collar-cotton-linen-shirt",
      "description": "Men's shirt with renewed material so that it feels soft, cool, and comfortable to wear. Koko clothes with contemporary fashionable designs",
      "price": 499000,
      "mainImg": "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/455966/item/idgoods_56_455966.jpg?width=750",
      "CategoryId": 6,
      "TypeId": 1,
      "AuthorId": 1,
      "createdAt": "2023-02-20T23:07:21.959Z",
      "updatedAt": "2023-02-20T23:07:21.959Z",
      "User": {
        "email": "macnesa@gmail.com"
      },
      "Category": {
        "name": "Casual Shirt (Long Sleeves)"
      },
      "Type": {
        "name": "Men"
      }
    },
      {
        "id": 7,
        "name": "Uniqlo U 3/4 Sleeve Round Collar T-Shirt",
        "slug": "uniqlo-u-3/4-sleeve-round-collar-t-shirt",
        "description": "Men's T-shirt of 100% soft cotton material. Wide cut with pocket accents on the chest.",
        "price": 299000,
        "mainImg": "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/456972/sub/goods_456972_sub11.jpg?width=750",
        "CategoryId": 5,
        "TypeId": 1,
        "AuthorId": 1,
        "createdAt": "2023-02-20T23:07:21.959Z",
        "updatedAt": "2023-02-20T23:07:21.959Z",
        "User": {
          "email": "macnesa@gmail.com"
        },
        "Category": {
          "name": "T-Shirt"
        },
        "Type": {
          "name": "Men"
        }
      },
      {
        "id": 8,
        "name": "Long Sleeve Line T-Shirt",
        "slug": "long-sleeve-line-t-shirt",
        "description": "T-shirt line made of 100% cotton. With a unique retro style",
        "price": 299000,
        "mainImg": "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/455406/item/idgoods_69_455406.jpg?width=750",
        "CategoryId": 5,
        "TypeId": 1,
        "AuthorId": 1,
        "createdAt": "2023-02-20T23:07:21.959Z",
        "updatedAt": "2023-02-20T23:07:21.959Z",
        "User": {
          "email": "macnesa@gmail.com"
        },
        "Category": {
          "name": "T-Shirt"
        },
        "Type": {
          "name": "Men"
        }
      },
      {
        "id": 6,
        "name": "Round Collar Washable Cotton Sweater",
        "slug": "round-collar-washable-cotton-sweater",
        "description": "Men's Sweater with elegant texture and color, with stylish cut and sleek fit.",
        "price": 399000,
        "mainImg": "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/453760/item/idgoods_43_453760.jpg?width=750",
        "CategoryId": 4,
        "TypeId": 1,
        "AuthorId": 1,
        "createdAt": "2023-02-20T23:07:21.959Z",
        "updatedAt": "2023-02-20T23:07:21.959Z",
        "User": {
          "email": "macnesa@gmail.com"
        },
        "Category": {
          "name": "Sweaters & Cardigans"
        },
        "Type": {
          "name": "Men"
        }
      },
      {
        "id": 5,
        "name": "U Single Breasted Oversize Coat",
        "slug": "u-single-breasted-oversize-coat",
        "description": "An oversize coat that goes well with any top. Perfect for cold weather.",
        "price": 690000,
        "mainImg": "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/457988/sub/idgoods_457988_sub1.jpg?width=750",
        "CategoryId": 3,
        "TypeId": 1,
        "AuthorId": 1,
        "createdAt": "2023-02-20T23:07:21.959Z",
        "updatedAt": "2023-02-20T23:07:21.959Z",
        "User": {
          "email": "macnesa@gmail.com"
        },
        "Category": {
          "name": "Coat"
        },
        "Type": {
          "name": "Men"
        }
      },
    ]
  )




  //   useEffect(() => {
  //     // fetch('http://localhost:3000/products?_limit=8')
  //     //   .then(response => {
  //     //     if (!response.ok) throw new Error('error request bro')
  //     //     return response.json()
  //     //   })
  //     //   .then(data => {
  //     //     console.log(data);
  //     //     setProducts(data);
  //     //     // setProductTitles(data.map(product => product.title));
  //     //   })
  //     //   .catch(error => {
  //     //     console.log(error);
  //     //   });
  //     async function beforeMount() {
  //       try {
  //         let prod = await fetch('http://localhost:3000/products?_limit=8')
  //         let categ = await fetch('http://localhost:3000/categories')
  //         if (!prod.ok || !categ.ok) throw new Error('error request bro')
  //         prod = await prod.json(); setProducts(prod);
  //         categ = await categ.json(); setCategories(categ)
  //         console.log(prod, categ);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }; beforeMount()
  //   }, []);

















  return (
    <>

      {/* <div class="skeleton"></div>   */}




      <div className=" w-[100%] h-[100vh] overflow-hidden box-border ">
        <div className=" h-[100%] ">
          <div className=" | grid">
            {/* <img src="https://im.uniqlo.com/global-cms/spa/resfed4eb3cd117f264d596130a5bf41af5fr.jpg" */}
            {/* <img src="https://im.uniqlo.com/global-cms/spa/rescac6be572fad281cd44a179a7edb1e0efr.jpg"
              className=" w-[100%] h-[100vh] row-start-1 col-start-1  " /> */}
            {/* <video class="dch-video-item__player" data-video-id="6319345330112" data-small-video-id="6319346093112" data-account="1268729919001" data-policy-key="BCpkADawqM1Y866RZKo_d_lZ4BO9M5xFUuhau1_xn-o1cf_aGAKtoqQqehi8CoaMEgTW7OBrgrangdSnSau7mVrQdX377XADeXy_Rv1gTn6IVRadSBXPGBsZLLDNBJtHjELhRuV_VDmeUk7D" preload="metadata" muted autoPlay playsInline loop src="https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/1268729919001/92bffd6e-10ce-462b-a2ea-b909a784267d/273beb58-f38d-4362-ad64-7e88e76c481c/main.mp4?fastly_token=NjVkNTQxMmJfZDAzZmI2YjZkM2IwNTE4YzA0ZmJlODRjYWNjMDgyMDUwNzAzMGI1ZWJkOGQwNmMyMTA2ZjgyNjAwMGMyMmRiNV8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMTI2ODcyOTkxOTAwMS85MmJmZmQ2ZS0xMGNlLTQ2MmItYTJlYS1iOTA5YTc4NDI2N2QvMjczYmViNTgtZjM4ZC00MzYyLWFkNjQtN2U4OGU3NmM0ODFjL21haW4ubXA0" __idm_id__="15122435" className=" w-[100%] h-[100px] border-4 border-yellow-500 row-start-1 col-start-1  " >
            </video> */}
            <video class="dch-video-item__player" data-video-id="6319345330112" data-small-video-id="6319346093112" data-account="1268729919001" data-policy-key="BCpkADawqM1Y866RZKo_d_lZ4BO9M5xFUuhau1_xn-o1cf_aGAKtoqQqehi8CoaMEgTW7OBrgrangdSnSau7mVrQdX377XADeXy_Rv1gTn6IVRadSBXPGBsZLLDNBJtHjELhRuV_VDmeUk7D" preload="metadata" muted autoPlay playsInline loop className="w-full row-start-1 col-start-1">
              <source src="https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/1268729919001/92bffd6e-10ce-462b-a2ea-b909a784267d/273beb58-f38d-4362-ad64-7e88e76c481c/main.mp4?fastly_token=NjVkNTQxMmJfZDAzZmI2YjZkM2IwNTE4YzA0ZmJlODRjYWNjMDgyMDUwNzAzMGI1ZWJkOGQwNmMyMTA2ZjgyNjAwMGMyMmRiNV8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMTI2ODcyOTkxOTAwMS85MmJmZmQ2ZS0xMGNlLTQ2MmItYTJlYS1iOTA5YTc4NDI2N2QvMjczYmViNTgtZjM4ZC00MzYyLWFkNjQtN2U4OGU3NmM0ODFjL21haW4ubXA0" type="video/mp4" className='' />
            </video>
            <div className=" border grid justify-center items-center text-white border-white row-start-1 col-start-1">
              <p className="font-bold"> <span className="text-6xl tracking-widest ">BE YOUR OWN </span> <br></br> <span></span></p>
            </div>
          </div>
        </div>
      </div>


      <div className=" max-w-screen-xl mx-auto  p-[20px] box-border  grid grid-flow-col grid-cols-[1fr_2fr] ">
        <div style={{ background: "linear-gradient(354deg, rgba(0,0,0,1) 0%, rgba(93,93,93,1) 100%)" }} className=" grid border border-white ">
          <div className='row-start-1 text-white font-bold col-start-1 grid justify-center items-center'>
            <p className='text-[2em]'>New Arrivals</p>
          </div>
        </div>
        {/* ul{
            width:80%;
            margin:auto;
            border:10px solid rgb(73, 55, 107);
            list-style: none;
            display:grid;
            grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
            grid-gap:3px;
        } */}
        <div style={{ listStyle: "none", gridTemplateColumns: "repeat(3, 1fr)" }} className=" p-2  border border-white grid gap-4 box-border ">
          {productData.map(each => {
            return <Kartu onClick={() => { navigate(`/detail/${each.id}`) }} data={each} />
          })}


        </div>
        
        


        
        
      </div>



      

      
      





    </>

  );
}








































// // export default App;
// // import { useEffect, useState } from 'react';

// // import logo from './logo.svg';
// // import './App.css';
// // import Header from "./components/Header"

// // export default function App() {

// //   const [formValue, setformValue] = useState(
// //     {
// //       name: 'chaimGreen',
// //       password: 'i am ',
// //       username: 'twin'
// //     }
// //   )

// //   function updateForm(event) {
// //     const { name, value } = event.target;
// //     setformValue({ ...formValue, [name]: value });
// //     // const { name, value } = event.target

// //     // let plain = {
// //     //   ...formValue,
// //     // }
// //     // plain[name] = value
// //     // setformValue(plain)
// //   }

// //   useEffect(() => {
// //     console.log('tagidi');
// //   })

// //   return (
// //     <div className="App">
// //       <Header innerHTML="i love chaim green" />
// //       <header className="App-header" style={{ border: "1px solid white", boxSizing: "border-box" }} >
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and done
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //         <form>
// //           {/* <input type="text" value={formValue.name} onChange={function () { }} /> */}
// //           <input name="name" type="text" value={formValue.name} onChange={updateForm} />
// //           <input name="password" type="text" value={formValue.password} onChange={updateForm} />
// //           <input name="username" value={formValue.username} onChange={updateForm} />
// //         </form>
// //       </header>
// //     </div >
// //   );
// // }

// // export default App;
