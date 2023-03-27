import { 
  COUNTER_INCREMENTER, 
  WRITE_PRODUCTS, 
  WRITE_GENRES, 
  WRITE_PRODUCT, 
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_IMAGEVALUE
} from "./actionTypes"

export function conterIncremented(payload) {
  return { type: COUNTER_INCREMENTER, payload }
}


export function writeProduct(payload) {
  return { type: WRITE_PRODUCTS, payload }
}

export function writeProductById(payload) {
  return { type: WRITE_PRODUCT, payload }
}

export function updateProductValue(payload, name) {
  return { type: UPDATE_PRODUCT, payload, name }
}

export function updateProduct_imageValue(payload, id) {
  return { type: UPDATE_PRODUCT_IMAGEVALUE, payload, id }
}
 

export function writeGenres(payload) {
  return { type: WRITE_GENRES, payload }
}


// export const conterIncremented = (payload) => {
//   return { type: COUNTER_INCREMENTER, payload }
// }

const baseUrl = "http://localhost:3000"
// const baseUrl = "https://react-server.macnesa.com"

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



export function act_login(data) {
  return async (dispatch) => {
    try {
      const request = await
        fetch(baseUrl + `/users/login`,
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }
        )
      let respon = await request.json()

      if (!request.ok) throw respon

      // localStorage.setItem("myToken", respon.access_token)
          
      console.log(respon.access_token);
      
      return true
    } catch (error) {
      throw error
      // console.log(error);
    }
  }
}




export function act_addProduct(data) {
  return async (dispatch) => {
    try {
      const request = await
        fetch(baseUrl + `/admin/products`,
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              access_token: localStorage.getItem("myToken")
              // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc2NzAwOTY4fQ.2QIA-QzLozcnavVkPd933C1Mu1ayKtNKfMp9nGFE7ZA"

            },
            body: JSON.stringify(data)
          }
        )
      let respon = await request.json()

      if (!request.ok) throw respon

      // localStorage.setItem("myToken", respon.access_token)

      // console.log(respon, "bonai");
      dispatch(getProducts())

      return true
    } catch (error) {
      throw error
      // console.log(error);
    }
  }
}

export function act_EditProduct(data) {
  return async (dispatch) => {
    try {
      const request = await
        fetch(baseUrl + `/admin/products`,
          {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json',
              access_token: localStorage.getItem("myToken")
              // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc2NzAwOTY4fQ.2QIA-QzLozcnavVkPd933C1Mu1ayKtNKfMp9nGFE7ZA"

            },
            body: JSON.stringify(data)
          }
        )
      let respon = await request.json()

      if (!request.ok) throw respon

      // localStorage.setItem("myToken", respon.access_token)

      // console.log(respon, "bonai");
      dispatch(getProducts())

      return true
    } catch (error) {
      throw error
      // console.log(error);
    }
  }
}


export function act_addCategory(data) {
  return async (dispatch) => {
    try {
      const request = await
        fetch(baseUrl + `/admin/categories`,
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              access_token: localStorage.getItem("myToken")
              // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc2NzAwOTY4fQ.2QIA-QzLozcnavVkPd933C1Mu1ayKtNKfMp9nGFE7ZA"

            },
            body: JSON.stringify(data)
          }
        )
      let respon = await request.json()

      if (!request.ok) throw respon
      dispatch(getCategories())

      return true
    } catch (error) {
      throw error
      // console.log(error);
    }
  }
}


export function act_addAdmin(data) {
  return async (dispatch) => {
    try {
      const request = await
        fetch(baseUrl + `/admin/register`,
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              access_token: localStorage.getItem("myToken")
              // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc2NzAwOTY4fQ.2QIA-QzLozcnavVkPd933C1Mu1ayKtNKfMp9nGFE7ZA"

            },
            body: JSON.stringify(data)
          }
        )
      let respon = await request.json()

      if (!request.ok) throw respon
      console.log(request);
      return true
    } catch (error) {
      throw error
      // console.log(error);
    }
  }
}


export function getProducts() {
  return async (dispatch) => {
    try {
      const request = await
        fetch(baseUrl + `/admin/products`,
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

      // console.log(respon);
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
        fetch(baseUrl + `/admin/products/` + id,
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

      // console.log(respon, "yesh lach");
      dispatch(writeProductById(respon))
      return true
    } catch (error) {
      throw error
      // console.log(error);
    }
  }
}


export function getCategories() {
  return async (dispatch) => {
    try {
      const request = await
        fetch(baseUrl + `/admin/categories`,
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

      // console.log(respon);
      dispatch(writeGenres(respon))
      return true
    } catch (error) {
      throw error
      // console.log(error);
    }
  }
}



export function deleteProduct(id) {
  return async (dispatch) => {
    try {
      const request = await
        fetch(baseUrl + `/admin/products/` + id,
          {
            method: "DELETE",
            headers: {
              access_token: localStorage.getItem("myToken")
              // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc2NzAwOTY4fQ.2QIA-QzLozcnavVkPd933C1Mu1ayKtNKfMp9nGFE7ZA"
            },
          }
        )
      let respon = await request.json()

      if (!request.ok) throw respon

      // console.log(respon);
      dispatch(getProducts())

      return true
    } catch (error) {
      throw error
      // console.log(error);
    }
  }
}


export function deleteCategory(id) {
  return async (dispatch) => {
    try {
      const request = await
        fetch(baseUrl + `/admin/categories/` + id,
          {
            method: "DELETE",
            headers: {
              access_token: localStorage.getItem("myToken")
              // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc2NzAwOTY4fQ.2QIA-QzLozcnavVkPd933C1Mu1ayKtNKfMp9nGFE7ZA"
            },
          }
        )
      let respon = await request.json()

      if (!request.ok) throw respon

      dispatch(getCategories())

      return true
    } catch (error) {
      throw error
      // console.log(error);
    }
  }
}