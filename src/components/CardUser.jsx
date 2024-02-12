import React from 'react'
import './styles/cardUser.css';

const CardUser = ({user, deleteUser, setEditUser, setIsOpen}) => {

  const handleDelete = () => {
    deleteUser('/users', user.id);
  }

  const handleEdit =  () => {
    setEditUser(user);
    setIsOpen(true);
  }

  return (
    <article className='info__user'>
      <h3 className='info__name'>{user.first_name} {user.last_name}</h3>
      <ul>
        <li className='info__data'><span className='info__cards'>correo: </span><span>{user.email}</span></li>
        <li className='info__data'><span className='info__cards'>cumpleaños: </span><span>{user.birthday}</span></li>
      </ul>
      <div className='btn__btn'>
      <button className='info__btn' onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon></button>
      <button className='info__btn' onClick={handleEdit}><ion-icon name="create-outline"></ion-icon></button>
      </div>
    </article>
  )
}

export default CardUser