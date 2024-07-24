import axios from "axios";
import {
  ADD_TO_FAV,
  BASE,
  DELETE_FROM_FAV,
  GET_ALL_PROPS,
  GET_ONE_PROPS,
  GET_USER,
  GET_USER_FAVORITE,
  GET_USER_PROPS,
} from "../Auth/API";
import Cookie from "cookie-universal";
import { message } from "antd";

const token = new Cookie().get("Token");

export async function getProperties(property_status = "") {
  try {
    const data = axios.get(`${BASE}/${GET_ALL_PROPS}`, {
      params: { property_status: property_status, page_size: 4 },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}

// export async function getSaleProperties() {
//   try {
//     const data = axios.get(`${BASE}/${GET_ALL_PROPS}`, {
//       params: { property_status: "For Sale" },
//     });
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }

// export async function getRentProperties() {
//   try {
//     const data = axios.get(`${BASE}/${GET_ALL_PROPS}`, {
//       params: { property_status: "For Rent" },
//     });
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }

export async function getOneProperty({ slug }) {
  console.log(slug);
  try {
    const data = axios.get(`${BASE}/${GET_ONE_PROPS}/${slug}`, {
      headers: { Authorization: `Token ${token}` },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getUserProperty() {
  try {
    const data = axios.get(`${BASE}/${GET_USER_PROPS}`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getUserData() {
  try {
    const res = await axios.get(`${BASE}/${GET_USER}`, {
      headers: { Authorization: `Token ${token}` },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function getFavouritsProperties() {
  try {
    const res = await axios.get(`${BASE}/${GET_USER_FAVORITE}`, {
      headers: { Authorization: `Token ${token}` },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function addToFavourite(property_id) {
  try {
    const res = await axios
      .post(
        `${BASE}/${ADD_TO_FAV}`,
        { property_id: property_id.id },
        {
          headers: { Authorization: `Token ${token}` },
        }
      )
      .then(message.success("تم إضافة العقار إلى المفضلة"));
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function deletFromFavourite(property_id) {
  try {
    const res = await axios
      .post(
        `${BASE}/${DELETE_FROM_FAV}`,
        { property_id: property_id.id },
        {
          headers: { Authorization: `Token ${token}` },
        }
      )
      .then(message.success("تم إزالة العقار من المفضلة"));
    return res;
  } catch (err) {
    console.log(err);
  }
}
