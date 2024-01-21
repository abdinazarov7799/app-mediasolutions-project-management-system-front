import {
    FormControl, FormErrorMessage,
    FormLabel, Input, InputGroup, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Select, SelectField, SimpleGrid, Text
} from "@chakra-ui/react";
import {ButtonFilled, ButtonOutlined} from "../../../components/ui/Button.jsx";
import React from "react";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {URLS} from "../../../constants/url.js";
import {get} from "lodash";
import usePostQuery from "../../../hooks/api/usePostQuery.js";
import config from "../../../config.js";

export const CreateProject = ({isOpen,onClose,refetch,...rest}) => {
    const { t } = useTranslation();
    const { mutate, isLoading } = usePostQuery({});
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();


    const onSubmit = (values) => {
        mutate(
            { url: URLS.create_project, attributes: values },
            {
                onSuccess: ({ data }) => {
                    onClose();
                    refetch();
                },
            }
        );
    };
    return(
      <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={{base: 'xs', md: '6xl'}}
          {...rest}
      >
          <ModalOverlay />
          <ModalContent>
              <ModalHeader>{t("Create new project")}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                  <form onSubmit={handleSubmit(onSubmit)}>
                      <SimpleGrid columns={{base: 1, md: 3}} gap={5}>
                          <FormControl isInvalid={errors.name}>
                              <FormLabel htmlFor="name">{t('Project name')}</FormLabel>
                              <InputGroup>
                                  <Input
                                      id="name"
                                      {...register("name", {
                                          required: "Phone number is required",
                                      })}
                                      placeholder="Project name"
                                  />
                              </InputGroup>
                              <FormErrorMessage>
                                  {errors.name && errors.name.message}
                              </FormErrorMessage>
                          </FormControl>

                          <FormControl isInvalid={errors.type}>
                              <FormLabel htmlFor="type">{t('Service type')}</FormLabel>
                              <InputGroup>
                                  <Select
                                      id="type"
                                      {...register("type")}
                                  >
                                      {
                                          get(config,'SERVICE_TYPES',[])?.map((item,i) => (
                                              <option value={get(item,'value','')} key={i+1}>
                                                  {get(item,'label','')}
                                              </option>
                                          ))
                                      }
                                  </Select>
                              </InputGroup>
                              <FormErrorMessage>
                                  {errors.type && errors.type.message}
                              </FormErrorMessage>
                          </FormControl>

                          <FormControl isInvalid={errors.description}>
                              <FormLabel htmlFor="description">{t('Description')}</FormLabel>
                              <InputGroup>
                                  <Input
                                      id="description"
                                      {...register("description", {
                                          required: "Description is required",
                                      })}
                                      placeholder="Description"
                                  />
                              </InputGroup>
                              <FormErrorMessage>
                                  {errors.description && errors.description.message}
                              </FormErrorMessage>
                          </FormControl>

                          <FormControl isInvalid={errors.agreedPrice}>
                              <FormLabel htmlFor="price">{t('Price')}</FormLabel>
                              <InputGroup>
                                  <Input
                                      id="price"
                                      {...register("price", {
                                          required: "Price is required",
                                      })}
                                      placeholder="Price"
                                  />
                              </InputGroup>
                              <FormErrorMessage>
                                  {errors.price && errors.price.message}
                              </FormErrorMessage>
                          </FormControl>

                          <FormControl isInvalid={errors.deal_number}>
                              <FormLabel htmlFor="deal_number">{t('Contract')}</FormLabel>
                              <InputGroup>
                                  <Input
                                      id="deal_number"
                                      {...register("deal_number")}
                                      placeholder="Contract"
                                  />
                              </InputGroup>
                              <FormErrorMessage>
                                  {errors.deal_number && errors.deal_number.message}
                              </FormErrorMessage>
                          </FormControl>

                          <FormControl isInvalid={errors.deadline}>
                              <FormLabel htmlFor="deadline">{t('Deadline')}</FormLabel>
                              <InputGroup>
                                  <Input
                                      id="deadline"
                                      type={'date'}
                                      {...register("deadline", {
                                          required: "Deadline is required",
                                      })}
                                      placeholder="Deadline"
                                  />
                              </InputGroup>
                              <FormErrorMessage>
                                  {errors.deadline && errors.deadline.message}
                              </FormErrorMessage>
                          </FormControl>

                          <FormControl isInvalid={errors.clientName}>
                              <FormLabel htmlFor="clientName">{t('Client name')}</FormLabel>
                              <InputGroup>
                                  <Input
                                      id="clientName"
                                      {...register("clientName", {
                                          required: "Client name is required",
                                      })}
                                      placeholder="Client name"
                                  />
                              </InputGroup>
                              <FormErrorMessage>
                                  {errors.clientName && errors.clientName.message}
                              </FormErrorMessage>
                          </FormControl>

                          <FormControl isInvalid={errors.clientPhone1}>
                              <FormLabel htmlFor="clientPhone1">{t('Client Phone')}</FormLabel>
                              <InputGroup>
                                  <Input
                                      id="clientPhone1"
                                      type={"number"}
                                      {...register("clientPhone1", {
                                          required: "Client phone is required",
                                      })}
                                      placeholder="Client phone"
                                  />
                              </InputGroup>
                              <FormErrorMessage>
                                  {errors.clientPhone1 && errors.clientPhone1.message}
                              </FormErrorMessage>
                          </FormControl>

                          <FormControl isInvalid={errors.clientPhone2}>
                              <FormLabel htmlFor="clientPhone2">{t('Client second phone')}</FormLabel>
                              <InputGroup>
                                  <Input
                                      type={"number"}
                                      id="clientPhone2"
                                      {...register("clientPhone2")}
                                      placeholder="Client second phone"
                                  />
                              </InputGroup>
                              <FormErrorMessage>
                                  {errors.clientPhone2 && errors.clientPhone2.message}
                              </FormErrorMessage>
                          </FormControl>

                      </SimpleGrid>
                      <ButtonFilled
                          mt={4}
                          isLoading={isSubmitting}
                          type="submit"
                          width={"100%"}
                      >
                          <Text color="white">{t("Create")}</Text>
                      </ButtonFilled>
                  </form>
              </ModalBody>
              <ModalFooter>
                  <ButtonOutlined onClick={onClose}>
                      {t('Cancel')}
                  </ButtonOutlined>
              </ModalFooter>
          </ModalContent>
      </Modal>
    )
}
