import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
} from "recharts";

const data = [
  {
    name: "Jan",
    soled: 200,
    wallet: 35,
  },
  {
    name: "Feb",
    soled: 200,
    wallet: 53,
  },
  {
    name: "Mar",
    soled: 100,
    wallet: 35,
  },
  {
    name: "Apr",
    soled: 300,
    wallet: 45,
  },
  {
    name: "May",
    soled: 200,
    wallet: 35,
  },
  {
    name: "Jun",
    soled: 200,
    wallet: 34,
  },
  {
    name: "Jul",
    soled: 120,
    wallet: 78,
  },
  {
    name: "Aug",
    soled: 300,
    wallet: 35,
  },
  {
    name: "Sep",
    soled: 200,
    wallet: 63,
  },
  {
    name: "Oct",
    soled: 200,
    wallet: 35,
  },
  {
    name: "Nov",
    soled: 100,
    wallet: 52,
  },
  {
    name: "Dec",
    soled: 300,
    wallet: 35,
  },
];

function SoledInYear() {
  return (
    <>
      <div className="soled-in-year">
        <h3>Soled in year</h3>
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
              dataKey="soled"
              stroke="#000"
              fill="#7B66FF"
            />
            <Area
              type="monotone"
              dataKey="wallet"
              stroke="#000"
              fill="#6DB9EF"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default SoledInYear;
