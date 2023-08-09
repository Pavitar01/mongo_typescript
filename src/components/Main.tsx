import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
type valTypes = {
  setVal: any;
  val: boolean | undefined;
};
const Main = (props: valTypes) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [title, setTitle] = useState<string>("");
  const [des, setDesc] = useState<string>("");
  // const [price, setPrice] = useState<string>();
  const [base64Image, setBase64Image] = useState<string | null>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !des || !base64Image) {
      message.warning("Please Fill All Feilds");
    } else {
      const data = await axios.post(
        "http://localhost:3000/products/addproducts",
        {
          title,
          description: des,
          // price,
          image: base64Image,
        }
      );
      props.setVal(!props.val);

      messageApi.open({
        type: "success",
        content: "Product Added SuccessFully ",
      });
      setTitle("");
      // setPrice("");
      setDesc("");
      setBase64Image(null);
    }
  };

  //   base 64 image convertor

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result?.toString()?.split(",")[1];
        setBase64Image(base64String || "");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {contextHolder}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Description"
        value={des}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      {/* <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      /> */}
      <input
        type="file"
        onChange={handleImageUpload}
        accept="image/jpeg,image/png,image/gif"
      />
      {base64Image && (
        <img
          src={`data:image/jpeg;base64,${base64Image}`}
          alt="Uploaded"
          width={300}
          height={200}
        />
      )}
      <button
        type="submit"
        style={{
          height: "50px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add Post
      </button>
    </form>
  );
};

export default Main;
