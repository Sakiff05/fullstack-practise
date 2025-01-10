import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "axios";

export default function Cards() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      let res = await axios.get("http://localhost:5000/cards");
      setData(res.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, [setData]);

  return (
    <div className="px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mt-10 ">
        {data.map((card) => (
          <Card card={card} key={card._id} data={data} setData={setData} />
        ))}
      </div>
    </div>
  );
}
