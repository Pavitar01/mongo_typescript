import React, { useEffect, useState } from "react";
import { Card, Modal, Tag } from "antd";
import axios from "axios";

const { Meta } = Card;
type propsType = {
  user: any;
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  setVal?: any;
  val?: boolean | undefined;
};

const Cards = (props: propsType) => {
  const [userAuth, setUserAuth] = useState<any>();
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user !== null) {
      user = JSON.parse(user);
    }
    setUserAuth(user);
  }, []);
  const delProduct = async (id: string) => {
    await axios
      .post(`http://localhost:3000/products/delete-product/${id}`)
      .then(() => {
        props.setVal(!props.val);
        setIsModalOpen(false);
      });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (e: string) => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="cards">
      <Card
      className="card"
        hoverable
        onClick={() => {
          showModal(props.id);
        }}
        cover={<img alt="example" src={props.image} />}
      >
        <div style={{ display: "flex" }}>
          <Meta title={props.title} description={props.description} />
        </div>
      </Card>
      <Modal
        // title={props.id}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={<img alt="example" src={props.image} />}
        ></Card>
        {props?.user?.email === userAuth?.email ? (
          <i
            className="fa-sharp fa-solid fa-trash"
            onClick={() => delProduct(props.id)}
          ></i>
        ) : (
          ""
        )}
        <Tag
          color="cyan"
          style={{ height: "20px", textAlign: "center", float: "right" }}
        >
          @{props?.user?.displayName}
        </Tag>
      </Modal>
    </div>
  );
};

export default Cards;
