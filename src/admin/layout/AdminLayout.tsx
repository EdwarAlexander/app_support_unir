import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

import {
  ClusterOutlined,
  DesktopOutlined,
  FundViewOutlined,
  LoginOutlined,
  PieChartOutlined,
  TeamOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Inicio', '/', <PieChartOutlined />),

  getItem('Estado General', 'sub1', <ClusterOutlined />, [
    getItem('Gráfica de Sensores', '/estado-general-equipos/grafica'),
    getItem('Indicadores de Alerta', '/estado-general-equipos/indicadores'),
    getItem('Resumen de Equipos', '/estado-general-equipos/resumenequipos'),
  ]),
  getItem('Gestion Mantenimiento', 'sub2', <DesktopOutlined />, [
    getItem('Registro', '/gestion-mantenimiento/registro'),
    getItem('Historia Mantenimiento', '/gestion-mantenimiento/historia'),
    getItem('Calendario Mantenimiento', '/gestion-mantenimiento/calendario'),
  ]),
  getItem('Analitica Predictiva', 'sub3', <FundViewOutlined />, [
    getItem('Tendencia', '/analitica-predictiva/tendencia'),
    getItem('Análisis de Anomalías', '/analitica-predictiva/analisis-anomalias'),
    getItem('Proyección Estado', '/analitica-predictiva/proyeccion-estado'),
  ]),
  getItem('Equipo', 'sub4', <ToolOutlined />, [
    getItem('Lista', '/equipo/lista'),
    getItem('Registro', '/equipo/registro'),
  ]),
  getItem('Administración', 'sub5', <TeamOutlined />, [
    getItem('Administrador', '/administracion/administrador'),
    getItem('Supervisor', '/administracion/supervisor'),
    getItem('Técnico', '/administracion/tecnico'),
  ]),
  getItem('Cerrar Sesión', '/auth', <LoginOutlined />),
];

export const AdminLayout = () => {
  
  const [collapsed, setCollapsed] = useState(false);
  const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

  const navigate = useNavigate();
  const location = useLocation(); 

  const onMenuClick: MenuProps['onClick'] = (e) => {
    if (typeof e.key === 'string' && e.key.startsWith('/')) {
      navigate(e.key);
    }
  };

  const pathSnippets = location.pathname.split('/').filter(i => i);
  const breadcrumbItems = [
    { title: 'Inicio', href: '/' },
    ...pathSnippets.map((snippet, idx) => ({
      title: decodeURIComponent(snippet.replace(/-/g, ' ')),
      href: '/' + pathSnippets.slice(0, idx + 1).join('/'),
    }))
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['/']} 
          mode="inline" 
          items={items} 
          onClick={onMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb 
            style={{ margin: '16px 0' }} 
            items={breadcrumbItems}
          />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

