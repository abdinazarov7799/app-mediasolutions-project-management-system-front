import {useTranslation} from "react-i18next";
import uzbFlag from "../../../assets/images/uzbekistan-flag.png";
import engFlag from "../../../assets/images/usa-flag.png";
import ruFlag from "../../../assets/images/russian-flag.png";
import {useSettingsStore} from "../../../store";
import {get} from "lodash";
import {FiChevronDown, FiMenu} from "react-icons/fi";
import {NavLink} from "react-router-dom";
import logo from "../../../assets/images/logo-140px.png";
import React from "react";
import ProfileImg from "../../../assets/images/profile.png"
import {
    Avatar,
    Box, Button,
    Flex,
    HStack,
    IconButton,
    Image,
    Menu,
    MenuButton, MenuDivider, MenuItem, MenuList, Tab, TabList, Tabs,
    Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";

const MobileNav = ({
                       onOpen,
                       username = "Admin",
                       logout = () => {
                       },
                       ...rest
                   }) => {
    const {t, i18n} = useTranslation();
    const languages = [
        {id: 1, title: "Uz", image: uzbFlag},
        {id: 2, title: "En", image: engFlag},
        {id: 3, title: "Ru", image: ruFlag},
    ];
    const setLang = useSettingsStore((state) => get(state, "setLang", () => {
    }));
    const lang = useSettingsStore((state) => get(state, "lang"));
    const changeLang = (code) => {
        setLang(code);
        return i18n.changeLanguage(code);
    };
    return (
        <Flex
            px={{base: 4, md: 4}}
            height="20"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent={"space-between"}
            {...rest}
        >
            <IconButton
                display={{base: "flex", md: "none"}}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu/>}
            />
            <NavLink to={"/"}>
                <Image width={"80px"} src={logo}/>
            </NavLink>
            <Box display={"flex"}>
                <HStack>
                    <Box display={{base: "none", md:"flex"}} alignItems={"center"}>
                        <Tabs pr={5} variant="enclosed">
                            <TabList>
                                <Tab>
                                    <NavLink to={"/"}>
                                        <Text px={2}>{t('Projects')}</Text>
                                    </NavLink>
                                </Tab>
                                <Tab>
                                    <NavLink to={"/"}>
                                        <Text px={2}>{t('Timeline')}</Text>
                                    </NavLink>
                                </Tab>
                                <Tab>
                                    <NavLink to={"/"}>
                                        <Text px={2}>{t('Calendar')}</Text>
                                    </NavLink>
                                </Tab>
                            </TabList>
                        </Tabs>
                        <HStack spacing={{base: "2", md: "6"}}>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    transition="all 0.3s"
                                    _focus={{boxShadow: "none"}}
                                >
                                    <HStack>
                                        <VStack
                                            display={{base: "flex", md: "flex"}}
                                            alignItems="flex-start"
                                            ml="2"
                                        >
                                            <Text fontSize="md" fontWeight={600}>{lang}</Text>
                                        </VStack>
                                        <Box display={{base: "flex", md: "flex"}}>
                                            <FiChevronDown/>
                                        </Box>
                                    </HStack>
                                </MenuButton>
                                <MenuList
                                    bg={useColorModeValue("white", "gray.900")}
                                    borderColor={useColorModeValue("gray.200", "gray.700")}
                                    p={0}
                                >
                                    {languages?.map((language, index) => (
                                        get(language, "title") !== lang && (
                                            <MenuItem
                                                key={index}
                                                onClick={() => {
                                                    changeLang(get(language, "title"));
                                                }}
                                            >
                                                <Flex alignItems={"center"}>
                                                    <img
                                                        src={get(language, "image")}
                                                        style={{
                                                            width: 30,
                                                        }}
                                                    />
                                                    <Text ml={2}>{t(get(language, "title"))}</Text>
                                                </Flex>
                                            </MenuItem>
                                        )
                                    ))}
                                </MenuList>
                            </Menu>
                        </HStack>
                    </Box>
                    <NavLink to={'/profile'}>
                        <HStack px={2}>
                            <Avatar
                                size={"sm"}
                                src={ProfileImg}
                                objectFit={"cover"}
                            />
                            <VStack
                                display={{base: "none", md: "flex"}}
                                alignItems="flex-start"
                                spacing="1px"
                                ml="2"
                            >
                                <Text fontSize="sm">{username}</Text>
                            </VStack>
                        </HStack>
                    </NavLink>
                </HStack>
            </Box>
        </Flex>
    );
};
export default MobileNav;
