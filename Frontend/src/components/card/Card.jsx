import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2"

export default function Card({ card, data, setData }) {

const navigate =useNavigate()

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
        setData([...data].filter((card) => card._id != id));
      });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  
  }

  return (
    <div className="card w-full cursor-pointer" onClick={()=>navigate(`details/${card._id}`)}>
      <div className="imgWrapper">
        <img src={`${card.image}`} alt="" className="w-full" />
      </div>
      <div className="cardText mt-4 flex flex-col gap-2 items-start">
        <span className="bg-black text-white p-2 ">{card.country}</span>
        <p className="font-bold">{`${card.description.slice(0, 40)}...`}</p>
      </div>
      <button className="border border-rose-400 rounded p-2 bg-rose-400 mt-5  hover:bg-rose-300 text-white text-xl" onClick={(e)=>handleDelete(card._id,e)} >
        DELETE
      </button>
    </div>
  );
}
