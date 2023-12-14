import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import EditInfoModal from "./EditInfoModal";
import { GlobalInfo } from "./MainSection";
const CardFooter = ({userId}) => {
  const [isLike, setIsLike] = useState(false);
  const handlLike = () => {
    setIsLike((pre) => !pre);
  };
  const { handleDelete } = useContext(GlobalInfo);
  return (
    <div className="card-footer">
      <div className="card-btn">
        <div onClick={handlLike}>
          <Icon icon={isLike ? "mdi:heart" : "mdi:heart-outline"} color="red" />
        </div>
        <EditInfoModal userId={userId}/>
        <Icon icon="ph:trash" onClick={() => handleDelete(userId)}/>
      </div>
    </div>
  );
};

export default CardFooter;
