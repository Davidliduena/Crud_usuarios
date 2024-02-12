import { useEffect, useState } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import FormUser from './components/FormUser';
import CardUser from './components/CardUser';

function App() {

  const [editUser, setEditUser] = useState()
  const [isOpen, setIsOpen] = useState(false);
  const url = 'https://users-crud.academlo.tech/';
  const [users, getUsers, createUser, deleteUser, updateUser]
  = useCrud(url);

  useEffect(() => {
   getUsers('/users/')
  }, [])
 
const handleOpen = () => {
    setIsOpen(true);
}

  return (
   <div>
    <div className='principal'>
    <div className='title'>
    <h1>Crud de usuarios</h1>
    </div>
    <div className='subtitle'>
    <button className='btn__sub' onClick={handleOpen}>+Crear nuevo usuario</button>
    </div>
    </div>
    <FormUser
    createUser={createUser}
    editUser={editUser}
    updateUser={updateUser}
    setEditUser={setEditUser}
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    />
  <div className='container__cards'>
    {
      users?.map(user => (
        <CardUser 
        key={user.id}
        user={user}
        deleteUser={deleteUser}
        setEditUser={setEditUser}
        setIsOpen={setIsOpen}
        />
      ))
    }
  </div>
   </div>
  )
}

export default App;
