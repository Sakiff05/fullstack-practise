import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "axios";
import Search from "../search/Search";

export default function Cards() {
  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState([]);

  async function getData() {
    try {
      let res = await axios.get("http://localhost:5000/cards");
      setData(res.data);
      setTempData(res.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Search tempData={tempData} setData={setData} />
      {data.length > 0 ? (
        <div className="cards md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mt-10 ">
            {data.map((card) => (
              <Card card={card} key={card._id} data={data} setData={setData} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className="text-center text-4xl font-bold mt-20 mb-24">
          Nothing found
        </h1>
      )}
    </>
  );
}
