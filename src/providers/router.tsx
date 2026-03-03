import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../assets/components/auth/Login';
import { Register } from '../assets/components/register/Register';
import { HomePage } from '../assets/components/home/HomePage';

export const router = createBrowserRouter ([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/register',
    element: <Register />
  },
]);

