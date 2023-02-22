import ColorThief from "colorthief"

import { Button } from "flowbite-react"
import { useEffect, useState } from "react"

// function getPalette(url) {
//   const colorThief = new ColorThief();
//   const img = new Image();

//   let imageURL = 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/457429/item/idgoods_66_457429.jpg?width=750';
//   let googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

//   img.crossOrigin = 'Anonymous';
//   img.src = googleProxyURL + encodeURIComponent(url);

//   let palette = []
//   img.addEventListener('load', function () {
//     palette = colorThief.getPalette(img)
//     // let [x,y,z] = palette[0]
//     console.log(palette);
//   });

//     return (
//       <div style={{background: `rgb(${palette[0][0],palette[0][1],palette[0][2]})`}} className="border border-black w-4 h-4 "></div> 
//     ) 

//    // $(".gambar").each(function(){
//     //   var colorThief = new ColorThief();
//     //   var singlecolor = colorThief.getPalette(this); // AMBIL SATU SAMPLE WARNA
//     //   $(this).css("box-shadow" , "0px 10px 10px -10px rgb("+ singlecolor[2] +") , 0 10px 60px -30px rgb("+ singlecolor[8] +") ");
//     //   // box-shadow: rgba(50, 50, 93, 0.09) 0px 10px 10px -10px, rgba(0, 0, 0, 0.3) 0px 10px 60px -30px;
//     // })
// }


export default function Kartu(props) {

  const [arrOfColor, setArrOfColor] = useState([])
  useEffect(() => {
    const imageURL = 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/457429/item/idgoods_66_457429.jpg?width=750';
    const googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';



    const colorThief = new ColorThief();
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = googleProxyURL + encodeURIComponent(props.data.mainImg);

    img.addEventListener('load', function () {
      const newPalette = colorThief.getPalette(img);
      setArrOfColor(newPalette);
    });
  }, [])

  return (
    <div onClick={props.onClick} className=' cursor-pointer border-black justify-self-center  w-72 h-[30em]'>
      <img src={props.data.mainImg} className='w-full h-72 ' />
      <div>
        {/* {getPalette("https://image.uniqlo.com/UQ/ST3/id/imagesgoods/457429/item/idgoods_66_457429.jpg?width=750")} */}

        {arrOfColor.length > 0 &&
          <div className="flex mt-2 gap-2">
            <div style={{ backgroundColor: `rgb(${arrOfColor[0]})` }} className="w-5 h-5 "></div>
            <div style={{ backgroundColor: `rgb(${arrOfColor[1]})` }} className="w-5 h-5 "></div>
            <div style={{ backgroundColor: `rgb(${arrOfColor[2]})` }} className="w-5 h-5 "></div>
          </div>
        }

      </div>
      <p className='text-[20px] mt-3 '>{props.data.name}</p>
      <p className='text-[18px] text-gray-500 mt-1 '>New</p>
      <div className='flex justify-between mt-3 text-[20px] '>
        <p className='font-bold'>Rp. {props.data.price.toLocaleString("id-ID")} </p>
        {/* <Button color="gray"> Detail</Button> */}
      </div>
    </div>
  )
}