import { useState } from "react";
import { Form, Input, Button, Select, DatePicker, Card, message } from "antd";

const sensoresAsignados = [
  { id: 1, nombre: "Sensor A" },
  { id: 2, nombre: "Sensor B" },
  { id: 3, nombre: "Sensor C" },
  { id: 4, nombre: "Sensor D" },
  { id: 5, nombre: "Sensor E" },
];

const equipos = [
  { id: 1, nombre: "Equipo 1" },
  { id: 2, nombre: "Equipo 2" },
  { id: 3, nombre: "Equipo 3" },
];

const tiposMantenimiento = [
  { value: "Preventivo", label: "Preventivo" },
  { value: "Correctivo", label: "Correctivo" },
  { value: "Predictivo", label: "Predictivo" },
];

const responsables = [
  { value: "Juan Pérez", label: "Juan Pérez" },
  { value: "Ana Gómez", label: "Ana Gómez" },
  { value: "Carlos Ruiz", label: "Carlos Ruiz" },
];

const AdminRegistroMantenimiento = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    // Simula registro
    setTimeout(() => {
      setLoading(false);
      message.success("Incidencia registrada correctamente");
      // Aquí puedes limpiar el formulario o redirigir
    }, 1000);
  };

  return (
    <Card title="Registro de Incidencia de Mantenimiento Preventivo" style={{ maxWidth: 600, margin: "0 auto" }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Equipo"
          name="equipo"
          rules={[{ required: true, message: "Seleccione el equipo" }]}
        >
          <Select placeholder="Seleccione el equipo">
            {equipos.map(eq => (
              <Select.Option key={eq.id} value={eq.nombre}>{eq.nombre}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Tipo de mantenimiento"
          name="tipoMantenimiento"
          rules={[{ required: true, message: "Seleccione el tipo de mantenimiento" }]}
        >
          <Select placeholder="Seleccione el tipo de mantenimiento">
            {tiposMantenimiento.map(tipo => (
              <Select.Option key={tipo.value} value={tipo.value}>{tipo.label}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Responsable"
          name="responsable"
          rules={[{ required: true, message: "Seleccione el responsable" }]}
        >
          <Select placeholder="Seleccione el responsable">
            {responsables.map(resp => (
              <Select.Option key={resp.value} value={resp.value}>{resp.label}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Descripción de la incidencia"
          name="descripcion"
          rules={[{ required: true, message: "Ingrese la descripción" }]}
        >
          <Input.TextArea rows={3} placeholder="Describa la incidencia detectada..." />
        </Form.Item>
        <Form.Item
          label="Sensores asignados"
          name="sensores"
          rules={[{ required: true, message: "Seleccione al menos un sensor" }]}
        >
          <Select
            mode="multiple"
            placeholder="Seleccione los sensores relacionados"
          >
            {sensoresAsignados.map(sensor => (
              <Select.Option key={sensor.id} value={sensor.nombre}>{sensor.nombre}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Fecha programada para mantenimiento"
          name="fecha"
          rules={[{ required: true, message: "Seleccione la fecha" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Registrar Incidencia
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default AdminRegistroMantenimiento;