import { useState } from "react";
import { Card, Table, Row, Col, Select, Tag, Button, Space } from "antd";

// Datos simulados de historial de mantenimiento
const historialData = [
  {
    id: 1,
    equipo: "Equipo 1",
    tipoMantenimiento: "Preventivo",
    responsable: "Juan Pérez",
    descripcion: "Cambio de filtro",
    sensores: ["Sensor A", "Sensor B"],
    fecha: "2025-08-10",
    estado: "Completado"
  },
  {
    id: 2,
    equipo: "Equipo 2",
    tipoMantenimiento: "Correctivo",
    responsable: "Ana Gómez",
    descripcion: "Reparación de cableado",
    sensores: ["Sensor C"],
    fecha: "2025-08-12",
    estado: "Pendiente"
  },
  {
    id: 3,
    equipo: "Equipo 1",
    tipoMantenimiento: "Preventivo",
    responsable: "Carlos Ruiz",
    descripcion: "Inspección general",
    sensores: ["Sensor D", "Sensor E"],
    fecha: "2025-08-15",
    estado: "Completado"
  }
];

const equipos = [...new Set(historialData.map(h => h.equipo))];
const tiposMantenimiento = [...new Set(historialData.map(h => h.tipoMantenimiento))];
const responsables = [...new Set(historialData.map(h => h.responsable))];
const estados = [...new Set(historialData.map(h => h.estado))];

const columns = [
  { title: "Equipo", dataIndex: "equipo", key: "equipo" },
  { title: "Tipo de mantenimiento", dataIndex: "tipoMantenimiento", key: "tipoMantenimiento" },
  { title: "Responsable", dataIndex: "responsable", key: "responsable" },
  { title: "Descripción", dataIndex: "descripcion", key: "descripcion" },
  { title: "Sensores", dataIndex: "sensores", key: "sensores", render: (sensores: string[]) => (
      <>
        {sensores.map(s => <Tag key={s}>{s}</Tag>)}
      </>
    )
  },
  { title: "Fecha", dataIndex: "fecha", key: "fecha" },
  { title: "Estado", dataIndex: "estado", key: "estado", render: (estado: string) => (
      <Tag color={estado === "Completado" ? "green" : "orange"}>{estado}</Tag>
    )
  }
];

const AdminHistoriaMantenimiento = () => {
  const [equipoFiltro, setEquipoFiltro] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("");
  const [responsableFiltro, setResponsableFiltro] = useState("");
  const [estadoFiltro, setEstadoFiltro] = useState("");

  const datosFiltrados = historialData.filter(h =>
    (equipoFiltro ? h.equipo === equipoFiltro : true) &&
    (tipoFiltro ? h.tipoMantenimiento === tipoFiltro : true) &&
    (responsableFiltro ? h.responsable === responsableFiltro : true) &&
    (estadoFiltro ? h.estado === estadoFiltro : true)
  );

  // Exportar a Excel
  const exportExcel = () => {
    console.log("Exportando a Excel...");
  };

  // Exportar a PDF
  const exportPDF = () => {
    console.log("Exportando a PDF...");
  };

  return (
    <div>
      <h1>Historial de Mantenimiento Preventivo</h1>
      <Card>
        <Space style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={exportExcel}>Exportar a Excel</Button>
          <Button type="default" onClick={exportPDF}>Exportar a PDF</Button>
        </Space>
        <Row gutter={16} style={{ marginBottom: 16 }}>
          <Col span={6}>
            <Select
              allowClear
              placeholder="Filtrar por equipo"
              style={{ width: "100%" }}
              value={equipoFiltro || undefined}
              onChange={value => setEquipoFiltro(value || "")}
            >
              {equipos.map(eq => (
                <Select.Option key={eq} value={eq}>{eq}</Select.Option>
              ))}
            </Select>
          </Col>
          <Col span={6}>
            <Select
              allowClear
              placeholder="Filtrar por tipo"
              style={{ width: "100%" }}
              value={tipoFiltro || undefined}
              onChange={value => setTipoFiltro(value || "")}
            >
              {tiposMantenimiento.map(tipo => (
                <Select.Option key={tipo} value={tipo}>{tipo}</Select.Option>
              ))}
            </Select>
          </Col>
          <Col span={6}>
            <Select
              allowClear
              placeholder="Filtrar por responsable"
              style={{ width: "100%" }}
              value={responsableFiltro || undefined}
              onChange={value => setResponsableFiltro(value || "")}
            >
              {responsables.map(resp => (
                <Select.Option key={resp} value={resp}>{resp}</Select.Option>
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
              {estados.map(est => (
                <Select.Option key={est} value={est}>{est}</Select.Option>
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

export default AdminHistoriaMantenimiento;