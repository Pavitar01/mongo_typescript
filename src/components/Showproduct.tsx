import React, { useEffect, useState } from "react";
import { message } from "antd";
import axios from "axios";
import Cards from "./Card";
type valTypes = {
  num: boolean | undefined;
};
const Showproduct = (props: valTypes) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [prodArray, setProdArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:3000/products/getproduct");
      messageApi.open({
        type: "success",
        content: "Product fetched SuccessFully ",
      });
      setProdArray(data.data);
    };
    fetchData();
  }, [props.num]);
  return (
    <div className="showproduct">
      {contextHolder}
      <div className="products">
        {prodArray.length !== 0 ? (
          prodArray.map((i: any) => (
            <Cards
              id={i.id}
              title={i.title}
              description={i.description}
              image={i.image}
              price={i.price}
            />
          ))
        ) : (
          <img
            src="https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"
            alt="img"
          />
        )}
      </div>
    </div>
  );
};

export default Showproduct;
