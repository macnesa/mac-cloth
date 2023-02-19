import { useEffect, useState } from 'react';

import {
  Table, React, Button, Modal, Label, TextInput, Checkbox, Select,
} from 'flowbite-react';


import { useDispatch, useSelector } from "react-redux"
import { getCategories, act_addCategory, deleteCategory } from '../store/actions/actionCreator';



import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"






export default function Home() {
  const { product, category } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    // error handler nya
  }, []);

  const [popUpToggle, setPopUpToggle] = useState(
    {
      is_delete_PopUp: false,
      is_add_PopUp: false,
      CategoryId: 0
    }
  )

  const [addFormData, setAddFormData] = useState(
    {
      name: "",
    }
  )

  function showError(msg) {
    Toastify({
      text: msg,
      duration: 3000,
      close: true,
    }).showToast();
  }


  function showNotif(msg) {
    Toastify({
      text: msg,
      duration: 3000,
      close: true,
    }).showToast();
  }

  function updateAddForm(event) {
    const { name, value } = event.target;
    setAddFormData(
      {
        ...addFormData,
        [name]: value
      }
    );
  }

  // console.log(addFormData);

  function onClick(event) {
    return event.preventDefault()
  }
  function onClose(event) {
    return event.preventDefault()

  }

  function toDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-CA');
  }

  function showPopUpDelete(id) {
    setPopUpToggle(
      {
        ...popUpToggle,
        is_delete_PopUp: true,
        CategoryId: id
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

  function togglePopUpAdd() {
    setPopUpToggle(
      {
        ...popUpToggle,
        is_add_PopUp: !popUpToggle.is_add_PopUp,
      }
    )
  }


  function triggerDelete() {
    dispatch(deleteCategory(popUpToggle.CategoryId))
      .then((data) => {
        if (data == true) {
          hidePopUpDelete()
          showNotif('Category has been deleted')
        }
      })
      .catch((error) => {
        showError(error.error)
        console.log(error, 'libi')
      })
  }
  function triggerAdd(event) {
    event.preventDefault()
    dispatch(act_addCategory(addFormData))
      .then((data) => {
        if (data == true) {
          togglePopUpAdd()
          showNotif('Added New Category')
        }
      })
      .catch((error) => {
        showError(error.error)
        console.log(error, 'libi')
      })
  }

  return (
    <>

      <div className='p-0'>
        <Button onClick={() => togglePopUpAdd()} size="md"> Add </Button>

        <div className='w-full mt-5'>
          <Table hoverable={true}>
            <Table.Head>
              <Table.HeadCell>
                Name
              </Table.HeadCell>
              <Table.HeadCell>
                Created At
              </Table.HeadCell>
              <Table.HeadCell>
                Updated At
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">
                  Edit
                </span>
              </Table.HeadCell>
            </Table.Head>
            {category.map(each => {
              return (
                <Table.Body key={each.id} className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {each.name}
                    </Table.Cell>
                    <Table.Cell>
                      {toDate(each.createdAt)}
                    </Table.Cell>
                    <Table.Cell>
                      {toDate(each.updatedAt)}
                    </Table.Cell>
                    <Table.Cell className='flex gap-4'>
                      <Button onClick={() => { showPopUpDelete(each.id) }} size="md" className='bg-red-600'>
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              )
            })}
          </Table>
        </div>
        <div>
          <Modal
            show={popUpToggle.is_delete_PopUp}
            size="md"
            popup={true}
            onClose={hidePopUpDelete}
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
                <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this category?
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
          onClose={togglePopUpAdd}
        >
          <Modal.Header />
          <Modal.Body>
            <form onSubmit={triggerAdd} className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Add New Category
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
                  placeholder="e.g Kids shirt"
                  required={true}
                  onChange={updateAddForm}
                />
              </div>
              <div className="w-full">
                <Button type="submit" >
                  Submit
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>

    </>

  );
}



