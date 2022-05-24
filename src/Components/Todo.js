import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"; // import first
import { ToastContainer, toast } from "react-toastify"; // then this

import axios from "axios";
import TodoList from "./TodoList";
const Todo = () => {
  const [data, setData] = useState([]);
  const [filterdata, setFilterData] = useState("");
  const [loader, setLoader] = useState(false);
  const [doubleclicked, setDoubleClicked] = useState("bilal");
  const [itemid, setItemId] = useState("");

  let count = 0;

  const fetchData = async () => {
    setLoader(true);
    try {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(response.data, "res");
      setData(response.data);
      setLoader(false);
    } catch (error) {
      console.log(error, "err");
      toast.error(
        ` 
         ${error.message} `,
        {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        }
      );
      setLoader(false);
    }
  };

  const deleteList = (item) => {
    console.log(item, "delete daata");
    console.log("double clicked");
    setDoubleClicked("ali");
    console.log(doubleclicked, "useEffect");

    console.log(itemid, "itemid");

    console.log("deleted successfully");

    const newarr = data.filter((val) => val.id !== item.id);
    console.log(newarr, "new");
    setData(newarr);
  };

  const getUserData = async (item) => {
    console.log(item, "itemm");
    console.log("hello");

    try {
      const response = await axios(
        `https://jsonplaceholder.typicode.com/users/${item}`
      );

      console.log(count, "before");

      console.log(count, "after");
      // setDoubleClicked("ali");

      console.log(response.data, "user data");
      setFilterData(response.data);
      toast.success(
        `Username: ${response.data.name} 
         Email: ${response.data.email} `,
        {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        }
      );
    } catch (error) {
      console.log(error, "err");
      toast.error(
        ` 
         ${error} `,
        {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        }
      );
    }
  };

  return (
    <div>
      <div className="header_div">
        <h1>Todo Application</h1>

        <button className="button" onClick={fetchData}>
          {loader ? <>Loading.....</> : <>Fetch Todos</>}
        </button>
      </div>

      <div className="list_comp">
        {data.map((item, i) => (
          <TodoList
            data={item}
            onClick={getUserData}
            handleRemove={deleteList}
            id={i}
          />
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Todo;
