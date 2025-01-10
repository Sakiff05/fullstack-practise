import axios from "axios";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

export default function Details() {
  const [data, setData] = useState({});
  const { id } = useParams("id");
  const navigate = useNavigate();

  async function getData() {
    try {
      let res = await axios.get(`http://localhost:5000/cards/${id}`);
      setData(res.data.myproduct);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, [setData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex flex-col items-center justify-center w-full py-24">
      <Helmet>
        <title>Details | {`${data.country}`}</title>
        <meta name="description" content="details page" />
      </Helmet>
      <button
        className="border border-rose-400 rounded p-2 bg-rose-400 mt-5 hover:bg-rose-300 text-white text-xl w-5/12"
        onClick={() => navigate(-1)}
      >
        GO BACK
      </button>
      <div className="card  cursor-pointer  w-6/12 my-10">
        <div className="imgWrapper h-[400px]">
          <img
            src={`${data.image}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="cardText mt-4 flex flex-col gap-2 items-center">
          <span className="bg-black text-white p-2 ">{data.country}</span>
          <p className="font-bold">{data.title}</p>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}
