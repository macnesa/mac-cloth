import { useEffect, useState } from 'react';

import {
  Table, React, Button, Modal, Label, TextInput, Checkbox, Select,
} from 'flowbite-react';


import { useDispatch, useSelector } from "react-redux"
import { act_addAdmin } from '../store/actions/actionCreator';


export default function Home() {
  const { product, category } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getCategories())
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
      username: "", 
      email: "", 
      password: "", 
      phoneNumber: 0, 
      address: ""
    } 
  )


  function updateAddForm(event) {
    const { name, value } = event.target;
    setAddFormData(
      {
        ...addFormData,  
        [name]: value 
      }
    );
  }
     
  function triggerAdd(event) {
    event.preventDefault() 
    dispatch(act_addAdmin(addFormData))
      .then((data) => {
        if (data == true) {
          // togglePopUpAdd()
        }
      })
      .catch((error) => {
        console.log(error, 'libi')
      })
  }

  return (
    <>
      {/* <div>Add  New Admin</div>  */}

      <form onSubmit={triggerAdd} className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Add New Admin
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="username"
                    value="Username"
                  />
                </div>
                <TextInput
                  id="username"
                  name="username"
                  placeholder=""
                  required={true}
                  onChange={updateAddForm}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Email"
                  />
                </div>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  required={true}
                  onChange={updateAddForm}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="password"
                    value="Password"
                  />
                </div>
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  required={true}
                  onChange={updateAddForm}
                />
              </div> 
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="phoneNumber"
                    value="Phone Number"
                  />
                </div>
                <TextInput
                  id="phoneNumber"
                  name="phoneNumber"
                  type="number"
                  placeholder="Optional"
                  required={true}
                  onChange={updateAddForm}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="address"
                    value="Address"
                  />
                </div>
                <TextInput
                  id="address"
                  name="address"
                  type="text" 
                  placeholder="Optional" 
                  onChange={updateAddForm}
                />
              </div>
              <div className="w-full">
                <Button type="submit" >
                  Submit
                </Button>
              </div> 
            </form>

    </>

  );
}



