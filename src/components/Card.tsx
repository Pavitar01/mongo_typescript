import React, { useState } from "react";
import { Card, Modal } from "antd";

const { Meta } = Card;
type propsType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};
const Cards = (props: propsType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
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
        hoverable
        style={{ width: 240 }}
        onClick={showModal}
        cover={<img alt="example" src={props.image} />}
      >
        <Meta title={props.title} description={props.description} />
      </Card>
      <Modal
        title={props.id}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={<img alt="example" src={props.image} />}
        ></Card>
      </Modal>
    </div>
  );
};

export default Cards;
