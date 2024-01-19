import React from "react";
import {Box, Image} from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";
import { get } from "lodash";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import { URLS } from "../../../constants/url";
import { useSettingsStore, useStore } from "../../../store";
import usePostQuery from "../../../hooks/api/usePostQuery";
import { OverlayLoader } from "../../../components/loader";
import logo from "../../../assets/images/logo-140px.png";
import {useTranslation} from "react-i18next";

const LoginContainer = ({ ...rest }) => {
  const {t} = useTranslation()
  const { mutate, isLoading } = usePostQuery({
    url: URLS.login,
    hideSuccessToast: true,
  });
  const setToken = useSettingsStore((state) => get(state, "setToken", () => {}));
  const setIsAuthenticated = useStore((state) => get(state, "setIsAuthenticated", () => {}));
  const navigate = useNavigate();

  const loginRequest = (data) => {
    mutate(
      { url: URLS.login, attributes: data },
      {
        onSuccess: ({ data }) => {
          setToken(get(data,'data.accessToken',null));
          setIsAuthenticated(true);
          navigate("/auth");
          Swal.fire({
            position: "center",
            icon: "success",
            backdrop: "rgba(0,0,0,0.9)",
            background: "none",
            title: "Добро пожаловать в нашу систему",
            iconColor: "#0BC4EA ",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              title: "title-color",
            },
          });
        },
      }
    );
  };

  return (
    <>
      {isLoading && <OverlayLoader />}
      <Box>
        <Image src={logo} width={250} height={100} mb={12} mx={"auto"}/>
        <LoginForm loginRequest={loginRequest} />
      </Box>
    </>
  );
};

export default LoginContainer;
