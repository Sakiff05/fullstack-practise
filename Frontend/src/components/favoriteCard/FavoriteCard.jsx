import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addFavorite, removeFavorite } from "../../redux/slices/FavoriteSlice";
import { useEffect } from "react";

function FavoriteCard({ card }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.favorite);

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

export default FavoriteCard;
