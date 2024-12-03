'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  name?: string;
  email: string;
  password: string;
};

const Home = () => {
  const [step, setStep] = useState<'login' | 'register'>('register');
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onRegister: SubmitHandler<FormValues> = (data) => {
    console.log('User registered:', data);
    setStep('login'); // Move to login step after successful registration
    reset();
  };

  const onLogin: SubmitHandler<FormValues> = (data) => {
    console.log('User logged in:', data);
    reset();
  };

  return (
    <div>
      {step === 'register' ? (
        <form onSubmit={handleSubmit(onRegister)}>
          <h2>Register</h2>
          <input
            type="text"
            {...register('name', { required: true })}
            placeholder="Name"
          />
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="Email"
          />
          <input
            type="password"
            {...register('password', { required: true, minLength: 8 })}
            placeholder="Password"
          />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account?{' '}
            <button type="button" onClick={() => setStep('login')}>
              Login
            </button>
          </p>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onLogin)}>
          <h2>Login</h2>
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="Email"
          />
          <input
            type="password"
            {...register('password', { required: true })}
            placeholder="Password"
          />
          <button type="submit">Login</button>
          <p>
            <button type="button" onClick={() => setStep('register')}>
              Register
            </button>
          </p>
        </form>
      )}
    </div>
  );
};

export default Home;