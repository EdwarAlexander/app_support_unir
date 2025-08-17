import { useState } from "react";
import { Card, Table, Row, Col, Input, Select, Tag } from "antd";

const alertasData = [
  { id: 1, sensor: "Sensor A", tipo: "Temperatura", nivel: "Alto", mensaje: "Temperatura fuera de rango", fecha: "2025-08-17", estado: "Activa" },
  { id: 2, sensor: "Sensor B", tipo: "Presión", nivel: "Medio", mensaje: "Presión baja detectada", fecha: "2025-08-16", estado: "Resuelta" },
  { id: 3, sensor: "Sensor C", tipo: "Humedad", nivel: "Bajo", mensaje: "Humedad baja", fecha: "2025-08-15", estado: "Activa" },
  { id: 4, sensor: "Sensor D", tipo: "Temperatura", nivel: "Alto", mensaje: "Sobrecalentamiento", fecha: "2025-08-14", estado: "Resuelta" },
  { id: 5, sensor: "Sensor E", tipo: "Presión", nivel: "Medio", mensaje: "Presión inestable", fecha: "2025-08-13", estado: "Activa" },
];

const tipos = [...new Set(alertasData.map(a => a.tipo))];
const niveles = [...new Set(alertasData.map(a => a.nivel))];
const estados = [...new Set(alertasData.map(a => a.estado))];

const columns = [
  { title: "Sensor", dataIndex: "sensor", key: "sensor" },
  { title: "Tipo", dataIndex: "tipo", key: "tipo" },
  { title: "Nivel", dataIndex: "nivel", key: "nivel", render: (nivel: string) => {
      let color = nivel === "Alto" ? "red" : nivel === "Medio" ? "orange" : "blue";
      return <Tag color={color}>{nivel}</Tag>;
    }
  },
  { title: "Mensaje", dataIndex: "mensaje", key: "mensaje" },
  { title: "Fecha", dataIndex: "fecha", key: "fecha" },
  { title: "Estado", dataIndex: "estado", key: "estado", render: (estado: string) => {
      return <Tag color={estado === "Activa" ? "green" : "default"}>{estado}</Tag>;
    }
  },
];

const AdminIndicadoresAlerta = () => {
  const [busqueda, setBusqueda] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("");
  const [nivelFiltro, setNivelFiltro] = useState("");
  const [estadoFiltro, setEstadoFiltro] = useState("");

  const datosFiltrados = alertasData.filter(a =>
    a.sensor.toLowerCase().includes(busqueda.toLowerCase()) &&
    (tipoFiltro ? a.tipo === tipoFiltro : true) &&
    (nivelFiltro ? a.nivel === nivelFiltro : true) &&
    (estadoFiltro ? a.estado === estadoFiltro : true)
  );

  return (
    <div>
      <h1>Indicadores de Alertas de Sensores</h1>
      <Card>
        <Row gutter={16} style={{ marginBottom: 16 }}>
          <Col span={6}>
            <Input
              placeholder="Buscar por sensor"
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
            />
          </Col>
          <Col span={6}>
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
          <Col span={6}>
            <Select
              allowClear
              placeholder="Filtrar por nivel"
              style={{ width: "100%" }}
              value={nivelFiltro || undefined}
              onChange={value => setNivelFiltro(value || "")}
            >
              {niveles.map(nivel => (
                <Select.Option key={nivel} value={nivel}>{nivel}</Select.Option>
              ))}
            </Select>
          </Col>
          <Col span={6}>
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

export default AdminIndicadoresAlerta;
