import axios from "axios";

const axiosClient = axios.create({
  timeout: 50000,
  baseURL: "http://localhost:1337/api/",
});

const get = (url, params) =>
  axiosClient.get(url, {
    params,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer b73ac782d22a3f1b4377d78c83cb59d873eb2ea7a623bbda1db93bf28094bdf0b20300bcc8147859a22402380ec92521eace879e1d53197169ee1f8321cdede103eccb99b9c93c267b9c8497b7e4c3b5742c0df090fc511d29244670d77393ae18bfe5c591f76a0515382104959f623cc859fb4320bf1326b987335ebda36d9e",
    },
  });

export const getMenus = () => get("/menus");

export const getMenusData = () => get("/menus?locale=all");

export const getCustomers = () => get("/customers");

export const getStaticPages = () => get("/posts");
