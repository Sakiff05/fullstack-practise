import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { IconButton } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/slices/FavoriteSlice";

export default function Card({ card, data, setData }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.favorite);

  function handleDelete(id, e) {
    e.stopPropagation();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/cards/${id}`).then(() => {
          setData([...data].filter((card) => card._id != id));
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }

  function handleAddFavorite(e) {
    e.stopPropagation();
    let isExist = favorite.find((item) => item._id == card._id);
    if (isExist) {
      dispatch(removeFavorite(card));
    } else {
      dispatch(addFavorite(card));
    }
  }

  return (
    <div
      className="card w-full cursor-pointer"
      onClick={() => navigate(`details/${card._id}`)}
    >
      <div className="imgWrapper h-[160px] ">
        <img
          src={`${card.image}`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="cardText mt-4 flex flex-col gap-2 items-start">
        <span className="bg-black text-white p-2 ">{card.country}</span>
        <p className="font-bold">{card.title}</p>
        <p>{`${card.description.slice(0, 40)}...`}</p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <button
          className="border border-rose-400 rounded p-2 bg-rose-400   hover:bg-rose-300 text-white text-xl"
          onClick={(e) => handleDelete(card._id, e)}
        >
          DELETE
        </button>
        <IconButton onClick={(e) => handleAddFavorite(e)}>
          {favorite.find((item) => item._id == card._id) ? (
            <FavoriteIcon fontSize="large" color="secondary" />
          ) : (
            <FavoriteBorder fontSize="large" color="secondary" />
          )}
        </IconButton>
      </div>
    </div>
  );
}
