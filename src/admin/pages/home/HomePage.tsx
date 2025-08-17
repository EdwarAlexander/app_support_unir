
import { Card, Col, Row, Statistic } from 'antd';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const mantenimientoData = [
  { name: 'Realizados', value: 12 },
  { name: 'Pendientes', value: 5 },
];

const alertasData = [
  { name: 'Sensor A', alertas: 3 },
  { name: 'Sensor B', alertas: 7 },
  { name: 'Sensor C', alertas: 2 },
];

const COLORS = ['#0088FE', '#FFBB28'];

const HomePage = () => {
  return (
    <div>
      <h1>Panel Principal</h1>
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={8}>
          <Card>
            <Statistic title="Mantenimientos Preventivos Realizados" value={12} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Mantenimientos Pendientes" value={5} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Alertas de Sensores" value={12} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Mantenimientos Preventivos">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={mantenimientoData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {mantenimientoData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Alertas por Sensor">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={alertasData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="alertas" fill="#FF8042" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;

