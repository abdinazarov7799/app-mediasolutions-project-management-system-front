import React, { useEffect } from "react";
import { InitialLoader } from "../../components/loader";
import { KEYS } from "../../constants/key";
import { URLS } from "../../constants/url";
import useGetAllQuery from "../../hooks/api/useGetAllQuery";
import { useStore } from "../../store";
import {get, isEmpty, isNil} from "lodash";
import useAuth from "../../hooks/auth/useAuth";

const Auth = ({ children, ...rest }) => {
  const {token} = useAuth({})
  const setUser = useStore((state) => get(state, "setUser", () => {}));
  const setIsAuthenticated = useStore((state) => get(state, "setIsAuthenticated", () => {}));
  const { data, isLoading } = useGetAllQuery({
    key: KEYS.get_me,
    url: URLS.get_me,
    hideErrorMsg: true,
    enabled:!!token
  });

  useEffect(() => {
    if (!isEmpty(get(data, "data")) && !isNil(token)) {
      setUser(get(data, "data"));
      setIsAuthenticated(true);
    }
  }, [data]);

  if (isLoading) {
    return <InitialLoader />;
  }
  return <>{children}</>;
};

export default Auth;
