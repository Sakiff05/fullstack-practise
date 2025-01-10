import axios from 'axios';
import Swal from "sweetalert2"
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router'

export default function Details() {
    const[data,setData]=useState({})
    const{id}=useParams("id")
    const navigate=useNavigate()

    async function getData(){
        try {
            let res= await axios.get(`http://localhost:5000/cards/${id}`)
            setData(res.data.myproduct)
        } catch (error) {
            console.log(error.message);
        }

    }

    function handleDelete(id,e) {
        e.stopPropagation()
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`http://localhost:5000/cards/${id}`).then(() => {
            setData([...data].filter((data) => data._id != id));
          });
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
      
      }

    useEffect(()=>{
        getData()
    },[setData])

  return (
   <div className='flex flex-col items-center w-5/12'>
    <button className='border border-rose-400 rounded p-2 bg-rose-400 mt-5 hover:bg-rose-300 text-white text-xl w-5/12' onClick={()=>navigate(-1)}>GO BACK</button>
     <div className="card w-full cursor-pointer px-24 w-4/12 mt-10">
      <div className="imgWrapper">
        <img src={`${data.image}`} alt="" className="w-full" />
      </div>
      <div className="cardText mt-4 flex flex-col gap-2 items-center">
        <span className="bg-black text-white p-2 ">{data.country}</span>
        <p className="font-bold text-center">{data.description}</p>
        <button className="border border-rose-400 rounded p-2 bg-rose-400 mt-5 hover:bg-rose-300 text-white text-xl w-8/12" onClick={(e)=>handleDelete(data._id,e)} >
        DELETE
      </button>
      </div>
     
    </div>
   </div>
  )
}
