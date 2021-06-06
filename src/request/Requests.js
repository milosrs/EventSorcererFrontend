import axios from 'axios'
import { Utility } from '../service/Utility';
import UserService from '../service/UserService';

export const endpointUrl = 'localhost:8085';
export const serverEndpoint = `http://${endpointUrl}/api`;

const create = '/create';
//const modify = '/modify';
const get = '/get';
/*const partialModify = '/partialModify';
const getAll = '/getAll';
const del = '/delete';*/

const workerUrl = '/worker';
/*const managerUrl = '/manager';
const adminUrl = '/admin';*/

const axiosDefaultConfiguration = {
    baseUrl: serverEndpoint,
};

const defaultCallback = (response) => console.log(response);


const defaultErrorCallback = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
}

export const Endpoints = {
    Users: {
        getByUsername: workerUrl + get + '/username',
    },

    Product: {
        create: workerUrl + create + '/product',
    },

    Order: {
        create: workerUrl + create + '/order',
    }
};

export const Request = {
    configureAxiosDefault: () => {
        axios.defaults.baseURL = axiosDefaultConfiguration.baseUrl;
        axios.defaults.headers.Authorization = `Bearer ${UserService.getToken()}`;
    },

    create: (data, endpoint, callback, errorCallback, finalCallback) => {
        axios.post(serverEndpoint + endpoint, data)
        .then(response => Utility.isEmpty(callback) ?  defaultCallback(response) : callback(response))
        .catch(response => Utility.isEmpty(errorCallback) ? defaultErrorCallback(response) : errorCallback(response))
        .finally(response => {
            if(!Utility.isEmpty(finalCallback)) {
                finalCallback(response);
            }
        });
    },

    get: (id, endpoint, callback, errorCallback, finalCallback) => {
        axios.get(serverEndpoint + endpoint)
        .then(response => Utility.isEmpty(callback) ?  defaultCallback(response) : callback(response))
        .catch(response => Utility.isEmpty(errorCallback) ? defaultErrorCallback(response) : errorCallback(response))
        .finally(response => {
            if(!Utility.isEmpty(finalCallback)) {
                finalCallback(response);
            }
        });
    },

    getAll: (endpoint, callback, errorCallback, finalCallback) => {
        axios.get(serverEndpoint + endpoint)
        .then(response => Utility.isEmpty(callback) ?  defaultCallback(response) : callback(response))
        .catch(response => Utility.isEmpty(errorCallback) ? defaultErrorCallback(response) : errorCallback(response))
        .finally(response => {
            if(!Utility.isEmpty(finalCallback)) {
                finalCallback(response);
            }
        });
    },

    modify: (data, endpoint, callback, errorCallback, finalCallback) => {
        axios.put(serverEndpoint + endpoint, data)
        .then(response => Utility.isEmpty(callback) ?  defaultCallback(response) : callback(response))
        .catch(response => Utility.isEmpty(errorCallback) ? defaultErrorCallback(response) : errorCallback(response))
        .finally(response => {
            if(!Utility.isEmpty(finalCallback)) {
                finalCallback(response);
            }
        });
    },

    partialModify: (data, endpoint, callback, errorCallback, finalCallback) => {
        axios.patch(serverEndpoint + endpoint, data)
        .then(response => Utility.isEmpty(callback) ?  defaultCallback(response) : callback(response))
        .catch(response => Utility.isEmpty(errorCallback) ? defaultErrorCallback(response) : errorCallback(response))
        .finally(response => {
            if(!Utility.isEmpty(finalCallback)) {
                finalCallback(response);
            }
        });
    },

    delete: (id, endpoint, callback, errorCallback, finalCallback) => {
        axios.delete(serverEndpoint + endpoint)
        .then(response => Utility.isEmpty(callback) ?  defaultCallback(response) : callback(response))
        .catch(response => Utility.isEmpty(errorCallback) ? defaultErrorCallback(response) : errorCallback(response))
        .finally(response => {
            if(!Utility.isEmpty(finalCallback)) {
                finalCallback(response);
            }
        });
    }
};