import {
    Badge,
    Flex,
    Heading,
    Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr,
    useDisclosure
} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import {AiOutlinePlus} from "react-icons/ai";
import OverlayLoader from "../../../components/loader/overlay-loader.jsx";
import {get, isEmpty, isEqual} from "lodash";
import {getStatus} from "../../../utils/index.js";
import React, {useState} from "react";
import {ButtonOutlined} from "../../../components/ui/Button.jsx";
import {CreateTask} from "./CreateTask.jsx";
import {KEYS} from "../../../constants/key.js";
import {URLS} from "../../../constants/url.js";
import Pagination from "../../../components/pagination/index.jsx";
import useGetOneQuery from "../../../hooks/api/useGetOneQuery.js";
import {useParams} from "react-router";
import useGetAllQuery from "../../../hooks/api/useGetAllQuery.js";

const Tasks = () => {
    const {id} = useParams();
    const { t } = useTranslation()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const {data,isLoading,isFetching,refetch} = useGetOneQuery({
        key: KEYS.tasks_list,
        url: URLS.tasks_list,
        id,
        params: {
            params: {
                page,
                size,
            }
        }
    });

  return(
      <>
            <Flex mt={8}>
                <Heading pr={5}>{t("Tasks")}</Heading>
                <ButtonOutlined
                    variant='outline'
                    colorScheme={'blue'}
                    leftIcon={<AiOutlinePlus />}
                    onClick={onOpen}
                >
                    {t("Add new task")}
                </ButtonOutlined>
                <CreateTask isOpen={isOpen} onClose={onClose} />
            </Flex>
          <TableContainer mt={6}>
              {isFetching && <OverlayLoader />}
              <Table colorScheme="gray" size={"md"} >
                  <Thead>
                      <Tr>
                          <Th>{t("Name")}</Th>
                          <Th>{t("Created Person")}</Th>
                          <Th>{t("Files")}</Th>
                          <Th>{t("Participants")}</Th>
                          <Th>{t("Status")}</Th>
                          <Th>{t("Deadline")}</Th>
                      </Tr>

                  </Thead>
                  { isEmpty(get(data,'data.data',[])) ? (
                      <span>No Tasks</span>
                  ) : (
                      <Tbody>
                          {get(data,'data.data',[]).map((item, i) => (
                              <Tr
                                  key={i + 1}
                              >
                                  <Td>{get(item, "name", i)}</Td>
                                  <Td>{get(item, "createdPerson", "-")}</Td>
                                  <Td>{get(item, "files", "-")}</Td>
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
              pageCount={get(data, "data.totalPages", 1)}
              page={page}
          />
      </>
  )
}
export default Tasks
