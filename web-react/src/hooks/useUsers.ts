import { useEffect, useState } from "react";
import { getUsers } from "../api/apiUsers";
import { QueryParams } from "../models/QueryParams";
import User from "../models/User";


export const useUsers = (query:QueryParams = new QueryParams()) => {
   
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)
    const [users, setUsers] = useState<User[]>([])
    

    useEffect(() => {
      function fetchData() {
        setLoading(true);

        getUsers(query).then(response => {
            const responseData = response.data
            setLoading(false)
            setUsers(responseData.data.map((d: User) => d as User))
            
        }).catch(error => setError(error.message))
      }
      fetchData()
    
    }, [])

    return {
        loading, 
        error,
        users
    }
}