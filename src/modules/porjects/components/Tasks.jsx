import {
    Badge, Box,
    Button,
    Flex, FormControl, FormLabel,
    Heading, Image, Input,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr,
    useDisclosure
} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import {AiOutlinePlus} from "react-icons/ai";
import OverlayLoader from "../../../components/loader/overlay-loader.jsx";
import {get, isEmpty, isEqual} from "lodash";
import {getStatus} from "../../../utils/index.js";
import React, {useState} from "react";
import NoDataImg from '../../../assets/images/noData.jpg'

const Tasks = () => {
    const { t } = useTranslation()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isFetching, setIsFetching] = useState(false);
    const data = [
        {
            id: 1,
            name: "Botni bitirish kere",
            createdPerson: "Rajabov A.",
            files: "doc.docx, abc.pdf",
            participants: 'Diyor, Jamgirov A.',
            status: 'Jarayonda',
            deadline: '24.12.2023'
        },
    ]
  return(
      <>
            <Flex mt={8}>
                <Heading pr={5}>{t("Tasks")}</Heading>
                <Button
                    variant='outline'
                    colorScheme={'blue'}
                    leftIcon={<AiOutlinePlus />}
                    onClick={onOpen}
                >
                    {t("Add new task")}
                </Button>
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{t("Create new task")}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>{t("Task name")}</FormLabel>
                                <Input placeholder={t("Task name")} />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>{t('Required files')}</FormLabel>
                                <Input placeholder={t('Required files')} />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3}>
                                {t("Create")}
                            </Button>
                            <Button onClick={onClose}>{t('Cancel')}</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
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
                  {isEmpty(data) ? (
                      <span>No Tasks</span>
                  ) : (
                      <Tbody>
                          {data?.map((item, i) => (
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
      </>
  )
}
export default Tasks
