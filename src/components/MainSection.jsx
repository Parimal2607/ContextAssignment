import React, { createContext, useEffect, useState } from "react";
import MainCard from "./MainCard";
export const GlobalInfo = createContext();
const MainSection = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState({});
  const [count, setCount] = useState(0);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  const handleDelete = (id) => {
    setData((pre) => pre.filter((user) => user.id !== id));
  };
  const handlLike = (id) => {
    const tempArr = [...data];
    const index = data.findIndex((user) => user.id === id);
    tempArr[index].isLike = !tempArr[index].isLike;
    setData(tempArr);
    if (tempArr[index].isLike === true) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  const handleUpdateData = (id) => {
    const tempArr = [...data];
    const index = data.findIndex((user) => user.id === id);
    tempArr[index] = modalData;
    setData(tempArr);
  };
 
  return (
    <GlobalInfo.Provider
      value={{
        data,
        handleDelete,
        modalData,
        setModalData,
        setData,
        handlLike,
        handleUpdateData,
        
      }}
    >
      <div className="container text-end mt-2">
        <div className="fav-count ">
          Fav Card
          <span>{count}</span>
        </div>
      </div>
      <div className="main-section container my-5">
        <MainCard />
      </div>
    </GlobalInfo.Provider>
  );
};

export default MainSection;
