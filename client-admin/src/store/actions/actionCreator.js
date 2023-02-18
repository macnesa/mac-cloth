import { COUNTER_INCREMENTER } from "./actionTypes"

export function conterIncremented(payload) {
  return { type: COUNTER_INCREMENTER, payload }
}

// export const conterIncremented = (payload) => {
//   return { type: COUNTER_INCREMENTER, payload }
// }

 const baseUrl = "http://localhost:3000"

export const dididam = () => {
  return (dispatch, getState) => { //atau return async (dispatch, getState) => {
    // tulis async function
    // complx business logic
    // fetch('http://yourlink.com')
    //   .then(response => response.json())
    //   .then(json => {
    //     dispatch(conterIncremented(json))
    //   })
  }
}

export function act_login (data) {
  return async(dispatch) => {
    try {
      const request = await
      fetch(baseUrl + `/admin/login`, 
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )
      let respon = await request.json()
      
      if(!request.ok) throw respon
      
      // localStorage.setItem("myToken", respon.access_token)
      
      // console.log(respon, "bonai");
      
      return true
    } catch (error) {
      throw error
      // console.log(error);
    }
  }
}