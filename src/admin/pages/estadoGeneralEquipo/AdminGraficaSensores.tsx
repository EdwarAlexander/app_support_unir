import { useState } from "react";
import { Card, Col, Row, Input, Table, Select } from "antd";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const sensoresData = [
  { id: 1, nombre: "Sensor A", tipo: "Temperatura", valor: 23, estado: "Activo" },
  { id: 2, nombre: "Sensor B", tipo: "Presión", valor: 15, estado: "Inactivo" },
  { id: 3, nombre: "Sensor C", tipo: "Humedad", valor: 45, estado: "Activo" },
  { id: 4, nombre: "Sensor D", tipo: "Temperatura", valor: 28, estado: "Activo" },
  { id: 5, nombre: "Sensor E", tipo: "Presión", valor: 10, estado: "Inactivo" },
];

const barData = [
  { name: "Sensor A", valor: 23 },
  { name: "Sensor B", valor: 15 },
  { name: "Sensor C", valor: 45 },
  { name: "Sensor D", valor: 28 },
  { name: "Sensor E", valor: 10 },
];

const pieData = [
  { name: "Activo", value: sensoresData.filter(s => s.estado === "Activo").length },
  { name: "Inactivo", value: sensoresData.filter(s => s.estado === "Inactivo").length },
];

const COLORS = ["#0088FE", "#FF8042"];

const columns = [
  { title: "Nombre", dataIndex: "nombre", key: "nombre" },
  { title: "Tipo", dataIndex: "tipo", key: "tipo" },
  { title: "Valor", dataIndex: "valor", key: "valor" },
  { title: "Estado", dataIndex: "estado", key: "estado" },
];

const tipos = [...new Set(sensoresData.map(s => s.tipo))];

const estados = [...new Set(sensoresData.map(s => s.estado))];

const AdminGraficaSensores = () => {
  const [busqueda, setBusqueda] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("");
  const [estadoFiltro, setEstadoFiltro] = useState("");

  const datosFiltrados = sensoresData.filter(s =>
    s.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (tipoFiltro ? s.tipo === tipoFiltro : true) &&
    (estadoFiltro ? s.estado === estadoFiltro : true)
  );

  return (
    <div>
      <h1>Gráfica de Sensores</h1>
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={12}>
          <Card title="Valores de Sensores (Barra)">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="valor" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Estado de Sensores (Circular)">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
      <Card title="Listado de Sensores con Filtros">
        <Row gutter={16} style={{ marginBottom: 16 }}>
          <Col span={8}>
            <Input
              placeholder="Buscar por nombre"
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
            />
          </Col>
          <Col span={8}>
            <Select
              allowClear
              placeholder="Filtrar por tipo"
              style={{ width: "100%" }}
              value={tipoFiltro || undefined}
              onChange={value => setTipoFiltro(value || "")}
            >
              {tipos.map(tipo => (
                <Select.Option key={tipo} value={tipo}>{tipo}</Select.Option>
              ))}
            </Select>
          </Col>
          <Col span={8}>
            <Select
              allowClear
              placeholder="Filtrar por estado"
              style={{ width: "100%" }}
              value={estadoFiltro || undefined}
              onChange={value => setEstadoFiltro(value || "")}
            >
              {estados.map(estado => (
                <Select.Option key={estado} value={estado}>{estado}</Select.Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Table
          dataSource={datosFiltrados}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </div>
  );
};

export default AdminGraficaSensores;