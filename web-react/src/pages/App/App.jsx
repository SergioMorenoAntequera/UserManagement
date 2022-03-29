import Spinner from '../../components/Spinner/Spinner';
import UserCard from '../../components/UserCard';
import { useUsers } from '../../hooks/useUsers';
import './App.css';

function App() {

  const { loading, error, users } = useUsers()  

  console.log(users)

  return (
    <div className="App">
      <nav className="App-nav">
        <div className="App-header">
          <img src="https://www.anthemis.com/wp-content/uploads/2020/11/proportunity-logo.png" alt="logo" />
        </div>
      </nav>

      {error && <p> Error fetching Data </p>}
      {loading && <Spinner/>}
      {users.map(user => 
        <UserCard key={user._id} user={user}/>
      )}
    </div>
  );
}

export default App;
