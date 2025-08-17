import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a237e 60%, #283593 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Outlet />
    </div>
  )
}


export default AuthLayout;