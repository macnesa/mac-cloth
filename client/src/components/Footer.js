
import A from "./typography/Anchor"
import PaymentBtn from "./buttons/payment-button"

import { Button } from "flowbite-react"

export default function Footer() {
  return (
    // <div className="w-full h-[50vh] border border-black">
    //   <div>

    //   </div>
    //   <div>

    //   </div>
    // </div>

    <footer class="  h-[70vh] mb-5 mt-[100vh] max-w-screen-xl mx-auto  bg-white border  grid grid-rows-[1fr_3fr_0.2fr] grid-cols-[1fr]  ">

      {/* border border-black */}
      <div className=" pl-10 grid pt-5 grid-flow-col grid-cols-[2fr_1.7fr] ">
        <div className=" grid items-center   ">
          {/* <p className="font-bold">Available on</p> */}
          <div className="flex items-center" >
            <PaymentBtn src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" />
            <PaymentBtn src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png" />
            <PaymentBtn src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1200px-Apple_Pay_logo.svg.png" />
            <PaymentBtn src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Venmo_Logo.svg/2560px-Venmo_Logo.svg.png" />
            <PaymentBtn src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png" />
          </div>

        </div>
        <div>

        </div>

      </div>

      {/* border border-yellow-200 */}
      <div class="  max-w-screen-xl   pl-10 p-5  grid grid-flow-col grid-cols-[2fr_1.7fr] ">

        {/*  border  border-blue-400  */}
        <div class="grid grid-flow-col grid-cols-[1fr_1fr] "> 
          {/* border border-black */}
          <div className="  ">
            <p class="font-bold ">CUSTOMER SERVICE</p>
            <div className="flex flex-col">
              
            <A innerHTML="Help" />
            <A innerHTML="FAQs" />
            <A innerHTML="Payment Methods" />
            <A innerHTML="Contact Us" />
            </div>

          </div>
          {/* border border-black */}
          <div className=" flex flex-col ">

            <p class="font-bold  ">PAGES</p>
            <A innerHTML="Home" />
            <A innerHTML="Products" />
            
            <p class=" font-bold mt-5 ">EXPLORE MACLO</p>
            <A innerHTML="About Us" />
            <A innerHTML="Flash Sale" />
            <A innerHTML="New Releases" />
            <A innerHTML="Maclo Policy" />
            <A innerHTML="Become a Franchise" />
            <A innerHTML="Blog" />
            
          </div>
        </div>
        {/* border  border-blue-400 */}
        <div class="">
          <p class=" text-[1rem] font-bold   ">FIND US ON</p>
          <div className=" mt-4 text-[2em] flex gap-3">
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-whatsapp"></ion-icon>
            <ion-icon name="logo-tiktok"></ion-icon>
            <ion-icon name="logo-pwa"></ion-icon>
          </div>

          <p class="mt-[5%]  font-bold  ">Don't miss our recent news</p>


          <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Do you want to get notified when a new product is added to us? Sign up for our newsletter and you'll be among the first to find out about new stuff.</label>
          <div className="grid grid-flow-col mt-12 grid-cols-[1fr_max-content] ">
            <div class="relative mr-2 ">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              </div>
              <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black  block w-full pl-10 p-2.5" placeholder="name@mail.com" />
            </div>
            <button className="px-5 border border-black ">Send</button>
          </div>






        </div>

      </div>

      {/* <hr class="  border-gray-200  lg:my-8" border border-red-900 /> */}
      <div class=" pl-3 flex items-center ">
        <p class=" mr-4 text-gray-500 ">© 2023 <a href="#" class="hover:underline">Macnesa</a>. Powered by 
        </p> 
         <img className="w-5 h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
         <img className="w-5 ml-1 h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" />
         <img className="w-15 h-5" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" />
      </div>

    </footer>

  )
}