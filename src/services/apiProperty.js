import axios from "axios";
import { BASE, GET_ALL_PROPS, GET_ONE_PROPS } from "../Auth/API";
import Cookie from "cookie-universal";

const token = new Cookie().get("Token");

export async function getProperties() {
  try {
    const data = axios.get(`${BASE}/${GET_ALL_PROPS}`);
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getSaleProperties() {
  try {
    const data = axios.get(`${BASE}/${GET_ALL_PROPS}`, {
      params: { property_status: "For Sale" },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getRentProperties() {
  try {
    const data = axios.get(`${BASE}/${GET_ALL_PROPS}`, {
      params: { property_status: "For Rent" },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getOneProperty({ slug }) {
  console.log(slug);
  try {
    const data = axios.get(`${BASE}/${GET_ONE_PROPS}/${slug}`);
    return data;
  } catch (err) {
    console.log(err);
  }
}
