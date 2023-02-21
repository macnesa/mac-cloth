import { 
  COUNTER_INCREMENTER, 
  WRITE_PRODUCTS,
  WRITE_PRODUCT
} from "./actionTypes"

// export const conterIncremented = (payload) => {
//   return { type: COUNTER_INCREMENTER, payload }
// }


export function writeProduct(payload) {
  return { type: WRITE_PRODUCTS, payload }
}

export function writeProductById(payload) {
  return { type: WRITE_PRODUCT, payload }
}


const baseUrl = "http://localhost:3000"
// const baseUrl = "https://react-server.macnesa.com"



// export const dididam = () => {
//   return (dispatch, getState) => { //atau return async (dispatch, getState) => {
//     // tulis async function
//     // complx business logic
//     // fetch('http://yourlink.com')
//     //   .then(response => response.json())
//     //   .then(json => {
//     //     dispatch(conterIncremented(json))
//     //   })
//   }
// }


export function getProducts() {
  return async (dispatch) => {
    try {
      const request = await
        fetch(baseUrl + `/customer/products`,
          {
            method: "GET",
            // headers: {
            //   access_token: localStorage.getItem("myToken")
            //   // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc2NzAwOTY4fQ.2QIA-QzLozcnavVkPd933C1Mu1ayKtNKfMp9nGFE7ZA"
            // },
          }
        )
      let respon = await request.json()

      if (!request.ok) throw respon

      dispatch(writeProduct(respon))
            
      return true
    } catch (error) {
      throw error
      // console.log(error);
    }
  }
}



export function getProductById(id) {
  return async (dispatch) => {
    try {
      const request = await
        fetch(baseUrl + `/customer/products/` + id,
          {
            method: "GET",
            headers: {
              access_token: localStorage.getItem("myToken")
              // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc2NzAwOTY4fQ.2QIA-QzLozcnavVkPd933C1Mu1ayKtNKfMp9nGFE7ZA"
            },
          }
        )
      let respon = await request.json()

      if (!request.ok) throw respon

      // console.log(respon, "yesh");
      dispatch(writeProductById(respon))
      return true
    } catch (error) {
      throw error
      // console.log(error);
    }
  }
}