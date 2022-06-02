import React, {useEffect, useState} from 'react'
import UserForm from './components/UserForm'
import './App.css'

function App() {
  let [data, setData] = useState([])
  let [isLoaded, setIsLoaded] = useState(true)


  useEffect(()=>{
    async function fetchData(){
      await fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((json) => setData(json['results']))
      .catch((error) => console.log(error));
    }
      fetchData();
  }, []);

  useEffect( () => {
    if(data.length !== 0) {
      setIsLoaded(false)
    }
    console.log(data);
  }, [data])

  return (
    <div>
      {isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        data.map((user) => (
          <UserForm
            firstName={user.name.first}
            lastName={user.name.last}
            streetNum = {user.location.street.number}
            streetName= {user.location.street.name}
            city={user.location.city}
            state={user.location.state}
            postcode={user.location.postcode}
            username={user.login.username}
            password={user.login.password}
            phone={user.phone}
            email={user.email}
            picture={user.picture.large}
        />
      ))
      )}
    </div>
  );
      }

export default App