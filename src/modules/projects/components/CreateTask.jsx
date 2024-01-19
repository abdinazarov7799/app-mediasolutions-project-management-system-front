import {
    FormControl,
    FormLabel,Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {ButtonFilled, ButtonOutlined} from "../../../components/ui/Button.jsx";
import React from "react";
import {useTranslation} from "react-i18next";
import {InputOutlined} from "../../../components/ui/Input.jsx";

export const CreateTask = ({isOpen,onClose,...rest}) => {
    const { t } = useTranslation();

    return(
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            {...rest}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{t("Create new task")}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>{t("Task name")}</FormLabel>
                        <InputOutlined placeholder={t("Task name")} />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>{t('Required files')}</FormLabel>
                        <InputOutlined placeholder={t('Required files')} />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <ButtonFilled mr={3}>
                        {t("Create")}
                    </ButtonFilled>
                    <ButtonOutlined onClick={onClose}>
                        {t('Cancel')}
                    </ButtonOutlined>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
