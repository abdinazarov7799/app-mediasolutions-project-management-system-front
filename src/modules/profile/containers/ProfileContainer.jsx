import {OverlayLoader} from "../../../components/loader";
import {
    AbsoluteCenter,
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Image,
    Stat,
    StatLabel,
    StatNumber,
    Text
} from "@chakra-ui/react";
import React from "react";
import useGetAllQuery from "../../../hooks/api/useGetAllQuery";
import {KEYS} from "../../../constants/key";
import {URLS} from "../../../constants/url";
import ProfileImg from "../../../assets/images/profile.png";
import {useTranslation} from "react-i18next";
import {get} from "lodash";
import {useStore} from "../../../store";
import {NavLink} from "react-router-dom";
import Swal from "sweetalert2";

const ProfileContainer = () => {
    const { t } = useTranslation();
    const username = useStore((state) => get(state, "user.username", null));
    const {data,isFetching} = useGetAllQuery({
        key: KEYS.get_auth_user_info,
        url: URLS.get_auth_user_info,
        params:{
            params:{
                username,
            }
        },
    });
    // const setUser = useStore((state) => get(state, "setUser", () => {
    // }));
    // const setAuth = useStore((state) => get(state, "setAuth", () => {
    // }));

    // const clearToken = useSettingsStore((state) =>
    //     get(state, "setToken", () => {
    //     })
    // );

    // const navigate = useNavigate();

    const logout = () => {
        Swal.fire({
            title: t("Are you confident about going out?"),
            icon: "warning",
            backdrop: "rgba(0,0,0,0.9)",
            background: "none",
            showCancelButton: true,
            confirmButtonColor: "#13D6D1",
            confirmButtonText: t("Yes of course"),
            cancelButtonText: t("Go back"),
            customClass: {
                title: "title-color",
                content: "text-color",
                icon: "icon-color",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                // setAuth(false);
                // setUser(null);
                // clearToken(null);
                // storage.remove("settings");
                // navigate("/auth");
            }
        });
    };
  return(
      <>
          <Box bg={'white'} p={4} width="100%" borderRadius="md">
              {isFetching ? <OverlayLoader/> : (
                  <>
                      <Heading size="md" m={4}>
                          {t("profile page")}
                      </Heading>
                      <Divider />
                      <Flex mt={6}>
                          <Image fallbackSrc={ProfileImg} w={120} mr={4}/>
                          <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                              <Text>{t("FIO")}</Text>
                              <Text fontSize={20} fontWeight={600} mb={2}>{get(data, 'data.fullName','')}</Text>
                              <Text>{t("Passport")}</Text>
                              <Text fontSize={20} fontWeight={600}>{get(data, 'data.passport','')}</Text>
                          </Box>
                      </Flex>
                      <Box position='relative' my={8}>
                          <Divider />
                          <AbsoluteCenter bg={'white'} px={4}>
                              {t("More information")}
                          </AbsoluteCenter>
                      </Box>
                      <Flex
                          flexDirection={{
                              sm: "column",
                              lg: "row",
                          }}
                          justifyContent={"space-between"}
                          borderWidth={1}
                          rounded={"lg"}
                          shadow={"sm"}
                          py={2}
                          px={4}
                      >
                          <Box
                               py={2}
                               px={4}
                               w={"50%"}
                          >
                              <Stat display={"flex"} justifyContent={"start"} mb={4}>
                                  <StatLabel>{t("userName")}</StatLabel>
                                  <StatNumber fontSize={14} pr={2}>
                                      {get(data, 'data.userName','')}
                                  </StatNumber>
                              </Stat>
                              <Stat display={"flex"} justifyContent={"start"} mb={4}>
                                  <StatLabel>{t("phone")}</StatLabel>
                                  <StatNumber fontSize={14}>
                                      {get(data, 'data.phone','')}
                                  </StatNumber>
                              </Stat>
                              <Stat display={"flex"} justifyContent={"start"}>
                                  <StatLabel>{t("birthday")}</StatLabel>
                                  <StatNumber fontSize={14}>
                                      {get(data, 'data.birthday','')}
                                  </StatNumber>
                              </Stat>
                          </Box>
                          <Box
                               py={2}
                               px={4}
                               w={"50%"}
                          >
                              <Stat display={"flex"} justifyContent={"start"} mb={4}>
                                  <StatLabel>{t("pinfl")}</StatLabel>
                                  <StatNumber fontSize={14} pr={2}>
                                      {get(data, 'data.pinfl','')}
                                  </StatNumber>
                              </Stat>
                              <Stat display={"flex"} justifyContent={"start"} mb={4}>
                                  <StatLabel>{t("inn")}</StatLabel>
                                  <StatNumber fontSize={14}>
                                      {get(data, 'data.inn','')}
                                  </StatNumber>
                              </Stat>
                              <Stat display={"flex"} justifyContent={"start"}>
                                  <StatLabel>{t("gender")}</StatLabel>
                                  <StatNumber fontSize={14}>
                                      {get(data, 'data.gender','')}
                                  </StatNumber>
                              </Stat>
                          </Box>
                      </Flex>
                      <Button w="100%" mt={6} onClick={logout}>{t('Log out')}</Button>
                  </>
              )}
          </Box>
      </>
  )
}
export default ProfileContainer;
