import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import FavoriteCard from "../../components/favoriteCard/FavoriteCard";

export default function Favorite() {
  const favorite = useSelector((state) => state.favorite.favorite);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Helmet>
        <title>Favorites</title>
        <meta name="description" content="favorite page" />
      </Helmet>

      {favorite.length == 0 ? (
        <h1 className="pt-40 text-center text-4xl">
          You have nothing in your favorites
        </h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 pt-32 px-20  ">
          {favorite.map((card) => (
            <FavoriteCard card={card} key={card._id} />
          ))}
        </div>
      )}
    </div>
  );
}
