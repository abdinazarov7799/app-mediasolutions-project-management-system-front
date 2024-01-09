import React, { useEffect } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { URLS } from "../../../../constants/url";
import { KEYS } from "../../../../constants/key";
import Swal from "sweetalert2";
import { ContentLoader } from "../../../../components/loader";
import { useTranslation } from "react-i18next";
import { find, get, isEqual } from "lodash";
import usePostQuery from "../../../../hooks/api/usePostQuery";

const LanguageForm = ({ langkey, onClose }) => {
  const { t } = useTranslation();
  const { handleSubmit, register, setValue } = useForm();
  const { mutate, isLoading } = usePostQuery({
    listKeyId: KEYS.translations_list,
    hideSuccessToast: false,
  });

  const onSubmit = (values) => {
    values.id = get(langkey, "id");
    mutate(
      { url: `${URLS.add_translations}`, attributes: values },
      {
        onSuccess: (data) => {
          onClose();
          Swal.fire({
            position: "center",
            icon: "success",
            backdrop: "rgba(0,0,0,0.9)",
            background: "none",
            title: t("Tarjima muvaffaqiyatli amalga oshirildi!"),
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              title: "title-color",
            },
          });
        },
        onError: () => {
          onClose();
          Swal.fire({
            position: "center",
            icon: "error",
            backdrop: "rgba(0,0,0,0.9)",
            background: "none",
            title: t("Tarjima amalga oshirilmadi!"),
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              title: "title-color",
            },
          });
        },
      }
    );
  };

  const findLang = (translations = [], lang) => {
    return find(translations, (item) => isEqual(get(item, "language"), lang));
  };

  if (isLoading) {
    return <ContentLoader />;
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl mt={2}>
        <FormLabel>Key</FormLabel>
        <Input
          type="text"
          {...register("id")}
          value={get(langkey, "text")}
          disabled
        />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>{t("Uzbek")}</FormLabel>
        <Input
          type="text"
          {...register("translations.Uz")}
          defaultValue={get(
            findLang(get(langkey, "languageSourcePs", []), "Uz"),
            "translation",
            ""
          )}
        />
      </FormControl>
      <FormControl mt={5}>
        <FormLabel>{t("English")}</FormLabel>
        <Input
          type="text"
          {...register("translations.En")}
          defaultValue={get(
            findLang(get(langkey, "languageSourcePs", []), "En"),
            "translation",
            ""
          )}
        />
      </FormControl>{" "}
      <FormControl mt={5}>
        <FormLabel>{t("Rus")}</FormLabel>
        <Input
          type="text"
          {...register("translations.Ru")}
          defaultValue={get(
            findLang(get(langkey, "languageSourcePs", []), "Ru"),
            "translation",
            ""
          )}
        />
      </FormControl>
      <Stack spacing={6} color={"white"}>
        <Button mt={8} colorScheme="cyan" type="submit">
          <Text color="white">{t("Save")}</Text>
        </Button>
      </Stack>
    </form>
  );
};

export default LanguageForm;
