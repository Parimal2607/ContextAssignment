import React, { createContext, useEffect, useState } from "react";
import MainCard from "./MainCard";
export const GlobalInfo = createContext();
const MainSection = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState({})
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
  console.log(modalData);
  return (
    <GlobalInfo.Provider value={{ data, handleDelete, modalData, setModalData, setData }}>
      <div className="main-section container my-5">
        <MainCard />
      </div>
    </GlobalInfo.Provider>
  );
};

export default MainSection;
