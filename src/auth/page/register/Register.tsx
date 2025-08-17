import { Button, Form, Input, DatePicker } from "antd";
import { Link } from "react-router";

const Register = () => {
  const onFinish = (values: any) => {
    // Aquí va la lógica de registro
    console.log("Datos de registro:", values);
  };

  return (
    <div style={{ minWidth: 320, padding: 24, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Registro de Usuario</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Usuario"
          name="username"
          rules={[{ required: true, message: "Ingrese su usuario" }]}
        >
          <Input placeholder="Usuario" />
        </Form.Item>
        <Form.Item
          label="Correo electrónico"
          name="email"
          rules={[
            { required: true, message: "Ingrese su correo electrónico" },
            { type: "email", message: "Ingrese un correo válido" }
          ]}
        >
          <Input placeholder="Correo electrónico" />
        </Form.Item>
        <Form.Item
          label="Contraseña"
          name="password"
          rules={[{ required: true, message: "Ingrese su contraseña" }]}
        >
          <Input.Password placeholder="Contraseña" />
        </Form.Item>
        <Form.Item
          label="Fecha de nacimiento"
          name="birthdate"
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Registrarse
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <Link to="/auth/login">← Volver al inicio de sesión</Link>
      </div>
    </div>
  );
};

export default Register;

