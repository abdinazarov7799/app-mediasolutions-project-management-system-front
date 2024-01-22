import axios from "axios";
import {get, isEqual} from "lodash";
import NProgress from "nprogress";
import storage from "../storage";
import config from "../../config";
import Swal from "sweetalert2";

NProgress.configure({
  showSpinner: true,
  trickleRate: 0.02,
  trickleSpeed: 400,
  easing: "ease",
  speed: 200,
});


const request = axios.create({
  baseURL: config.API_ROOT,
  params: {},
});

request.interceptors.request.use(
  (config) => {
    NProgress.inc();
    const token = get(JSON.parse(storage.get("settings")), "state.token", null);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    NProgress.done(true);
  }
);

request.interceptors.response.use(
  (response) => {
    NProgress.done(true);
    return response;
  },
  (error) => {
    const statusCode = get(error, 'response.status');
    if (isEqual(statusCode , 401)) {
        Swal.fire({
          position: "center",
          icon: "error",
          backdrop: "rgba(0,0,0,0.9)",
          background: "none",
          title: "Your token was expired. Please log in again !!! ",
          showConfirmButton: true,
          showCancelButton: false,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#13D6D1",
          confirmButtonText: "Log out",
          customClass: {
            title: "title-color",
          },
        }).then((result) => {
          window.localStorage.clear();
          window.location.reload();
        });
    }

    NProgress.done(true);
    return Promise.reject(error);
  }
);

export { request };
