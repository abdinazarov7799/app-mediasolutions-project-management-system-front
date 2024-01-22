import {OverlayLoader} from "../../../components/loader";
import {
    AbsoluteCenter,
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Image, SimpleGrid,
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
import {useSettingsStore, useStore} from "../../../store";
import {NavLink, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import storage from "../../../services/storage/index.js";

const ProfileContainer = () => {
    const { t } = useTranslation();
    const username = useStore((state) => get(state, "user.username", null));
    const {data,isFetching} = useGetAllQuery({
        key: KEYS.get_me,
        url: URLS.get_me,
        params:{
            params:{
                username,
            }
        },
    });
    const setUser = useStore((state) => get(state, "setUser", () => {}));
    const setIsAuthenticated = useStore((state) => get(state, "setIsAuthenticated", () => {}));
    const clearToken = useSettingsStore((state) => get(state, "setToken", () => {})
    );
    const headData = get(data,'data.data',{})
    const navigate = useNavigate();

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
                setIsAuthenticated(false);
                setUser(null);
                clearToken(null);
                storage.remove("settings");
                navigate("/auth");
            }
        });
    };
  return(
      <>
          <Box bg={'white'} p={4} width="100%" borderRadius="md">
              {isFetching ? <OverlayLoader/> : (
                  <>
                      <Heading size="md" m={4}>
                          {t("Profile page")}
                      </Heading>
                      <Divider />
                      <Flex mt={6}>
                          <Image fallbackSrc={ProfileImg} w={120} mr={4}/>
                          <SimpleGrid
                              width={"100%"}
                              columns={2}
                              borderWidth={1}
                              rounded={"lg"}
                              shadow={"sm"}
                              py={2}
                              px={4}
                          >
                              <Stat display={"flex"} justifyContent={"start"} mb={4}>
                                  <StatLabel>{t("First name")}</StatLabel>
                                  <StatNumber fontSize={14} pr={2}>
                                      {get(headData, 'firstName','')}
                                  </StatNumber>
                              </Stat>
                              <Stat display={"flex"} justifyContent={"start"} mb={4}>
                                  <StatLabel>{t("Last name")}</StatLabel>
                                  <StatNumber fontSize={14}>
                                      {get(headData, 'lastName','')}
                                  </StatNumber>
                              </Stat>
                              <Stat display={"flex"} justifyContent={"start"}>
                                  <StatLabel>{t("User name")}</StatLabel>
                                  <StatNumber fontSize={14}>
                                      {get(headData, 'username','')}
                                  </StatNumber>
                              </Stat>
                              <Stat display={"flex"} justifyContent={"start"}>
                                  <StatLabel>{t("Phone number")}</StatLabel>
                                  <StatNumber fontSize={14}>
                                      {get(headData, 'phoneNumber','')}
                                  </StatNumber>
                              </Stat>
                          </SimpleGrid>
                      </Flex>
                      <Box position='relative' my={8}>
                          <Divider />
                          <AbsoluteCenter bg={'white'} px={4}>
                              {t("More information")}
                          </AbsoluteCenter>
                      </Box>

                      <Button w="100%" mt={6} onClick={logout}>{t('Log out')}</Button>
                  </>
              )}
          </Box>
      </>
  )
}
export default ProfileContainer;
