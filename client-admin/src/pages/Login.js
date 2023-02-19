import { useEffect, useState } from 'react';

import { useDispatch } from "react-redux"
import { act_login } from '../store/actions/actionCreator';
import { useNavigate } from 'react-router-dom';

import {
  Table, React, Button, Modal, Label, TextInput, Checkbox, Select, Carousel, Alert
} from 'flowbite-react';

import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


export default function Login() {
  const dispatch = useDispatch()
  const movePage = useNavigate()
  const [loginData, setLoginData] = useState(
    {
      email: '',
      password: ''
    }
  )

  function showError(msg) {
    Toastify({
      text: msg,
      duration: 3000,
      close: true,
    }).showToast();
  }
  
  function updateForm(event) {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  }

  function triggerLogin(event) {
    event.preventDefault()
    dispatch(act_login(loginData))
      .then((data) => {
        if (data == true) { 
          movePage('/')
        }
        // console.log(data, 'itay'); 
      })
      .catch((error) => {
        showError(error.error)
        console.log(error, 'libisuri')
      })
  }
  


  return (
    <>
      {/* <div className="border border-black " >
        <form onSubmit={triggerLogin} className="grid p-5 gap-5 ">
          <input name="email" type="email" placeholder="your email" className="border border-black" onChange={updateForm} />
          <input name="password" type="password" placeholder="your password" className="border border-black" onChange={updateForm} />
          <input type="submit" value="Login" className="border cursor-pointer border-black" />
        </form>
      </div> */}
 


      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            The Brand - Admin Panel
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form onSubmit={triggerLogin} className="flex flex-col gap-4">
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email1"
                      value="Your email"
                    />
                  </div>
                  <TextInput
                    id="email1"
                    type="email"
                    name="email"
                    placeholder="name@yourmail.com"
                    required={true}
                    onChange={updateForm}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="password1"
                      value="Your password"
                    />
                  </div>
                  <TextInput
                    id="password1"
                    type="password"
                    name="password"
                    required={true}
                    onChange={updateForm}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">
                    Remember me
                  </Label>
                </div>
                <Button type="submit">
                  Sign In
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}