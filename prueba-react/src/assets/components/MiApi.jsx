import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const MiApi = () => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const buscador = (e) => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    const fechasApi = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url)
      const data = await response.json()
      setUsers(data);
    }
    fechasApi();
  }, [])

  return (
    <div>
      <div className='searcher'>
        <span>
          <h3 className='text-light'>
            Usuarios Registrados
          </h3>
        </span>
        <input
          value={search}
          onChange={buscador}
          type="text"
          className="form-control"
          placeholder="Ingresa un nombre">
        </input>
      </div>
      <div>
      {users.filter((data) => {
        return data.name.toLowerCase().includes(search.toLocaleLowerCase())
       })
       .sort((a,b) => {
        return a.name.localeCompare(b.title) 
       })
       .map(user => (
        <div key={user.id}>
        <div>
            <div>
              <ul className='text-light'>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
              </ul>
            </div>
        </div>
        </div>))}
      </div>
    </div>
  )
}
export default MiApi;
