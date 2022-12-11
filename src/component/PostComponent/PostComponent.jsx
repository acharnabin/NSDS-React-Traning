import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../api/url";
import PostCard from "../postcard/PostCard";

const PostComponent = () => {
  const [value, setValue] = useState("");
  const [description, set_description] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const [post, setpost] = useState([]);

  const reset = () => {
    setValue("");
    set_description("");
    setImage("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let obj = {
      heading: value,
      description: description,
      image: image,
    };

    setpost([...post, obj]);

    reset();
  };

  const getData = async () => {
    setLoading(true);
    try {
      console.log("1");

      let res = await axios.post(`${baseUrl}/meeting/list-all`);

      setLoading(false);

      setpost(res.data.data);
    } catch (error) {}
  };

  // CALL FUNCTION WHEN COMPONENT MOUNT
  useEffect(() => {
    getData();
   
 

  }, []);

  const [counter, setcounter] = useState(0);
  const [counter2,setCounter2]=useState(1);


  // FUNCTION WILL EXECUTE WHEN VALUE CHANGES
  useEffect(() => {
   
      if(counter%2===0){
        getData()
      }
  
  }, [counter]);


  // getData();

  return (
    <div>
      <h3>{counter}</h3>
      <button
        className="btn btn-warning"
        onClick={() => setcounter(counter + 1)}
      >
        +
      </button>

    
      <div className="card p-2">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Text</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter heading"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Description</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter description"
              value={description}
              onChange={(e) => set_description(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Image link</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter image link"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button type="submit" className="btn mt-2 btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div className="mt-2">
        {loading && (
          <>
          <div className="mt-2">
              <Skeleton height={500} />
            </div>
            <div className="mt-2">
              <Skeleton height={500} />
            </div>
            <div className="mt-2">
              <Skeleton height={500} />
            </div>
            <div className="mt-2">
              <Skeleton height={500} />
            </div>
            <div className="mt-2">
              <Skeleton height={500} />
            </div>
          </>
        )}

        {post.map((item, index) => {
          return <PostCard item={item} />;
        })}
      </div>
    </div>
  );
};

// component load => component updates => component unmount

export default PostComponent;
