import React from 'react';
import {Outlet} from "react-router-dom";

import {
    Flex,
    Stack,
} from '@chakra-ui/react';

const AuthLayout = ({...rest}) => {
    return (
        <Stack minH={'100vh'} direction={{base: 'column', md: 'row'}}>
            <Flex p={8} flex={1} align={'center'} justify={'center'} className={'bg'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <div className="box">
                        <Outlet/>
                    </div>
                </Stack>
            </Flex>

        </Stack>
    );
};

export default AuthLayout;
