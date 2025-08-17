import { useState } from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const onFinish = (_: any) => {
    setLoading(true);
    // Aquí va la lógica de autenticación
    setTimeout(() => {
      setLoading(false);
      // Redirecciona al inicio
      navigate("/");
    }, 1000);
  };

  return (
    <div style={{ minWidth: 320, padding: 24, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Acceder</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Usuario"
          name="username"
          rules={[{ required: true, message: "Ingrese su usuario" }]}
        >
          <Input placeholder="Usuario" />
        </Form.Item>
        <Form.Item
          label="Contraseña"
          name="password"
          rules={[{ required: true, message: "Ingrese su contraseña" }]}
        >
          <Input.Password placeholder="Contraseña" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Acceder
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: "center", marginTop: 16 }}>
        ¿No tienes cuenta?{" "}
        <Link to="/auth/register">Regístrate aquí</Link>
      </div>
    </div>
    );
};