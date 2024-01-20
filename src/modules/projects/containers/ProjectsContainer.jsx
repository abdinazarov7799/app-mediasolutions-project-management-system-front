import {
    Badge,
    Box,
    Flex,
    Heading, Table,
    TableContainer,
    Tbody, Td,
    Tfoot,
    Th, Thead,
    Tr, useDisclosure
} from "@chakra-ui/react";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import OverlayLoader from "../../../components/loader/overlay-loader.jsx";
import Pagination from "../../../components/pagination/index.jsx";
import {useNavigate} from "react-router-dom";
import {get, isArray, isEmpty, isEqual} from "lodash";
import {getStatus} from "../../../utils/index.js";
import {AiOutlinePlus} from "react-icons/ai";
import {ButtonOutlined} from "../../../components/ui/Button.jsx";
import {CreateProject} from "../components/CreateProject.jsx";
import useGetAllQuery from "../../../hooks/api/useGetAllQuery.js";
import {KEYS} from "../../../constants/key.js";
import {URLS} from "../../../constants/url.js";



const ProjectsContainer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [active, setActive] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {data,isLoading,isFetching} = useGetAllQuery({
        key: KEYS.projects_list,
        url: URLS.projects_list,
        page,
    });
    const headData = get(data,'data',{});

    return(
        <>
            <Box bg={'white'} p={4} width="100%" borderRadius="md">
                <Flex alignItems={"center"}>
                    <Heading mr={4}>{t('Projects')}</Heading>
                    <ButtonOutlined
                        variant='outline'
                        colorScheme={'blue'}
                        leftIcon={<AiOutlinePlus />}
                        onClick={onOpen}
                    >
                        {t("Create new Project")}
                    </ButtonOutlined>
                    <CreateProject isOpen={isOpen} onClose={onClose} />
                </Flex>
                <TableContainer mt={6}>
                    {isLoading && <OverlayLoader />}
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
                        {
                            (isEmpty(get(headData,'data',[])) && isArray(get(headData,'data',[]))) ? (
                                <span style={{ padding: "10px", margin: "10px", textAlign: "center" }}>
                                    {t("No Data")}
                                </span>
                        ) : (
                            <Tbody>
                                {get(headData, "data", []).map((item, i) => (
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
                                        <Td>{get(item, "type", "-")}</Td>
                                        <Td>{get(item, "clientName", "-")}</Td>
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
