import { ApiResponse } from "../models/ApiResponse";
import { QueryParams } from "../models/QueryParams";
import User from "../models/User";
import axiosInstance from "./_config";

export const getUsers = (params:QueryParams = new QueryParams()):Promise<ApiResponse> => {
    
    return axiosInstance.get("/users", {
        params: params
    })
}