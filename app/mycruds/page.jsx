"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";
 
export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();
 

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  
  const [data , setdata] = useState([])

 const delteitem = async(dater) => {
   const deletecrud = await axios.delete('https://backend-crud-j5a2.onrender.com/' , dater._id )
   

 }

  useEffect(() => {
   
    const getusercurdswithid = async() => {
     const getcruds = await axios.get('https://backend-crud-j5a2.onrender.com/')
     setdata(getcruds.data)

    
   
    }

    getusercurdswithid()



  })

  return <div className="Hello" >Welcome , {user.firstName} {user.lastName}
    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Desc
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        {
    
    
  
    
    data.filter((item) =>  {
      return user.id.toLowerCase() === '' ? item : item.userid.includes(user.id)
    }
    
    ).map(dater => 
  
      <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {dater.sellitem}
                </th>
                <td class="px-6 py-4">
                   {dater.desc}
                </td>
                <td class="px-6 py-4">
                    {dater.price}
                </td>
                <td class="px-6 py-4">
                    {dater._id}
                </td>
                <td class="px-6 py-4">
                    <a href="#" onClick={() => delteitem(dater)} class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                </td>
            </tr>
         
        </tbody>


     )
   }

      
    </table>
</div>



    <div>
   


 
    </div>
  
  </div>;
}