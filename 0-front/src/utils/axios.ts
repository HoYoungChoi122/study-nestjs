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
instance.interceptors.request.use(config  => {
    //토큰에 대해 header에 담 request 될때 보냄
    if (Vue.$cookies) {
        const token = Vuex.getters.getAccessToken;
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
})
instance.interceptors.response.use(response => {
    const {data} = response

    // const {result, error} = data
    // if (!result) {
    //     Vue.$toast.open({
    //         message: error,
    //         type: 'error',
    //         duration: 5000
    //     });
    // }

    return response
}, error => {
    const {response: { status }, request, message } = error
    /*if (error.response) {
        const {data} = error.response
        console.log(data)
        if (status === 400) {
            Vue.$toast.open({
                message: data.message,
                type: 'error',
                duration: 5000
            });
        }
        return
    }*/

    // if (status === 401) {
    //     Vue.$toast.open({
    //         message: `토큰이 만료되었습니다.`,
    //         type: 'error',
    //         duration: 5000
    //     });
    // } else  {
    //     Vue.$toast.open({
    //         message,
    //         type: 'error',
    //         duration: 5000
    //     });
    // }
    return error
});

export const ins = instance
