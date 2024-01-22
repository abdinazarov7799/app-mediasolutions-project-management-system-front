import {
    Box,
    Heading,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
} from "@chakra-ui/react";
import React from "react";
import { get } from "lodash"
import {useTranslation} from "react-i18next";
import {useParams} from "react-router";
import Tasks from "../components/Tasks.jsx";
import {KEYS} from "../../../constants/key.js";
import {URLS} from "../../../constants/url.js";
import useGetOneQuery from "../../../hooks/api/useGetOneQuery.js";
import {formatNumber, getName} from "../../../utils";

const ProjectsViewContainer = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const {data,isLoading} = useGetOneQuery({
        key: KEYS.get_project,
        url: URLS.get_project,
        id,
    });
    const headData = get(data,'data.data',{});
    return(
        <>
            <Box bg={'white'} p={4} width="100%" borderRadius="md">
                <Heading mb={5}>{get(data, 'name')}</Heading>
                <SimpleGrid columns={{ sm: 1, md: 5 }} gap={2} mb={5}>
                    <Box
                        display={"flex"}
                        flexDirection={{
                            sm: "column",
                            lg: "row",
                        }}
                        borderWidth={1}
                        rounded={"lg"}
                        shadow={"sm"}
                        py={2}
                        px={4}
                    >
                        <Stat display={"flex"} justifyContent={"center"} textAlign={"center"}>
                            <StatLabel fontSize={16} mb={1}>{t("Status")}</StatLabel>
                            <StatNumber fontSize={16}>
                                {getName('status',get(headData, 'status','-'))}
                            </StatNumber>
                        </Stat>
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={{
                            sm: "column",
                            lg: "row",
                        }}
                        borderWidth={1}
                        rounded={"lg"}
                        shadow={"sm"}
                        py={2}
                        px={4}
                    >
                        <Stat display={"flex"} justifyContent={"center"} textAlign={"center"}>
                            <StatLabel fontSize={16} mb={1}>{t("Price")}</StatLabel>
                            <StatNumber fontSize={16}>
                                {formatNumber(get(headData, 'price','-'))} {t("so'm")}
                            </StatNumber>
                        </Stat>
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={{
                            sm: "column",
                            lg: "row",
                        }}
                        borderWidth={1}
                        rounded={"lg"}
                        shadow={"sm"}
                        py={2}
                        px={4}
                    >
                        <Stat display={"flex"} justifyContent={"center"} textAlign={"center"}>
                            <StatLabel fontSize={16} mb={1}>{t("Deadline")}</StatLabel>
                            <StatNumber fontSize={16}>
                                {get(headData, 'deadline','-')}
                            </StatNumber>
                        </Stat>
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={{
                            sm: "column",
                            lg: "row",
                        }}
                        borderWidth={1}
                        rounded={"lg"}
                        shadow={"sm"}
                        py={2}
                        px={4}
                    >
                        <Stat display={"flex"} justifyContent={"center"} textAlign={"center"}>
                            <StatLabel fontSize={16} mb={1}>{t("Type")}</StatLabel>
                            <StatNumber fontSize={16}>
                                {getName('service',get(headData, 'type','-'))}
                            </StatNumber>
                        </Stat>
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={{
                            sm: "column",
                            lg: "row",
                        }}
                        borderWidth={1}
                        rounded={"lg"}
                        shadow={"sm"}
                        py={2}
                        px={4}
                    >
                        <Stat display={"flex"} justifyContent={"center"} textAlign={"center"}>
                            <StatLabel fontSize={16} mb={1}>{t("Responsible Person")}</StatLabel>
                            <StatNumber fontSize={16}>
                                {get(headData, 'responsiblePerson','-')}
                            </StatNumber>
                        </Stat>
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={{
                            sm: "column",
                            lg: "row",
                        }}
                        borderWidth={1}
                        rounded={"lg"}
                        shadow={"sm"}
                        py={2}
                        px={4}
                    >
                        <Stat display={"flex"} justifyContent={"center"} textAlign={"center"}>
                            <StatLabel fontSize={16} mb={1}>{t("Name")}</StatLabel>
                            <StatNumber fontSize={16}>
                                {get(headData, 'name','-')}
                            </StatNumber>
                        </Stat>
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={{
                            sm: "column",
                            lg: "row",
                        }}
                        borderWidth={1}
                        rounded={"lg"}
                        shadow={"sm"}
                        py={2}
                        px={4}
                    >
                        <Stat display={"flex"} justifyContent={"center"} textAlign={"center"}>
                            <StatLabel fontSize={16} mb={1}>{t("Description")}</StatLabel>
                            <StatNumber fontSize={16}>
                                {get(headData, 'description','-')}
                            </StatNumber>
                        </Stat>
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={{
                            sm: "column",
                            lg: "row",
                        }}
                        borderWidth={1}
                        rounded={"lg"}
                        shadow={"sm"}
                        py={2}
                        px={4}
                    >
                        <Stat display={"flex"} justifyContent={"center"} textAlign={"center"}>
                            <StatLabel fontSize={16} mb={1}>{t("Client name")}</StatLabel>
                            <StatNumber fontSize={16}>
                                {get(headData, 'clientName','-')}
                            </StatNumber>
                        </Stat>
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={{
                            sm: "column",
                            lg: "row",
                        }}
                        borderWidth={1}
                        rounded={"lg"}
                        shadow={"sm"}
                        py={2}
                        px={4}
                    >
                        <Stat display={"flex"} justifyContent={"center"} textAlign={"center"}>
                            <StatLabel fontSize={16} mb={1}>{t("Client phone")}</StatLabel>
                            <StatNumber fontSize={16}>
                                {get(headData, 'clientPhone1','-')}
                            </StatNumber>
                        </Stat>
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={{
                            sm: "column",
                            lg: "row",
                        }}
                        borderWidth={1}
                        rounded={"lg"}
                        shadow={"sm"}
                        py={2}
                        px={4}
                    >
                        <Stat display={"flex"} justifyContent={"center"} textAlign={"center"}>
                            <StatLabel fontSize={16} mb={1}>{t("Client phone")}</StatLabel>
                            <StatNumber fontSize={16}>
                                {get(headData, 'clientPhone2','-')}
                            </StatNumber>
                        </Stat>
                    </Box>
                </SimpleGrid>
                <Tasks />
            </Box>
        </>
    )
}
export default ProjectsViewContainer;
