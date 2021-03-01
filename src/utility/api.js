import Axios from 'axios'
import regeneratorRuntime from "regenerator-runtime";
const api = {
    get: async function (apiPath, data) {
        await Axios.get(apiPath, data).then(function (result) {
            return result;
        }).catch(function (error) {
            return error;
        })
    },
    post: async function (apiPath, data) {
        await Axios.post(apiPath, data).then(function (result) {
            return result;
        }).catch(function (error) {
            return error;
        })
    },
    put: async function (apiPath, data) {
        await Axios.put(apiPath, data).then(function (result) {
            return result;
        }).catch(function (error) {
            return error;
        })
    },
    delete: async function (apiPath, data) {
        await Axios.delete(apiPath, data).then(function (result) {
            return result;
        }).catch(function (error) {
            return error;
        })
    }
}

export default api;