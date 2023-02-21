
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

    <footer class="  h-[70vh]  bg-white border border-black grid grid-rows-[1fr_3fr] grid-cols-[1fr]  ">

      <div className="border border-black grid grid-flow-col grid-cols-[2fr_1.7fr] ">
        <div className="border border-black grid items-center justify-center ">
          <p>Available on</p>
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


      <div class="  max-w-screen-xl border p-5 border-yellow-200 grid grid-flow-col grid-cols-[2fr_1.7fr] ">

        <div class=" border  border-blue-400 grid grid-flow-col grid-cols-[1fr_1fr] ">
          <div className="border border-black grid ">
            <p class="mb-3 text-lg font-bold  md:text-xl ">Customer Service</p>
            <A innerHTML="Help" />
            <A innerHTML="FAQs" />
            <A innerHTML="Payment Methods" />
            <A innerHTML="Contact Us" />

            <p class="mb-3 text-lg font-bold  md:text-xl ">Explore Maclo</p>
            <A innerHTML="About Us" />
            <A innerHTML="Flash Sale" />
            <A innerHTML="New Releases" />
            <A innerHTML="Maclo Policy" />
            <A innerHTML="Become a Franchise" />
            <A innerHTML="Blog" />

          </div>
          <div className="border border-black flex flex-col ">

            <p class="mb-3 text-lg font-bold  md:text-xl ">Explore Maclo</p>
            <A innerHTML="Home" />
            <A innerHTML="Products" />
          </div>
        </div>
        <div class="border  border-blue-400">
          <p class="mb-3 text-lg font-bold  md:text-xl ">Find Us On</p>
          <div className="border border-black flex gap-3">
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-whatsapp"></ion-icon>
            <ion-icon name="logo-tiktok"></ion-icon>
            <ion-icon name="logo-pwa"></ion-icon>
          </div>

          <p class="mb-3 text-lg font-bold  md:text-xl ">Don't miss our recent news</p>


          <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Do you want to get notified when a new product is added to us? Sign up for our newsletter and you'll be among the first to find out about new stuff.</label>
          <div className="grid grid-flow-col grid-cols-[1fr_max-content] ">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              </div>
              <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
            </div>
            <Button>Send</Button>
          </div>






        </div>

      </div>

      <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between border border-black ">
        <span class="text-sm text-gray-500 sm:text-center  ">© 2022 <a href="https://flowbite.com" class="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        </div>
      </div>

    </footer>

  )
}