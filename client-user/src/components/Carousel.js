// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
 
import Kartu from './Kartu';

// Import Swiper styles
import 'swiper/css';


export default function Carousel(props) {
  
  const navigate = useNavigate()

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


  return (
    <div className="  max-w-screen-xl mx-auto  p-[20px] box-border  border-black ">
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.data.map(each => {
          return(
            <SwiperSlide>
              <Kartu onClick={() => { navigate(`/detail/${each.slug}?id=${each.id}`) }} data={each} />
            </SwiperSlide>
          )
        })} 
      </Swiper>
    </div>
  )
}