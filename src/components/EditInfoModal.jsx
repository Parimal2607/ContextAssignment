import React, { useContext, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Form,
  FormGroup,
  Col,
} from "reactstrap";
import { Icon } from "@iconify/react";
import { GlobalInfo } from "./MainSection";
function EditInfoModal({ userId }) {
  const [modal, setModal] = useState(false);
  //   const [modalData, setModalData] = useState({});
  const { data, modalData, setModalData, setData } = useContext(GlobalInfo);
  const toggle = () => {
    data.filter((user) => {
      if (user.id === userId) {
        setModalData(user);
      }
    });
    setModal(!modal);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const handleUpdateData = () => {
    const tempArr = [...data];
    const index = data.findIndex((user) => user.id === userId);
    tempArr[index] = modalData;
    setData(tempArr);
    toggle();
  };
  return (
    <>
      <Icon icon="circum:edit" onClick={toggle} />
      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Edit Detail</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Name
              </Label>
              <Col sm={10} className="mb-2">
                <Input
                  id="name"
                  name="name"
                  value={modalData.name}
                  placeholder="Enter a name"
                  type="text"
                  onChange={handleInputChange}
                />
              </Col>
              <Label for="exampleEmail" sm={2}>
                Email
              </Label>
              <Col sm={10} className="mb-2">
                <Input
                  id="email"
                  name="email"
                  value={modalData.email}
                  placeholder="Enter a name"
                  type="email"
                  onChange={handleInputChange}
                />
              </Col>
              <Label for="exampleEmail" sm={2}>
                Phone
              </Label>
              <Col sm={10} className="mb-2">
                <Input
                  id="phone"
                  name="phone"
                  value={modalData.phone}
                  placeholder="Enter a name"
                  type="text"
                  onChange={handleInputChange}
                />
              </Col>
              <Label for="exampleEmail" sm={2}>
                Website
              </Label>
              <Col sm={10} className="mb-2">
                <Input
                  id="website"
                  name="website"
                  value={modalData.website}
                  placeholder="Enter a name"
                  type="website"
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdateData}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default EditInfoModal;
