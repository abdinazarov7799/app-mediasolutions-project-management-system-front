import React from 'react';
import {get} from "lodash";
import {useSettingsStore, useStore} from "../../store";

const useAuth = () => {
    const isAuthenticated = useStore(state => get(state, 'isAuthenticated', false));
    const token = useSettingsStore(state => get(state, 'token', null));
    const user = useStore(state => get(state, 'user', null));
    return {
        isAuthenticated,
        token,
        user
    }
};
export default useAuth;
