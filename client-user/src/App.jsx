import { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade'

import Header from "./components/Header"

export default function App() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // fetch('http://localhost:3000/products?_limit=8')
    //   .then(response => {
    //     if (!response.ok) throw new Error('error request bro')
    //     return response.json()
    //   })
    //   .then(data => {
    //     console.log(data);
    //     setProducts(data);
    //     // setProductTitles(data.map(product => product.title));
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    async function beforeMount() {
      try {
        let prod = await fetch('http://localhost:3000/products?_limit=8')
        let categ = await fetch('http://localhost:3000/categories')
        if (!prod.ok || !categ.ok) throw new Error('error request bro')
        prod = await prod.json(); setProducts(prod);
        categ = await categ.json(); setCategories(categ)
        // console.log(prod, categ);
      } catch (error) {
        console.log(error);
      }
    }; beforeMount()
  }, []);

  return (
    <>
      <Header />

      <div className="pt-[40px] w-[100%] h-[100vh] box-border bg-blue-200 ">

        <Swiper slidesPerView={1} spaceBetween={1} onSwiper={(swiper) => console.log(swiper)} onSlideChange={() => console.log('slide change')}
          modules={[EffectFade]} effect="fade" className=" h-[100%] ">

          <SwiperSlide className=" | grid">
            <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className=" w-[100%] row-start-1 col-start-1  " />
            <div className=" pt-14 pl-14 row-start-1 col-start-1">
              <p className="font-bold text-white"> <span className="text-6xl">macMovie</span> <br></br> <span>Explore your own
                desires.</span></p>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>


      <div className="w-[100%] h-[120vh] p-[20px] box-border bg-[#1f2124] ">

        <div class="w-[100%]  | grid grid-flow-col   ">
          <div>
            {categories.map(each => (
              <button key={each.id}
                class="text-white mt-[10px] bg-[#2e3136] hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
                {each.name}
              </button>
            ))}
          </div>
        </div>

        <div className="text-white">
          <p className="text-[20px] font-bold  ">Most Popular</p>
        </div>

        <div style={{ gridTemplateColumns: "repeat(8, 1fr)" }} className="w-[100%] box-border  mt-[20px] | grid grid-flow-row  ">

          {products.map(each => {
            return <div key={each.id} className=" duration-200 delay-700 w-[150px] h-[200px] shadow-sm cursor-pointer | grid items-center ">
              <div className=" h-[100%] w-[100%]  row-start-1 col-start-1 overflow-hidden  rounded-lg  ">
                <img src={each.mainImg} className="h-[100%] w-[100%] duration-200 " />
              </div>
            </div>
          })}


        </div>

      </div>



    </>

  );
}






// export default App;
// import { useEffect, useState } from 'react';

// import logo from './logo.svg';
// import './App.css';
// import Header from "./components/Header"

// export default function App() {

//   const [formValue, setformValue] = useState(
//     {
//       name: 'chaimGreen',
//       password: 'i am ',
//       username: 'twin'
//     }
//   )

//   function updateForm(event) {
//     const { name, value } = event.target;
//     setformValue({ ...formValue, [name]: value });
//     // const { name, value } = event.target

//     // let plain = {
//     //   ...formValue,
//     // }
//     // plain[name] = value
//     // setformValue(plain)
//   }

//   useEffect(() => {
//     console.log('tagidi');
//   })

//   return (
//     <div className="App">
//       <Header innerHTML="i love chaim green" />
//       <header className="App-header" style={{ border: "1px solid white", boxSizing: "border-box" }} >
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and done
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <form>
//           {/* <input type="text" value={formValue.name} onChange={function () { }} /> */}
//           <input name="name" type="text" value={formValue.name} onChange={updateForm} />
//           <input name="password" type="text" value={formValue.password} onChange={updateForm} />
//           <input name="username" value={formValue.username} onChange={updateForm} />
//         </form>
//       </header>
//     </div >
//   );
// }

// export default App;
