import { useState } from "react";
import { Card, Form, Input, Button, message } from "antd"; 

const AdminTecnico = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (_: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Usuario administrador registrado correctamente");
      // Aquí puedes limpiar el formulario o redirigir
    }, 1000);
  };

  return (
    <Card title="Registro de Usuario Administrador" style={{ maxWidth: 500, margin: "0 auto" }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Usuario"
          name="usuario"
          rules={[{ required: true, message: "Ingrese el usuario" }]}
        >
          <Input placeholder="Usuario" />
        </Form.Item>
        <Form.Item
          label="Correo"
          name="correo"
          rules={[
            { required: true, message: "Ingrese el correo" },
            { type: "email", message: "Ingrese un correo válido" }
          ]}
        >
          <Input placeholder="Correo electrónico" />
        </Form.Item>
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[{ required: true, message: "Ingrese el nombre" }]}
        >
          <Input placeholder="Nombre" />
        </Form.Item>
        <Form.Item
          label="Apellido"
          name="apellido"
          rules={[{ required: true, message: "Ingrese el apellido" }]}
        >
          <Input placeholder="Apellido" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Registrar Tecnico
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default AdminTecnico
