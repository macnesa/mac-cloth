import { useEffect, useState } from 'react';

import {
  Table, React, Button, Modal, Label, TextInput, Checkbox, Select,
} from 'flowbite-react';


import { useDispatch, useSelector } from "react-redux"
import {
  getProducts,
  deleteProduct,
  getCategories,
  act_addProduct,
  getProductById,
  updateProductValue,
  updateProduct_imageValue
} from '../store/actions/actionCreator';


export default function Home() {
  const { product: { allProduct, productById }, category } = useSelector((state) => state)
  const dispatch = useDispatch()
  // dispatch(conterIncremented("payload"))
  // console.log(product);

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCategories())
    // error handler nya
  }, []);


  const [popUpToggle, setPopUpToggle] = useState(
    {
      is_delete_PopUp: false,
      is_add_PopUp: false,
      is_edit_PopUp: false,
      productId: 0
    }
  )

  const [addFormData, setAddFormData] = useState(
    {
      product: {
        name: "",
        description: "",
        price: null,
        mainImg: "",
        CategoryId: 0
      },
      images: [
        {
          imgUrl: ''
        },
        {
          imgUrl: ''
        },
        {
          imgUrl: ''
        },
      ]
    }
  )


  function updateAddForm(event) {
    const { name, value, accessKey } = event.target;
    if (name == "imgUrl") {
      let newarr = addFormData.images.map((each, index) => {
        if (index == accessKey) {
          each.imgUrl = value
        }; return each
      })
      setAddFormData(
        {
          ...addFormData,
          images: newarr
        }
      );
      // console.log(addFormData, "shomer achi"); 
    } else {
      setAddFormData(
        {
          ...addFormData,
          product: {
            ...addFormData.product,
            [name]: value
          }
        }
      );
    }
  }

  function updateEditForm(event) {
    const { value, name, id } = event.target
    if(name == "imgUrl") {
      dispatch(updateProduct_imageValue(value, id))
    } else {
      dispatch(updateProductValue(value, name))
    }
    // console.log(event.target.name, "shomer");
    // console.log(event.target.value, "shomer");

  }
  // console.log(addFormData);

  function onClick(event) {
    return event.preventDefault()
  }
  function onClose(event) {
    return event.preventDefault()

  }


  function showPopUpDelete(id) {
    setPopUpToggle(
      {
        ...popUpToggle,
        is_delete_PopUp: true,
        productId: id
      }
    )
  }
  function hidePopUpDelete() {
    setPopUpToggle(
      {
        ...popUpToggle,
        is_delete_PopUp: false
      }
    )
  }

  function hidePopUpEDit() {
    setPopUpToggle(
      {
        ...popUpToggle,
        is_edit_PopUp: false
      }
    )
  }

  function togglePopUpAdd() {
    setPopUpToggle(
      {
        ...popUpToggle,
        is_add_PopUp: !popUpToggle.is_add_PopUp,
      }
    )
  }


  function triggerDelete() {
    dispatch(deleteProduct(popUpToggle.productId))
      .then((data) => {
        if (data == true) {
          hidePopUpDelete()
        }
      })
      .catch((error) => {
        console.log(error, 'libi')
      })
  }

  function triggerAdd(event) {
    event.preventDefault()
    // console.log(addFormData);
    dispatch(act_addProduct(addFormData))
      .then((data) => {
        if (data == true) {
          togglePopUpAdd()
        }
      })
      .catch((error) => {
        console.log(error, 'libi')
      })
  }


  function gottaEdit(id) {
    dispatch(getProductById(id))
      .then((data) => {
        if (data == true) {
          setPopUpToggle(
            {
              ...popUpToggle,
              is_edit_PopUp: true,
              productId: id
            }
          )
          // const testing = productById.name
          // setAddFormData(
          //   {
          //     ...addFormData,
          //     product: {
          //       ...addFormData.product,
          //       name: testing
          //     }
          //   }
          // )
        }
      })
      .catch((error) => {
        console.log(error, 'libi')
      })
  }
  console.log(productById);

  return (
    <>
      <div>Homepage</div>








      <div className='p-0'>
        <Button onClick={() => togglePopUpAdd()} size="md"> Add </Button>
        <Table hoverable={true} className="w-[100px]">
          <Table.Head>
            <Table.HeadCell>
              Name
            </Table.HeadCell>
            <Table.HeadCell>
              Color
            </Table.HeadCell>
            <Table.HeadCell>
              Category
            </Table.HeadCell>
            <Table.HeadCell>
              Price
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">
                Edit
              </span>
            </Table.HeadCell>
          </Table.Head>
          {allProduct.map(each => {
            return (
              <Table.Body key={each.id} className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <img src={each.mainImg} className="h-10" />
                    {each.name}
                  </Table.Cell>
                  <Table.Cell>
                    {each.User.email}
                  </Table.Cell>
                  <Table.Cell>
                    {each.Category.name}
                  </Table.Cell>
                  <Table.Cell>
                    $2999
                  </Table.Cell>
                  <Table.Cell className='flex gap-4'>
                    <Button onClick={() => gottaEdit(each.id)} size="md">
                      Edit
                    </Button>
                    <Button onClick={() => { showPopUpDelete(each.id) }} size="md" className='bg-red-600'>
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            )
          })}
        </Table>
        <div>
          {/* delete popup */}
          <Modal
            show={popUpToggle.is_delete_PopUp}
            size="md"
            popup={true}
          // onClose={onClose}
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
                <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button
                    color="failure"
                    onClick={triggerDelete}
                  >
                    Yes, I'm sure
                  </Button>
                  <Button onClick={hidePopUpDelete}
                    color="gray"
                  // onClick={onClick}
                  >
                    No, cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>

        {/* add form */}
        <Modal
          show={popUpToggle.is_add_PopUp}
          size="md"
          popup={true}
          onClose={onClose}
        >
          {/* <Modal.Header className='border border-black'/> */}
          <Modal.Body className='pt-8  box-border'>
            <form onSubmit={triggerAdd} className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Add New Product
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="name"
                    value="Name"
                  />
                </div>
                <TextInput
                  id="name"
                  name="name"
                  placeholder="e.g Blue Cotton"
                  required={true}
                  onChange={updateAddForm}
                  value={addFormData.product.name}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="description"
                    value="Description"
                  />
                </div>
                <TextInput
                  id="description"
                  name="description"
                  type="text"
                  required={true}
                  onChange={updateAddForm}
                  value={addFormData.product.description}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="price"
                    value="Price"
                  />
                </div>
                <TextInput
                  id="price"
                  name="price"
                  type="number"
                  required={true}
                  onChange={updateAddForm}
                  value={addFormData.product.price}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="category"
                    value="Category"
                  />
                </div>
                <Select
                  id="category"
                  name="CategoryId"
                  required={true}
                  // value={addFormData.product.CategoryId}
                  onChange={updateAddForm}
                // onChange={(e) => {
                //   console.log(e.target.value, e.target.name,"lentyol");
                // }}
                >
                  <option disabled selected>Select</option>
                  {category.map(each => {
                    return (
                      <option key={each.id} value={each.id}>
                        {each.name}
                      </option>
                    )
                  })}
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="mainImg"
                    value="Main Image"
                  />
                </div>
                <TextInput
                  id="mainImg"
                  name="mainImg"
                  type="url"
                  placeholder="Url Format"
                  required={true}
                  onChange={updateAddForm}
                  value={addFormData.product.mainImg}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="imgUrl"
                    value="Related Image"
                  />
                </div>
                <TextInput
                  id="imgUrl"
                  name="imgUrl"
                  type="url"
                  accessKey="0"
                  placeholder="Url Format"
                  onChange={updateAddForm}
                  required={true}
                />
                <TextInput
                  id="imgUrl"
                  name="imgUrl"
                  type="url"
                  accessKey="1"
                  placeholder="Url Format"
                  onChange={updateAddForm}
                  required={true}
                />
                <TextInput
                  id="imgUrl"
                  name="imgUrl"
                  type="url"
                  accessKey="2"
                  placeholder="Url Format"
                  onChange={updateAddForm}
                  required={true}
                />
              </div>
              <div className="w-full flex gap-4" >
                <Button type="submit" >
                  {/* {(isEdit) ? "Update" : "Submit"} */}
                  Submit
                </Button>
                <Button onClick={togglePopUpAdd} style={{ color: "black" }} className='bg-gray-200 text-black hover:bg-slate-400' >
                  Cancel
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>

        {/* edit form */}
        <Modal
          show={popUpToggle.is_edit_PopUp}
          size="md"
          popup={true}
          onClose={onClose}
        >
          {/* <Modal.Header className='border border-black'/> */}
          <Modal.Body className='pt-8  box-border'>
            <form onSubmit={triggerAdd} className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Edit Product
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="name"
                    value="Name"
                  />
                </div>
                <TextInput
                  id="name"
                  name="name"
                  placeholder="e.g Blue Cotton"
                  required={true}
                  onChange={updateEditForm}
                  value={productById.name}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="description"
                    value="Description"
                  />
                </div>
                <TextInput
                  id="description"
                  name="description"
                  type="text"
                  required={true}
                  onChange={updateEditForm}
                  value={productById.description}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="price"
                    value="Price"
                  />
                </div>
                <TextInput
                  id="price"
                  name="price"
                  type="number"
                  required={true}
                  onChange={updateEditForm}
                  value={productById.price}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="category"
                    value="Category"
                  />
                </div>
                <Select
                  id="category"
                  name="CategoryId"
                  required={true}
                  // value={addFormData.product.CategoryId}
                  onChange={updateEditForm}
                // onChange={(e) => {
                //   console.log(e.target.value, e.target.name,"lentyol");
                // }}
                >
                  {category.map(each => {
                    return (
                      <option key={each.id} value={each.id}
                        selected={each.id == productById.CategoryId} >
                        {each.name}
                      </option>
                    )
                  })}
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="mainImg"
                    value="Main Image"
                  />
                </div>
                <TextInput
                  id="mainImg"
                  name="mainImg"
                  type="url"
                  placeholder="Url Format"
                  required={true}
                  onChange={updateEditForm}
                  value={productById.mainImg}
                />
              </div>


              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="imgUrl"
                    value="Related Image"
                  />
                </div>
                {popUpToggle.is_edit_PopUp &&

                  productById.Images.map(each => {
                    return (
                      <TextInput key={each.id}
                        id={each.id}
                        name="imgUrl"
                        type="url"
                        accessKey="0"
                        placeholder="Url Format"
                        onChange={updateEditForm}
                        value={each.imgUrl}
                      />
                    )
                  })} 
              </div>


              <div className="w-full flex gap-4" >
                <Button type="submit" >
                  {/* {(isEdit) ? "Update" : "Submit"} */}
                  Submit
                </Button>
                <Button onClick={hidePopUpEDit} style={{ color: "black" }} className='bg-gray-200 text-black hover:bg-slate-400' >
                  Cancel
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>


      </div>

    </>

  );
}




{/* 
      <div class="relative overflow-x-auto mt-10 ">
    <table class="w-full text-sm text-left text-black">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3 w-5 ">
                    #
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Duration
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="each,index in spotifyTopTracks.items" class="bg-white border-b">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                    x
                </th>
                <td class="px-6 py-2 flex ">
                  <img  width="50" height="50" alt=""/>
                  <div class="ml-2 p-0  grid  " >
                    <p class="font-bold top-0 text-[1.1rem] flex " >x</p>
                    <p class="self-end" >x</p>
                  </div>
                </td>
                <td class="px-6 py-2">
                 x
                </td>
                <td class="px-6 py-2">
                   x
                </td>
                <td>
                  <button  type="button" class=" mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Play</button>        
                  <button  class=" mt-4 focus:outline-none text-white bg-cyan-700 hover:bg-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" >Download</button>   
                </td>
            </tr>
        </tbody>
    </table>
</div> */}