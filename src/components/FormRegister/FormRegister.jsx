import React from 'react'
import { useForm } from 'react-hook-form'
import './FormRegister.css'

const FormRegister = () => {
  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      user: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = (values) => {
    alert('registro correcto')
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Introduce tus datos para registrarte</h2>
        {/* //! ETIQUETA USER */}
        <label htmlFor='user'>Nombre de usuario</label>
        <input
          {...register('user', {
            required: {
              value: true,
              message: 'Introduce un nombre de usuario'
            },
            minLength: { value: 4, message: 'Introduce al menos 4 caracteres' }
          })}
          type='text'
          id='user'
        />

        {formState.errors.user ? (
          <p className='error'>{formState.errors.user.message}</p>
        ) : null}
        {/* //! ETIQUETA EMAIL */}
        <label htmlFor='email'>Email</label>
        <input
          {...register('email', {
            required: { value: true, message: 'Introduce un email válido' },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Formato de email inválido'
            }
          })}
          type='email'
          id='email'
        />

        {formState.errors.email ? (
          <p className='error'>{formState.errors.email.message}</p>
        ) : null}
        {/* //! ETIQUETA password */}

        <label htmlFor='user'>Contraseña</label>
        <input
          {...register('password', {
            required: {
              value: true,
              message: 'Introduce una contraseña válid'
            },
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                'Debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial'
            }
          })}
          type='password'
          id='password'
        />

        {formState.errors.password ? (
          <p className='error'>{formState.errors.password.message}</p>
        ) : null}
        <button type='submit'>Registrarse</button>
      </form>
    </>
  )
}

export default FormRegister
