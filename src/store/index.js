import {devtools, persist} from "zustand/middleware";
import config from "../config.js";
import storage from "../services/storage";
import {create} from "zustand";


let store = (set) => ({
    isAuthenticated: false,
    user:null,
    setUser: (user) => set(state => ({...state, user})),
    setIsAuthenticated: (isAuthenticated) => set(state => ({...state, isAuthenticated})),
})

let settingsStore = (set) => ({
    lang: storage.get('lang') || config.DEFAULT_APP_LANG,
    token: null,
    setToken: (token) => set(state => ({...state, token})),
    setLang: (lang) => set(state => ({...state, lang})),
})


store = devtools(store);
settingsStore = devtools(settingsStore)
settingsStore = persist(settingsStore, {name: 'settings'});

export const useStore = create(store)
export const useSettingsStore = create(settingsStore)

