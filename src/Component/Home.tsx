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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const pageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    fetchData();
    const autoTiming = setTimeout(() => {
      setPage((prev) => prev + 1);
    }, 10000);

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

  const detailsInfo = (value: any) => {
    navigate("/infoDetails", { state: value });
  };
  return (
    <div>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Created_at</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>URL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {info.slice(page * 10, page * 10 + 10).map((value, i) => {
                return (
                  <TableRow onClick={() => detailsInfo(value)}>
                    <TableCell>{value.created_at}</TableCell>
                    <TableCell>{value.title}</TableCell>
                    <TableCell>{value.author}</TableCell>
                    <TableCell>{value.url}</TableCell>
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
            onChange={pageHandler}
          />
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Home;
