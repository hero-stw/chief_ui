import { AxiosRequestConfig } from "axios";
import { Api } from "./service";

const securityWorker = async () => {
    return {
        headers: {
            accept: "application/json;charset=UTF-8",
            "Content-type": "application/json",
        },
    };
};

export const api = (props: AxiosRequestConfig) => {
    return new Api({
        securityWorker,
        withCredentials: true,
        // paramsSerializer: (params: any) =>
        //   params ? qs.stringify(params, { arrayFormat: "brackets" }) : "",
        ...props,
    });
};
