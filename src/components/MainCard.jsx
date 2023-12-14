import React, { useContext } from "react";
import { Col, Row } from "reactstrap";
import CardFooter from "./CardFooter";
import { GlobalInfo } from "./MainSection";
import UserInfo from "./UserInfo";
const MainCard = () => {
  const { data } = useContext(GlobalInfo);
  return (
    <Row className="gy-4">
      {data.map((user) => {
        return (
          <Col lg="4" key={user.id}>
            <div className="main-card">
              <div className="card-img">
                <img
                  src="https://i.pinimg.com/originals/e6/53/ae/e653aea357a0a14af7117c3775b706ac.jpg"
                  alt="hdags"
                  className="img-fluid"
                />
              </div>
              <UserInfo
                name={user.name}
                email={user.email}
                phone={user.phone}
                website={user.website}
              />
              <CardFooter userId={user.id} />
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default MainCard;
