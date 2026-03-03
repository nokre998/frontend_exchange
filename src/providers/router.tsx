import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../components/auth/Login';
import { Register } from '../components/register/Register';
import { HomePage } from '../components/home/HomePage';

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

