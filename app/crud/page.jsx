"use client";
import { useUser,UserButton } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";
 
export default function page() {
  const [cruddata , setcruddata] = useState()
  const { isLoaded, isSignedIn, user } = useUser();
  const [data , setdata] = useState(['Loading'])
 
  useEffect(() => {
    

    const datagetter = async() => {
      const getdata = await axios.get('https://backend-crud-j5a2.onrender.com/')
     setTimeout(() => {
      setdata(getdata.data)
  
     }, 10000);
      

    }
    datagetter()
 

  })

  if (!isLoaded || !isSignedIn) {
    return null;
  }
 
  return   <div className="crud" >
  <div className="tittle">Cruds</div> 

  <div class=" m-10 relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Publisher
                  
                </th>
            </tr>
        </thead>
        <tbody>
        
        {
                   data.map(dater => 
                    <>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             
                    
                  




                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {dater.sellitem}
                </th>
                <td class="px-6 py-4">
                {dater.price} {data == "Loading" ? <div></div> : "$" }
                </td>
                <td class="px-6 py-4">
                {dater.desc}
                {data == "Loading" ?   <div className="loading" >
                <div className="loadname">Loading...</div>
               </div> : <div className="none" ></div>}
            
                </td>
                <td class="px-6 py-4">
                {dater.by}
                </td>
            
         
                </tr>
 </> )   
                }
           
     
        
        </tbody>
    </table>
</div>

   {

     
  
   }

     

  




    </div>

 

  ;
}