import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Success = () => {
  const [message, setMessage] = useState("");
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(search);

    const session_id = params.get("session_id");

    const order = params.get("order");

    const makeRequest = async () => {
      try {
        let a = await newRequest.put("/orders", { session_id, order });
        console.log(a);
        setTimeout(() => {
          navigate("/orders");
        }, 5000);
      } catch (err) {
        console.log("helloerr");
        console.log(err);
      }
      console.log("ower");
    };

    makeRequest();
  }, []);

  return (
    <div>
      Payment successful. You are being redirected to the orders page. Please do
      not close the page
      {message}
    </div>
  );
};

export default Success;
