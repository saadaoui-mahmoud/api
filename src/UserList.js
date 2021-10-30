import axios from 'axios'
import './App.css';
import React , {useState,useEffect} from 'react'

function UserList() {

    const [users,setUsers]=useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            console.log(res)
            setUsers(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [])
    
    return (
        <div>
            {
                users.map(user=>(
                    <div key={user.id} className='user'>
                        <h2>{user.username}</h2>
                        <h3>FullName: {user.name}</h3>
                    </div>
                ))
            }
            
        </div>
    )
}

export default UserList
