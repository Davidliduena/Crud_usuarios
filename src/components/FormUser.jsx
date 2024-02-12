import React, { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import './styles/formUser.css';

const FormUser = ({createUser, editUser, updateUser, setEditUser, isOpen, setIsOpen }) => {


    const {handleSubmit, register, reset} = useForm();

    // console.log(editUser);
    useEffect(() => {
     reset(editUser);
    }, [editUser])
    
    const submit = (data) => {
      if(editUser){
        updateUser('/users', editUser.id, data)
        setEditUser();
      }else{
        createUser('/users', data);

      }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            brithday: '',
        })

        setIsOpen(false);
    }

    const handleClose = () => {
      setIsOpen(false);
    }

  return (
    <div className={`form__backgraund ${isOpen&&'able'}`}>
      <form className='form__container' onSubmit={handleSubmit(submit)}>
        <div className='form__close' onClick={handleClose}><ion-icon name="close-circle-outline"></ion-icon></div>
        <h2 className='form__title'>Nuevo usuario</h2>
        <div className='form__item'>
            <label htmlFor="email">Email</label>
            <input {...register('email')} id='email' type="email" />
        </div>

        <div className='form__item'>
            <label htmlFor="password">Password</label>
            <input {...register('password')} id='password' type="password" />
        </div>

        <div className='form__item'>
            <label htmlFor="first_namel">First_name</label>
            <input {...register('first_name')} id='fist_name' type="text" />
        </div>

        <div className='form__item'>
            <label htmlFor="last_name">Last_name</label>
            <input {...register('last_name')} id='last_name' type="text" />
        </div>

        <div className='form__item'>
            <label htmlFor="birthday">Birthday</label>
            <input {...register('birthday')} id='bbirthday' type="date" />
        </div>

        <button className='form__btn'>Submit</button>
      </form>
    </div>
  )
}

export default FormUser;
