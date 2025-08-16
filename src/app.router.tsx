import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

import { AdminLayout } from './admin/layout/AdminLayout';
import { HomePage } from './admin/pages/home/HomePage';
import { Login } from './auth/page/login/Login';
import Register from './auth/page/register/Register';



const AuthLayout = lazy(() => import('./auth/layout/AuthLayout'));

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AdminLayout />,
        children:[
            {
                index: true,
                element: <HomePage />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children:[
            {
                index: true,
                element: <Navigate to='/auth/login' />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to='/' />
    }
])