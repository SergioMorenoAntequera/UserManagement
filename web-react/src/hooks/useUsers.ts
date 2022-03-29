import { useEffect, useState } from "react";
import { getUsers } from "../api/apiUsers";
import { ApiResponseData } from "../models/ApiResponse";
import { QueryParams } from "../models/QueryParams";
import User from "../models/User";


export const useUsers = (parameters:QueryParams = new QueryParams()) => {

    const [responseData, setResponseData] = useState<ApiResponseData|null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)

    const [allUsers, setAllUsers] = useState<User[]>([])
    const [users, setUsers] = useState<User[]>([])


    
    const loadMoreUsers = (amount:number) => {
        if(!responseData) return;
    }

    useEffect(() => {
        function fetchData() {
            setLoading(true);

            getUsers(parameters).then(response => {
                const auxResponseData = response.data
                if(!auxResponseData) return;
                const foundUsers = auxResponseData.data.map((d: User) => d as User) 
                
                setLoading(false)
                setUsers(foundUsers)
                setAllUsers(foundUsers)
                setResponseData(auxResponseData)
            }).catch(error => setError(error.message))
        }
        if(loading) fetchData()
    }, [loading])

    return {
        loading, 
        error,
        users,
        allUsers,
        loadMoreUsers
    }
}