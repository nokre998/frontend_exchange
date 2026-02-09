import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../assets/components/auth/Login';
import { Register } from '../assets/components/register/Register';


export const router = createBrowserRouter ([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
]);

