import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../api/url";
import Listitem from "../ListItem/Listitem";
import Skeleton from "@mui/material/Skeleton";

const NewsComponent = () => {
  const [varible_name, function_name] = useState("Linkdin news hello");
  // const []
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setpost] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {

      // let body={
      //   page: page,
      //   name:'test'
      // }

      const body=new FormData();

      body.append('page',page);
      body.append('name',"value")




      let res = await axios.post(`${baseUrl}/meeting/list-all`, body);

      setLoading(false);

      console.log(res.data.data);

      let payload = res.data.data;

      setpost(payload);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="card  p-2">
      <h5>{varible_name}</h5>
      <ul>
        {loading && (
          <div>
            <div className="mt-2">
              <Skeleton height={50} />
            </div>
            <div className="mt-2">
              <Skeleton height={50} />
            </div>
            <div className="mt-2">
              <Skeleton height={50} />
            </div>
            <div className="mt-2">
              <Skeleton height={50} />
            </div>
            <div className="mt-2">
              <Skeleton height={50} />
            </div>{" "}
            <div className="mt-2">
              <Skeleton height={50} />
            </div>{" "}
            <div className="mt-2">
              <Skeleton height={50} />
            </div>{" "}
            <div className="mt-2">
              <Skeleton height={50} />
            </div>
          </div>
        )}

        {loading!==true && data?.map((item) => {
          return (
            <Listitem
              msg={item?.name}
              time="2d"
              number="1200"
              textColor="text-danger"
              textColor2="text-primary"
            />
          );
        })}

        {page == 1 ? (
          <button
            onClick={() => {
              setpage(2);
            }}
            className={"btn btn-danger"}
          >
            Next Page
          </button>
        ) : (
          <button
            onClick={() => {
              setpage(1);
            }}
            className={"btn btn-primary"}
          >
            Previous page
          </button>
        )}
      </ul>
    </div>
  );
};

export default NewsComponent;
