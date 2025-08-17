import { Card, Col, Row, Statistic } from "antd";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const sensoresData = [
  { id: 1, nombre: "Sensor A", estado: "Activo", alertas: 2 },
  { id: 2, nombre: "Sensor B", estado: "Inactivo", alertas: 1 },
  { id: 3, nombre: "Sensor C", estado: "Activo", alertas: 0 },
  { id: 4, nombre: "Sensor D", estado: "Activo", alertas: 3 },
  { id: 5, nombre: "Sensor E", estado: "Inactivo", alertas: 1 },
];

const pieData = [
  { name: "Activo", value: sensoresData.filter(s => s.estado === "Activo").length },
  { name: "Inactivo", value: sensoresData.filter(s => s.estado === "Inactivo").length },
];

const COLORS = ["#0088FE", "#FF8042"];

const AdminResumenEquipo = () => {
  return (
    <div>
      <h1>Resumen de Sensores</h1>
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={12}>
          <Card title="Estado General de Sensores">
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
        <Col span={12}>
          <Row gutter={[16, 16]}>
            {sensoresData.map(sensor => (
              <Col span={24} key={sensor.id}>
                <Card>
                  <Statistic
                    title={`Alertas - ${sensor.nombre}`}
                    value={sensor.alertas}
                    valueStyle={{ color: sensor.alertas > 0 ? "#cf1322" : "#3f8600" }}
                  />
                  <div>
                    Estado: <span style={{ color: sensor.estado === "Activo" ? "#3f8600" : "#cf1322" }}>{sensor.estado}</span>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default AdminResumenEquipo;
