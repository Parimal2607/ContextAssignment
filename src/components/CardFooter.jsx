import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import EditInfoModal from "./EditInfoModal";
import { GlobalInfo } from "./MainSection";
const CardFooter = ({ userId, user }) => {
  const { handleDelete, handlLike } = useContext(GlobalInfo);
  return (
    <div className="card-footer">
      <div className="card-btn">
        <div onClick={() => handlLike(userId)}>
          <Icon
            icon={user?.isLike ? "mdi:heart" : "mdi:heart-outline"}
            color="red"
          />
        </div>
        <EditInfoModal userId={userId} />
        <Icon icon="ph:trash" onClick={() => handleDelete(userId)} />
      </div>
    </div>
  );
};

export default CardFooter;
