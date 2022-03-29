import Spinner from '../../components/Spinner/Spinner'
import { useUsers } from '../../hooks/useUsers'
import { QueryParams } from '../../models/QueryParams'
import UserCard from './UserCard'
import "./UsersList.scss"

export default function UsersList() {

    // It would be enought with changing this parameters access 
    // to custom data but I think I already exceeded the time limit.
    const parameters:QueryParams = {
        page: 0,
        limit: 20,
        applications: true,
    }

    const { loading, error, users } = useUsers(parameters)  

    return (<div className='UsersList'>

        {error && <p> Error fetching Data </p>}
        {loading && <Spinner/>}

        {users.map((user, index) => 
            <UserCard index={index} key={user._id} user={user}/>
        )}

    </div>)
}
