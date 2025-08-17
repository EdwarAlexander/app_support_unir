import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

import { AdminLayout } from './admin/layout/AdminLayout';
import { Login } from './auth/page/login/Login';
import Register from './auth/page/register/Register';

import { AdminGraficaSensores, AdminIndicadoresAlerta, AdminResumenEquipo, HomePage, AdminRegistroMantenimiento, AdminHistoriaMantenimiento, AdminCalendarioMantenimiento, AdminListarEquipo, AdminRegistroEquipo, AdminAdministrador, AdminSupervisor, AdminTecnico, AdminTendencia, AdminAnalisisAnomalias, AdminProyeccionEstado } from './admin/pages';




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
            },
            {
                path: 'gestion-mantenimiento/registro',
                element: <AdminRegistroMantenimiento />
            },
            {
                path: 'gestion-mantenimiento/historia',
                element: <AdminHistoriaMantenimiento />
            },
            {
                path: 'gestion-mantenimiento/calendario',
                element: <AdminCalendarioMantenimiento />
            },
            {
                path: 'equipo/lista',
                element: <AdminListarEquipo />
            },
            {
                path: 'equipo/registro',
                element: <AdminRegistroEquipo />
            },
            {
                path: 'administracion/administrador',
                element: <AdminAdministrador />
            },
            {
                path: 'administracion/supervisor',
                element: <AdminSupervisor />
            },
            {
                path: 'administracion/tecnico',
                element: <AdminTecnico />
            },
            {
                path: 'analitica-predictiva/tendencia',
                element: <AdminTendencia />
            },
            {
                path: 'analitica-predictiva/analisis-anomalias',
                element: <AdminAnalisisAnomalias />
            },
            {
                path: 'analitica-predictiva/proyeccion-estado',
                element: <AdminProyeccionEstado />
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
        element: <Navigate to='/auth' />
    }
])