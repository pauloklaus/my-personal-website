import Vue from "vue";
import axios from "axios";
import httpstatus from "http-status-codes";

const http = axios.create({
    withCredentials: false,
    timeout: 60 * 1000,
});

http.interceptors.request.use(
    function(config) {
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        if (error.response) {
            if (error.response.status === httpstatus.NOT_FOUND)
                error.message = "Recurso não encontrado.";
            else if (error.response.status === httpstatus.FORBIDDEN)
                error.message = "Sem permissão para acessar o recurso solicitado.";
            else if (error.response.status === httpstatus.METHOD_NOT_ALLOWED)
                error.message = "Falha ao acessar o recurso solicitado.";
            else if (error.response.data && error.response.data.message)
                error.message =  error.response.data.message;
            else
                error.message =  "Erro na operação solicitada.";
        }
        else if (error?.message === "Network Error")
            error.message = "Erro ao acessar o servidor.";
        else
            error.message = "Erro na operação solicitada.";

        return Promise.reject(error);
    }
);

Vue.use({
    install(Vue) {
        Object.defineProperties(Vue.prototype, {
            $http: {
                get() {
                    return http;
                }
            }
        });
    }
});
