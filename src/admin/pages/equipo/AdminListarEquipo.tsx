import { useState } from "react";
import { Table, Card, Row, Col, Select, Input, Button, Tag, Space } from "antd";
import jsPDF from "jspdf";
import "jspdf-autotable";

const tiposEquipo = ["Sensor", "Motor", "Bomba", "PLC"];
const estados = ["Activo", "Inactivo", "Mantenimiento"];
const marcas = ["Siemens", "ABB", "Schneider", "Rockwell", "Emerson"];
const modelos = ["X100", "M200", "B300", "P400", "S500"];

const equiposData = Array.from({ length: 30 }, (_, i) => ({
  key: i + 1,
  nombre: `Equipo ${i + 1}`,
  tipo: tiposEquipo[i % tiposEquipo.length],
  marca: marcas[i % marcas.length],
  modelo: modelos[i % modelos.length],
  codigo: `EQ-${1000 + i}`,
  descripcion: `Descripción del equipo ${i + 1}`,
  estado: estados[i % estados.length],
  fechaAdquisicion: `2025-0${(i % 9) + 1}-15`,
  manufactura: `Fabricante ${i % 5 + 1}`,
  performance: `${80 + (i % 20)}%`,
}));

const tiposEquipoOptions = [...new Set(equiposData.map(e => e.tipo))];
const estadosOptions = [...new Set(equiposData.map(e => e.estado))];
const marcasOptions = [...new Set(equiposData.map(e => e.marca))];

const columns = [
  { title: "Nombre", dataIndex: "nombre", key: "nombre" },
  { title: "Tipo", dataIndex: "tipo", key: "tipo" },
  { title: "Marca", dataIndex: "marca", key: "marca" },
  { title: "Modelo", dataIndex: "modelo", key: "modelo" },
  { title: "Código", dataIndex: "codigo", key: "codigo" },
  { title: "Estado", dataIndex: "estado", key: "estado", render: (estado: string) => <Tag color={estado === "Activo" ? "green" : estado === "Mantenimiento" ? "orange" : "default"}>{estado}</Tag> },
  { title: "Fecha de adquisición", dataIndex: "fechaAdquisicion", key: "fechaAdquisicion" },
  { title: "Manufactura", dataIndex: "manufactura", key: "manufactura" },
  { title: "Performance", dataIndex: "performance", key: "performance" },
  { title: "Descripción", dataIndex: "descripcion", key: "descripcion" },
];

const AdminListarEquipo = () => {
  const [tipoFiltro, setTipoFiltro] = useState("");
  const [estadoFiltro, setEstadoFiltro] = useState("");
  const [marcaFiltro, setMarcaFiltro] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const datosFiltrados = equiposData.filter(e =>
    (tipoFiltro ? e.tipo === tipoFiltro : true) &&
    (estadoFiltro ? e.estado === estadoFiltro : true) &&
    (marcaFiltro ? e.marca === marcaFiltro : true) &&
    (busqueda ? e.nombre.toLowerCase().includes(busqueda.toLowerCase()) || e.codigo.toLowerCase().includes(busqueda.toLowerCase()) : true)
  );

  // Exportar a Excel
  const exportExcel = () => {
    console.log("Exportando a Excel...");
    
  };

  // Exportar a PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Listado de Equipos", 14, 16);
    const tableColumn = columns.map(col => col.title);
    const tableRows = datosFiltrados.map(e => [
      e.nombre,
      e.tipo,
      e.marca,
      e.modelo,
      e.codigo,
      e.estado,
      e.fechaAdquisicion,
      e.manufactura,
      e.performance,
      e.descripcion,
    ]);
    // @ts-ignore
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 22,
      styles: { fontSize: 8 }
    });
    doc.save("equipos.pdf");
  };

  return (
    <div style={{ width: "100%", padding: 0, margin: 0 }}>
      <h1 style={{ textAlign: "center", marginBottom: 24 }}>Listado de Equipos</h1>
      <Card
        style={{
          width: "100%",
          maxWidth: "100%",
          margin: 0,
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <Space style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={exportExcel}>Exportar a Excel</Button>
          <Button type="default" onClick={exportPDF}>Exportar a PDF</Button>
        </Space>
        <Row gutter={16} style={{ marginBottom: 16 }}>
          <Col span={6}>
            <Select
              allowClear
              placeholder="Filtrar por tipo"
              style={{ width: "100%" }}
              value={tipoFiltro || undefined}
              onChange={value => setTipoFiltro(value || "")}
            >
              {tiposEquipoOptions.map(tipo => (
                <Select.Option key={tipo} value={tipo}>{tipo}</Select.Option>
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
              {estadosOptions.map(estado => (
                <Select.Option key={estado} value={estado}>{estado}</Select.Option>
              ))}
            </Select>
          </Col>
          <Col span={6}>
            <Select
              allowClear
              placeholder="Filtrar por marca"
              style={{ width: "100%" }}
              value={marcaFiltro || undefined}
              onChange={value => setMarcaFiltro(value || "")}
            >
              {marcasOptions.map(marca => (
                <Select.Option key={marca} value={marca}>{marca}</Select.Option>
              ))}
            </Select>
          </Col>
          <Col span={6}>
            <Input
              placeholder="Buscar por nombre o código"
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
            />
          </Col>
        </Row>
        <Table
          dataSource={datosFiltrados}
          columns={columns}
          rowKey="key"
          pagination={{ pageSize: 10 }}
          style={{ width: "100%" }}
        />
      </Card>
    </div>
  );
};

export default AdminListarEquipo;
