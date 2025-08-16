import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

import { AdminLayout } from './admin/layout/AdminLayout';
import { Login } from './auth/page/login/Login';
import Register from './auth/page/register/Register';

import { AdminGraficaSensores, AdminIndicadoresAlerta, AdminResumenEquipo, HomePage } from './admin/pages';



const AuthLayout = lazy(() => import('./auth/layout/AuthLayout'));

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AdminLayout />,
        children:[
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'estado-general-equipos/grafica',
                element: <AdminGraficaSensores />
            },
            {
                path: 'estado-general-equipos/indicadores',
                element: <AdminIndicadoresAlerta />,
            },
            {
                path: 'estado-general-equipos/resumenequipos',
                element: <AdminResumenEquipo />
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