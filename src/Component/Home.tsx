import React, { useEffect, useState } from "react";
import axios from "axios";

type InfoType = {
  title: string;
  url: string;
  created_at: Date;
  author: string;
  objectID: number;
};

const Home = () => {
  const [page, setPage] = useState(0);
  const [info, setInfo] = useState<InfoType[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
      )
      .then((res) => setInfo([...info, res.data.hits]));
  });

  useEffect(() => {
    const autoTiming = setTimeout(() => {
      setPage((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(autoTiming);
    };
  });
  console.log(info);
  return (
    <div>
      <h1>working</h1>
    </div>
  );
};

export default Home;
