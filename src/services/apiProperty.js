import axios from "axios";
import {
  ADD_PROPERTY,
  ADD_TO_FAV,
  BASE,
  DELETE_FROM_FAV,
  DELETE_PROPERTY,
  GET_ALL_PROPS,
  GET_ONE_PROPS,
  GET_USER,
  GET_USER_FAVORITE,
  GET_USER_PROPS,
} from "../Auth/API";
import Cookie from "cookie-universal";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const token = new Cookie().get("Token");

export async function getProperties(filter) {
  console.log(filter);
  const {
    title,
    city,
    price,
    property_type,
    property_status,
    ownership_type,
    covering,
    plot_area,
    price_lt,
    price_gt,
  } = filter;

  const queryParams = [];
  if (title) queryParams.push(`title=${title}`);
  if (city) queryParams.push(`city=${city}`);
  if (price) queryParams.push(`price=${price}`);
  if (property_status) queryParams.push(`property_status=${property_status}`);
  if (property_type) queryParams.push(`property_type=${property_type}`);
  if (ownership_type) queryParams.push(`ownership_type=${ownership_type}`);
  if (covering) queryParams.push(`covering=${covering}`);
  if (plot_area) queryParams.push(`plot_area=${plot_area}`);
  if (price_lt) queryParams.push(`price_lt=${price_lt}`);
  if (price_gt) queryParams.push(`price_gt=${price_gt}`);

  const queryString = queryParams.join("&");
  try {
    const data = await axios.get(`${BASE}/${GET_ALL_PROPS}?${queryString}`);
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
      headers: {
        Authorization: `Token $5a29be62c796912177e5db997e5d9f4caadc648d`,
      },
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
  console.log(property_id);
  const formData = new FormData();
  formData.append("property_id", property_id);
  try {
    const res = await axios
      .delete(
        `${BASE}/${DELETE_FROM_FAV}`,
        { formData },
        {
          headers: {
            Authorization: `Token d8e80cb927b0fc9164e4bc0a71686a4054d41be5`,
          },
        }
      )
      .then((data) => {
        console.log(data);
        message.success("تم إزالة العقار من المفضلة");
      });
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function addProperty(property) {
  console.log(property);
  try {
    const res = axios.post(`${BASE}/${ADD_PROPERTY}`, property, {
      headers: { Authorization: `Token ${token}` },
    });

    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteProperty(slug) {
  console.log(slug);
  try {
    const res = axios.delete(`${BASE}/${DELETE_PROPERTY}/${slug}/`, {
      headers: { Authorization: `Token ${token}` },
    });

    return res;
  } catch (err) {
    console.log(err);
  }
}
