import {
  LOADING,
  COUNTER_INCREMENTER,
  WRITE_PRODUCTS,
  WRITE_PRODUCT,
  WRITE_PRODUCT_FAILED,
  
  WRITE_PRODUCTS_BY_TYPE,
  WRITE_PRODUCTS_BY_TYPE_FAILED,
  
  WRITE_CATEGORIES,
  WRITE_CATEGORIES_FAILED
  
} from "./actionTypes"

// export const conterIncremented = (payload) => {
//   return { type: COUNTER_INCREMENTER, payload }
// }

export function loading() {
  return { type: LOADING }
}

export function writeProduct(payload) {
  return { type: WRITE_PRODUCTS, payload }
}

export function writeProductById(payload) {
  return { type: WRITE_PRODUCT, payload }
}
export function writeProductsByType(payload) {
  return { type: WRITE_PRODUCTS_BY_TYPE, payload }
} 



export function writeProductFailed(payload) {
  return { type: WRITE_PRODUCT_FAILED, payload }
}


const baseUrl = "http://localhost:3000"
// const baseUrl = "https://react-server.macnesa.com"


// /////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////


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
      dispatch(loading())
      const request = await
        fetch(baseUrl + `/customer/products/` + id,
          {
            method: "GET",
          }
        )
      let respon = await request.json()
      if (!request.ok) throw respon.error
      // console.log(respon, "yesh");
      dispatch(writeProductById(respon))
    } catch (error) {
      dispatch(writeProductFailed(error))
    }
  }
}



export function getCategories() {
  return async (dispatch) => {
    try {
      // dispatch(loading())
      const request = await
        fetch(baseUrl + `/customer/categories/`,
          {
            method: "GET",
          }
        )
      let respon = await request.json()
        
      if (!request.ok) throw respon.error
      dispatch({ type: WRITE_CATEGORIES, payload: respon })
      
    } catch (error) { 
      dispatch({ type: WRITE_CATEGORIES_FAILED, payload: error })
    }
  }
}


export function getByType(type) {
  return async (dispatch) => {
    try {
      dispatch(loading())


      const request = await
        fetch(baseUrl + `/customer/types`,
          {
            method: "GET",
          }
        )

      let respon = await request.json()
      if (!request.ok) throw respon.error
      const foundObj = respon.find(obj => obj.name === type);

      if (foundObj) {

        const request = await
          fetch(baseUrl + `/customer/products/?type=` + foundObj.id,
            {
              method: "GET",
            }
          )

        let respon = await request.json()
        if (!request.ok) throw respon.error
        dispatch(writeProductsByType(respon))

        // console.log(respon);
        // console.log(foundObj);
      }


    } catch (error) {
      dispatch(writeProductFailed(error))
    }
  }
}