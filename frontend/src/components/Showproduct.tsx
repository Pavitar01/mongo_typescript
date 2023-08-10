import React, { useEffect, useState } from "react";
import { Pagination, message } from "antd";
import axios from "axios";
import Cards from "./Card";
type valTypes = {
  num: boolean | undefined;
  setVal: any;
};
const Showproduct = (props: valTypes) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [prodArray, setProdArray] = useState([]);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.post(
        `http://localhost:3000/products/get-products/${page}`
      );
      messageApi.open({
        type: "success",
        content: "Product fetched SuccessFully ",
      });
      setProdArray(data.data);
    };
    fetchData();
  }, [props.num, page]);
  return (
    <div className="showproduct">
      {contextHolder}
      <div className="products">
        {prodArray?.length !== 0 ? (
          prodArray?.map((i: any) => (
            <Cards
              user={i.user}
              val={props.num}
              setVal={props.setVal}
              id={i._id}
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

      <Pagination
      className="page"
        defaultCurrent={6}
        total={500}
        onChange={(e) => {
          setPage(e);
        }}
      />
    </div>
  );
};

export default Showproduct;
