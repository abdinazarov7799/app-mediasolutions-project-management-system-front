import React from "react";
import {
    Box,
    useColorModeValue,
    Drawer,
    DrawerContent,
    useDisclosure,
} from "@chakra-ui/react";
import {Outlet, useNavigate} from "react-router-dom";
import {useSettingsStore, useStore} from "../../store";
import {get} from "lodash";
import Swal from "sweetalert2";
import storage from "../../services/storage";
import {useTranslation} from "react-i18next";
import SidebarContent from "./components/SidebarContent";
import MobileNav from "./components/MobileNav";


export default function DashboardLayout() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {t} = useTranslation();
    const user = useStore((state) => get(state, "user", {}));

    return (
        <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose}/>
                </DrawerContent>
            </Drawer>
            <MobileNav
                onOpen={onOpen}
                username={get(user, "username")}
            />
            <Box p="4">
                <Outlet/>
            </Box>
        </Box>
    );
}
