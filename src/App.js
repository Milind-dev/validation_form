import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

export default function FormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <form>
          <label>First Name</label>
          <input
            placeholder="First Name"
            type="text"
            {...register('firstName', { required: true, maxLength: 10 })}
          />
        </form>
        {errors.firstName && (
          <p style={{ color: 'red' }}>Please check the First Name</p>
        )}
        <form>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
            {...register('lastName', { required: true, maxLength: 10 })}
          />
        </form>
        {errors.lastName && (
          <p style={{ color: 'red' }}>Please check the Last Name</p>
        )}
        <form>
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </form>
        {errors.email && <p style={{ color: 'red' }}>Please check the Email</p>}
        <form>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            {...register('password', {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            })}
          />
        </form>
        {errors.password && (
          <p style={{ color: 'red' }}>Please check the Password</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
