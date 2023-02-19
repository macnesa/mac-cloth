import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux"
import { getProducts } from '../store/actions/actionCreator';

import Card from '../components/Card';

export default function Home() {

  const { product: { allProduct, productById }, category } = useSelector((state) => state)

  
  const dispatch = useDispatch() 
  console.log(allProduct);

//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(getProducts())
  }, []);

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
        <div className="pt-[40px] w-[100%] h-[100vh] overflow-hidden box-border bg-blue-200 ">
         <div className=" h-[100%] ">
           <div className=" | grid">
            {/* <img src="https://im.uniqlo.com/global-cms/spa/resfed4eb3cd117f264d596130a5bf41af5fr.jpg" */}
             <img src="https://im.uniqlo.com/global-cms/spa/rescac6be572fad281cd44a179a7edb1e0efr.jpg" 
              className=" w-[100%] h-[100vh] row-start-1 col-start-1  " />
            <div className=" pt-14 pl-14 row-start-1 col-start-1">
              <p className="font-bold"> <span className="text-6xl">theBrand </span> <br></br> <span>Explore your own
                clothes.</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[120vh] p-[20px] box-border bg-[#1f2124] ">
        <div className="w-[100%]  | grid grid-flow-col   ">
          {/* <div>
            {categories.map(each => (
              <button key={each.id}
                className="text-white mt-[10px] bg-[#2e3136] hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
                {each.name}
              </button>
            ))}
          </div> */}
        </div>
        <div className="text-white">
          {/* <p className="text-[20px] font-bold  ">Most Popular {store.counter.value} </p> */}
          {/* <button onClick={() => {
            dispatch(conterIncremented("payload"))
          }}>Increment
          </button> */}
        </div>
        <div style={{ gridTemplateColumns: "repeat(8, 1fr)" }} className="w-[100%] box-border  mt-[20px] | grid grid-flow-row  ">
          {allProduct.map(each => {
            return (
              <Link to={`detail/` + each.id} >
                <Card key = {each.id} src={each.mainImg} />
              </Link>
            )
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
