import axios from "axios";
import { useEffect, useState } from "react";
import { BASE, GET_USER } from "../../../Auth/API";
import Cookie from "cookie-universal";

function GetUserData() {
  // const [userData, setUserData] = useState([]);
  // const token = new Cookie().get("Token");
  // console.log("majd")
  // useEffect(() => {
  //   const getUserData = async () => {
  //     try {
  //       const res = await axios
  //         .get(`${BASE}/${GET_USER}`, {
  //           headers: { Authorization: `Token ${token}` },
  //         })
  //         .then((res) => setUserData(res.data.profile));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUserData();
  // }, []);
  // console.log(userData);
  return;
}

export default GetUserData;
