import {
    Badge,
    Box,
    Button,
    Heading,
    Input,
    InputGroup,
    InputRightElement, Table,
    TableContainer,
    Tbody, Td,
    Text,
    Tfoot,
    Th, Thead,
    Tr
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import OverlayLoader from "../../../components/loader/overlay-loader.jsx";
import Pagination from "../../../components/pagination/index.jsx";
import {useNavigate} from "react-router-dom";
import {get, isEqual} from "lodash";
import {getStatus} from "../../../utils/index.js";
import dayjs from "dayjs";



const ProjectsContainer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [active, setActive] = useState(null);
    const [isFetching, setIsFetching] = useState(false)

    const handleChange = (event) => {

    };
    const data = {
        content: [
            {
                id: 1,
                name: "Panda Telegram bot",
                serviceType: "Telegram bot",
                client: "Misha",
                responsiblePerson: 'Rajabov A.',
                participants: 'Diyor, Jamgirov A.',
                status: 'Yonyabdi',
                deadline: '24.12.2023'
            },
            {
                id: 2,
                name: "Panda Telegram bot",
                serviceType: "Telegram bot",
                client: "Misha",
                responsiblePerson: 'Rajabov A.',
                participants: 'Diyor, Jamgirov A.',
                status: 'Yonyabdi',
                deadline: '24.12.2023'
            },
            {
                id: 3,
                name: "Panda Telegram bot",
                serviceType: "Telegram bot",
                client: "Misha",
                responsiblePerson: 'Rajabov A.',
                participants: 'Diyor, Jamgirov A.',
                status: 'Yonyabdi',
                deadline: '24.12.2023'
            },
            {
                id: 4,
                name: "Panda Telegram bot",
                serviceType: "Telegram bot",
                client: "Misha",
                responsiblePerson: 'Rajabov A.',
                participants: 'Diyor, Jamgirov A.',
                status: 'Yonyabdi',
                deadline: '24.12.2023'
            },
            {
                id: 5,
                name: "Panda Telegram bot",
                serviceType: "Telegram bot",
                client: "Misha",
                responsiblePerson: 'Rajabov A.',
                participants: 'Diyor, Jamgirov A.',
                status: 'Yonyabdi',
                deadline: '24.12.2023'
            },
        ]
    }
    return(
        <>
            <Box bg={'white'} p={4} width="100%" borderRadius="md">
                <Heading>{t('Projects')}</Heading>
                <TableContainer mt={6}>
                    {isFetching && <OverlayLoader />}
                    <Table colorScheme="gray" size={"md"} >
                        <Thead>
                            <Tr>
                                <Th>{t("Name")}</Th>
                                <Th>{t("Service type")}</Th>
                                <Th>{t("Client")}</Th>
                                <Th>{t("Responsible person")}</Th>
                                <Th>{t("Participants")}</Th>
                                <Th>{t("Status")}</Th>
                                <Th>{t("Deadline")}</Th>
                            </Tr>

                        </Thead>
                        {get(data, "content", [])?.length === 0 ? (
                            <span
                                style={{ padding: "10px", margin: "10px", textAlign: "center" }}
                            >
              {t("No Data")}
            </span>
                        ) : (
                            <Tbody>
                                {get(data, "content", []).map((item, i) => (
                                    <Tr
                                        key={i + 1}
                                        onClick={() => setActive(i)}
                                        onDoubleClick={() => {
                                            navigate(`/projects/view/${get(item, "id")}`);
                                        }}
                                        style={{
                                            backgroundColor: isEqual(active, i) && "rgba(255,162,0,0.48)",
                                            cursor: "pointer",
                                        }}
                                        _hover={{backgroundColor: "rgba(246,210,146,0.35)"}}
                                    >
                                        <Td>{get(item, "name", i)}</Td>
                                        <Td>{get(item, "serviceType", "-")}</Td>
                                        <Td>{get(item, "client", "-")}</Td>
                                        <Td>{get(item, "responsiblePerson", "-")}</Td>
                                        <Td>{get(item, "participants", "-")}</Td>
                                        <Td >
                                            <Badge colorScheme={getStatus(get(item, "status", "-"))}  >
                                                {t(get(item, "status", "-"))}
                                            </Badge>
                                        </Td>
                                        <Td>{get(item, "deadline", "-")}</Td>
                                        {/*<Td>*/}
                                        {/*    {dayjs(get(item, "deadline")+'-05:00').utc().format("DD-MM-YYYY HH:mm:ss")}*/}
                                        {/*</Td>*/}
                                    </Tr>
                                ))}
                            </Tbody>
                        )}
                        <Tfoot />
                    </Table>
                </TableContainer>
                <Pagination
                    setPage={setPage}
                    pageCount={get(data, "data.totalPages", 0)}
                    page={page}
                />
            </Box>
        </>
    )
}
export default ProjectsContainer;
