import { Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart } from 'recharts';


const data = [
  {
    name: '1AM',
    views: 40020,
  },
  {
    name: '2AM',
    views: 4000,
  },
  {
    name: '3AM',
    views: 4000,
  },
  {
    name: '4AM',
    views: 4000,
  },
  {
    name: '5AM',
    views: 40620,
  },
  {
    name: '6AM',
    views: 80500,
  },
  {
    name: '7AM',
    views: 30090,
  },
  {
    name: '8AM',
    views: 10300,
  },
  {
    name: '9AM',
    views: 40600,
  },
  {
    name: '10AM',
    views: 90200,
  },
  {
    name: '11AM',
    views: 30100,
  },
  {
    name: '12AM',
    views: 12080,
  },
  {
    name: '13PM',
    views: 52000,
  },
  {
    name: '14PM',
    views: 4000,
  },
  {
    name: '15PM',
    views: 40070,
  },
  {
    name: '16PM',
    views: 31000,
  },
  {
    name: '17PM',
    views: 40200,
  },
  {
    name: '18PM',
    views: 40080,
  },
  {
    name: '19PM',
    views: 44000,
  },
  {
    name: '20PM',
    views: 40050,
  },
  {
    name: '21PM',
    views: 30320,
  },
  {
    name: '22PM',
    views: 10010,
  },
  {
    name: '23PM',
    views: 42000,
  },
  {
    name: '24AM',
    views: 8500,
  },
];

function ViewToDay() {
  return (
    <>
      <div className="viwe-to-day">
      <h3>Viwes to day</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 15,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="views"
              stroke="#000"
              fill="#F4F27E"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default ViewToDay;
