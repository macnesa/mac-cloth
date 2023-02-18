import { useEffect, useState } from 'react';

import { useDispatch } from "react-redux"
import { act_login } from '../store/actions/actionCreator';
import { useNavigate } from 'react-router-dom';


export default function Login () {
  const dispatch = useDispatch()
  const movePage = useNavigate()
  const [loginData, setLoginData] = useState(
    {
      email: '',
      password: ''
    }
  )
  
  function updateForm(event) {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  }
  
  function triggerLogin(event) {
    event.preventDefault()
    dispatch(act_login(loginData))
    .then((data) => {
      if(data == true) {
        movePage('/')
      }
      // console.log(data, 'itay'); 
    })
    .catch((error) => {
      console.log(error, 'libi')
    })
  }
  
  return (
    <>
    <div className="border border-black " >
      <form onSubmit={triggerLogin} className="grid p-5 gap-5 "> 
        <input name="email" type="email" placeholder="your email" className="border border-black" onChange={updateForm}/>
        <input name="password" type="password" placeholder="your password" className="border border-black" onChange={updateForm}/>
        <input type="submit" value="Login" className="border cursor-pointer border-black"/>
      </form>
    </div>
    </>
  )
}