import {Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import GoogleIcon from "@mui/icons-material/Google";

const Buy = () => {
  const { userId } = useParams();
  const { elId } = useParams();
  const [posts, setPosts] = useState([]);
  const [paymentOption, setPaymentOption] = useState("cash");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserPosts(userId);
  });

  const fetchUserPosts = () => {
    const URL = `https://fakestoreapi.com/products/${elId}`;
    axios
      .get(URL)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
  };

  

  return (
    <div className="main bg-slate-200">
      <div className="buy-container">
        <div className="imgbuy">
          <img className="image" src={posts.image} alt="abc"></img>
        </div>
        <div>
          <h1 style={{ fontFamily: "sans-serif", marginTop: "40px" }}>
            Id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {posts.id}
            <br />
            <br />
            category:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{posts.category}
            <br />
            <br />
            price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {posts.price}
            <br />
            <br />
            Title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {posts.title}
            <br />
            <br />
            Rating:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </h1>
          <br />

          <div>
            <h3 className="text-blue-600">Select Payment Option:</h3>
            <br />

            <div className="payment-option">
              <input
                type="radio"
                checked={paymentOption === "cash"}
                onChange={() => handlePaymentOptionChange("cash")}
              />
              <label htmlFor="cash">
                <LocalShippingIcon /> Cash on Delivery
              </label>
            </div>
            <br />

            <div className="payment-option">
              <input
                type="radio"
                checked={paymentOption === "phonepe"}
                onChange={() => handlePaymentOptionChange("phonepe")}
                required
              />
              <label htmlFor="phonepe">
                <PhoneAndroidIcon /> PhonePe
              </label>
            </div>
            <br />

            <div className="payment-option">
              <input
                type="radio"
                checked={paymentOption === "googlepay"}
                onChange={() => handlePaymentOptionChange("googlepay")}
              />
              <label htmlFor="googlepay">
                {" "}
                <GoogleIcon />
                Google Pay
              </label>
            </div>
          </div>

          <div className="d-grid gap-2" style={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<PaymentIcon />}
              onClick={() => {navigate("/productconfirmed")}}
            >
              Buy
            </Button>
          </div>

          <div className="d-grid gap-2" style={{ marginTop: "10px" }}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<HomeIcon />}
              onClick={() => {
                navigate("/");
              }}
            >
              Go To Home Page
            </Button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Buy;
