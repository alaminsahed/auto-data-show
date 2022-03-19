import React, { useEffect, useState } from "react";
import {
  Paper,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Pagination,
  Table,
} from "@mui/material";
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
    fetchData();
    const autoTiming = setTimeout(() => {
      setPage((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(autoTiming);
    };
  });

  const fetchData = async () => {
    await axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
      )
      .then((res) => setInfo([...info, ...res.data.hits]));
  };

  return (
    <div>
      <h1>working</h1>

      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {/* <TableCell>Created_at</TableCell> */}
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>URL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {info.slice(page * 10, page * 10 + 10).map((value, i) => {
                return (
                  <TableRow>
                    <TableCell>{value.title}</TableCell>
                    <TableCell>{value.author}</TableCell>
                    <TableCell>{value.url}</TableCell>
                    <TableCell>{value.created_at}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <Pagination
            count={page + 1}
            page={page}
            color="primary"
            variant="outlined"
            shape="rounded"
          />
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Home;
