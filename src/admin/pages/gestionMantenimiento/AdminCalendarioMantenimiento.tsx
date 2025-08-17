import { useState } from "react";
import { Card, Descriptions, Calendar, Badge } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

// Datos simulados de historial de mantenimiento (varios días con más de 3 mantenimientos)
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
  },
  // Día con más de 3 mantenimientos
  {
    id: 4,
    equipo: "Equipo 3",
    tipoMantenimiento: "Preventivo",
    responsable: "Luis Torres",
    descripcion: "Revisión de sensores",
    sensores: ["Sensor F"],
    fecha: "2025-08-20",
    estado: "Pendiente"
  },
  {
    id: 5,
    equipo: "Equipo 2",
    tipoMantenimiento: "Correctivo",
    responsable: "Ana Gómez",
    descripcion: "Cambio de batería",
    sensores: ["Sensor G"],
    fecha: "2025-08-20",
    estado: "Completado"
  },
  {
    id: 6,
    equipo: "Equipo 1",
    tipoMantenimiento: "Preventivo",
    responsable: "Juan Pérez",
    descripcion: "Ajuste de calibración",
    sensores: ["Sensor H"],
    fecha: "2025-08-20",
    estado: "Completado"
  },
  {
    id: 7,
    equipo: "Equipo 3",
    tipoMantenimiento: "Predictivo",
    responsable: "Carlos Ruiz",
    descripcion: "Análisis de tendencia",
    sensores: ["Sensor I"],
    fecha: "2025-08-20",
    estado: "Pendiente"
  },
  // Otro día con más de 3 mantenimientos
  {
    id: 8,
    equipo: "Equipo 2",
    tipoMantenimiento: "Preventivo",
    responsable: "Ana Gómez",
    descripcion: "Verificación de presión",
    sensores: ["Sensor J"],
    fecha: "2025-08-25",
    estado: "Completado"
  },
  {
    id: 9,
    equipo: "Equipo 1",
    tipoMantenimiento: "Correctivo",
    responsable: "Juan Pérez",
    descripcion: "Reemplazo de cable",
    sensores: ["Sensor K"],
    fecha: "2025-08-25",
    estado: "Pendiente"
  },
  {
    id: 10,
    equipo: "Equipo 3",
    tipoMantenimiento: "Preventivo",
    responsable: "Luis Torres",
    descripcion: "Limpieza de componentes",
    sensores: ["Sensor L"],
    fecha: "2025-08-25",
    estado: "Completado"
  },
  {
    id: 11,
    equipo: "Equipo 2",
    tipoMantenimiento: "Predictivo",
    responsable: "Carlos Ruiz",
    descripcion: "Monitoreo avanzado",
    sensores: ["Sensor M"],
    fecha: "2025-08-25",
    estado: "Pendiente"
  }
];

const AdminCalendarioMantenimiento = () => {
  const [selected, setSelected] = useState<any>(null);

  // Render para celdas de día
  const cellRender = (current: Dayjs, info: { type: string }) => {
    if (info.type !== "date") return null;
    const fecha = current.format("YYYY-MM-DD");
    const mantenimientos = historialData.filter(h => h.fecha === fecha);
    if (mantenimientos.length === 0) return null;
    return (
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {mantenimientos.slice(0, 3).map(item => (
          <li key={item.id}>
            <a
              style={{ color: "#1890ff", cursor: "pointer" }}
              onClick={() => setSelected(item)}
            >
              {item.equipo} - {item.tipoMantenimiento}
            </a>
          </li>
        ))}
        {mantenimientos.length > 3 && (
          <li>
            <Badge count={mantenimientos.length} style={{ backgroundColor: "#52c41a" }} />
            <span style={{ marginLeft: 8, color: "#888" }}>Más de 3 mantenimientos</span>
          </li>
        )}
      </ul>
    );
  };

  return (
    <div>
      <h1>Calendario de Mantenimiento Preventivo</h1>
      <Card>
        <Calendar
          cellRender={cellRender}
          fullscreen={false}
          onSelect={date => {
            const fecha = date.format("YYYY-MM-DD");
            const mantenimientos = historialData.filter(h => h.fecha === fecha);
            if (mantenimientos.length === 1) setSelected(mantenimientos[0]);
            else setSelected(null);
          }}
        />
      </Card>
      {selected && (
        <Card title="Detalle del Mantenimiento" style={{ marginTop: 24 }}>
          <Descriptions column={1}>
            <Descriptions.Item label="Equipo">{selected.equipo}</Descriptions.Item>
            <Descriptions.Item label="Tipo de mantenimiento">{selected.tipoMantenimiento}</Descriptions.Item>
            <Descriptions.Item label="Responsable">{selected.responsable}</Descriptions.Item>
            <Descriptions.Item label="Descripción">{selected.descripcion}</Descriptions.Item>
            <Descriptions.Item label="Sensores">{selected.sensores.join(", ")}</Descriptions.Item>
            <Descriptions.Item label="Fecha">{selected.fecha}</Descriptions.Item>
            <Descriptions.Item label="Estado">{selected.estado}</Descriptions.Item>
          </Descriptions>
        </Card>
      )}
    </div>
  );
};

export default AdminCalendarioMantenimiento;