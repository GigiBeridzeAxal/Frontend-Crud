'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'


export default function page() {
    const [sellitem , setsellitem] = useState()
    const [price , setprice] = useState()
    const [desc , setdesc] = useState()
    const {isLoaded , isSignedIn , user} = useUser()
    const [sucess , setsuccess] = useState('')

    const sellset = (e) => {
      
      setsellitem(e.target.value)
      


    }
    const priceset = (e) => {
      
      setprice(e.target.value)


    }
    const descset = (e) => {
      
      setdesc(e.target.value)


    }
    const senddata = async() => {
       const sd = await axios.post('https://backend-crud-j5a2.onrender.com/' , {
          sellitem,
          price,
          desc,
          by: user.firstName,
          userid: user.id

        } )  
      
        if(sd){
          setsuccess("Suc")

        }else{
          setsuccess("notsuc")
        }


    }

  return (
    <div className="addcrud">
      <div className="tittle">AddCrud</div>
      <div className="form">
        {
          sucess == "Suc" ? <div className='text-green-600' >Succesfully Added Crud</div> : <div></div>
        }
           {
          sucess == "notsuc" ? <div className='text-red-500' >Something Went Wrong Try Again</div> : <div></div>
        }
        <input onChange={(e) => sellset(e)} placeholder='SellItem' className="Sellname"  type="text" />
        <input onChange={(e) => priceset(e)}  placeholder='Price' className="Price" type="text" />
        <input onChange={(e) => descset(e)} placeholder='Description' className="Desc" type="text" />
         <button onClick={() => senddata()} className='addcrudbtn' >Add Crud</button>

      </div>


    </div>
  )
}
