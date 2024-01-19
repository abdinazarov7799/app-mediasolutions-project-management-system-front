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

const ProjectsViewContainer = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const mockData = {
        content: [
            {
                id: 1,
                name: "Panda Telegram bot",
                serviceType: "Telegram bot",
                client: "Misha",
                responsiblePerson: 'Rajabov A.',
                participants: 'Diyor, Jamgirov A.',
                status: 'Yonyabdi',
                deadline: '24.12.2023',
                agreedPrice: '500$',
                clientNumber: "+998 90 941 0158"
            },
            {
                id: 2,
                name: "Panda Telegram bot",
                serviceType: "Telegram bot",
                client: "Misha",
                responsiblePerson: 'Rajabov A.',
                participants: 'Diyor, Jamgirov A.',
                status: 'Yonyabdi',
                deadline: '24.12.2023',
                agreedPrice: '500$',
                clientNumber: "+998 90 941 01 58"
            },
        ]
    }
    const data = mockData.content.find(item => item.id == id);
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
                            <StatNumber fontSize={16}>{get(data, 'status')}</StatNumber>
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
                            <StatLabel fontSize={16} mb={1}>{t("Agreed price")}</StatLabel>
                            <StatNumber fontSize={16}>
                                {get(data, 'agreedPrice')}
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
                                {get(data, 'deadline')}
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
                                {get(data, 'responsiblePerson')}
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
                            <StatLabel fontSize={16} mb={1}>{t("Client Number")}</StatLabel>
                            <StatNumber fontSize={16}>
                                {get(data, 'clientNumber')}
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
