import { useState } from "react";
import { Form, Input, Button, Select, DatePicker, Card, message, Row, Col } from "antd";

const tiposEquipo = [
  { value: "Sensor", label: "Sensor" },
  { value: "Motor", label: "Motor" },
  { value: "Bomba", label: "Bomba" },
  { value: "PLC", label: "PLC" },
];

const estados = [
  { value: "Activo", label: "Activo" },
  { value: "Inactivo", label: "Inactivo" },
  { value: "Mantenimiento", label: "Mantenimiento" },
];

const AdminRegistroEquipo = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (_: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Equipo registrado correctamente");
      // Aquí puedes limpiar el formulario o redirigir
    }, 1000);
  };

  return (
    <Card title="Registro de Equipo" style={{ maxWidth: 900, margin: "0 auto" }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="Nombre de equipo"
              name="nombre"
              rules={[{ required: true, message: "Ingrese el nombre del equipo" }]}
            >
              <Input placeholder="Nombre de equipo" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Tipo de equipo"
              name="tipo"
              rules={[{ required: true, message: "Seleccione el tipo de equipo" }]}
            >
              <Select placeholder="Seleccione el tipo de equipo">
                {tiposEquipo.map(tipo => (
                  <Select.Option key={tipo.value} value={tipo.value}>{tipo.label}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Marca"
              name="marca"
              rules={[{ required: true, message: "Ingrese la marca" }]}
            >
              <Input placeholder="Marca" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="Modelo"
              name="modelo"
              rules={[{ required: true, message: "Ingrese el modelo" }]}
            >
              <Input placeholder="Modelo" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Código del equipo"
              name="codigo"
              rules={[{ required: true, message: "Ingrese el código del equipo" }]}
            >
              <Input placeholder="Código del equipo" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Estado"
              name="estado"
              rules={[{ required: true, message: "Seleccione el estado" }]}
            >
              <Select placeholder="Seleccione el estado">
                {estados.map(est => (
                  <Select.Option key={est.value} value={est.value}>{est.label}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="Fecha de adquisición"
              name="fechaAdquisicion"
              rules={[{ required: true, message: "Seleccione la fecha de adquisición" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Manufactura"
              name="manufactura"
            >
              <Input placeholder="Manufactura" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Performance"
              name="performance"
            >
              <Input placeholder="Performance" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label="Descripción"
              name="descripcion"
            >
              <Input.TextArea rows={3} placeholder="Descripción del equipo" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Registrar Equipo
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
} 
export default AdminRegistroEquipo;