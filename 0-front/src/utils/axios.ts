import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Vue from 'vue';
import Vuex from '../store';

const baseURL = process.env.NODE_ENV === 'development' ? '/api' : '/api'
const instance :AxiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 20000
});

export const ins = instance
