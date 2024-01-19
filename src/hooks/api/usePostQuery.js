import React from 'react';
import {useMutation, useQueryClient} from 'react-query'
import {request} from "../../services/api/index.jsx";
import {useToast} from "@chakra-ui/react";

const postRequest = (url, attributes, config = {}) => request.post(url, attributes, config);

const usePostQuery = ({hideSuccessToast = false, listKeyId = null}) => {
    const toast = useToast()

        const queryClient = useQueryClient();

        const {mutate, isLoading, isError, error, isFetching} = useMutation(
            ({
                 url,
                 attributes,
                 config = {}
             }) => postRequest(url, attributes, config),
            {
                onSuccess: (data) => {
                    if (!hideSuccessToast) {
                        toast({
                            title: data?.data?.message || 'SUCCESS',
                            position: "top-right",
                            variant: "left-accent",
                            status: 'success',
                            isClosable: true,
                        })
                    }

                    if (listKeyId) {
                        queryClient.invalidateQueries(listKeyId)
                    }
                },
                onError: (data) => {
                    toast({
                        title: data?.response?.data?.message || 'ERROR',
                        position: "top-right",
                        variant: "left-accent",
                        status: 'error',
                        isClosable: true,
                    })
                }
            }
        );

        return {
            mutate,
            isLoading,
            isError,
            error,
            isFetching,
        }
    }
;

export default usePostQuery;
