import React, { useContext } from "react";
import { Icon } from "@iconify/react";
const UserInfo = ({ name, email, phone, website }) => {
  return (
    <>
      <div className="user-Info">
        <div className="user-name">
          <h3>{name}</h3>
        </div>
        <div className="user-data">
          <div className="d-flex align-items-center gap-2 mb-1">
            <Icon icon="material-symbols:mail-outline" />
            <p className="user-detail">{email}</p>
          </div>
          <div className="d-flex align-items-center gap-2 mb-1">
            <Icon icon="ic:outline-phone" />
            <p className="user-detail">{phone}</p>
          </div>
          <div className="d-flex align-items-center gap-2 mb-1">
            <Icon icon="ph:globe" />
            <p className="user-detail">{website}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
