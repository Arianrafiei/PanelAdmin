import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    media: 590,
    adds: 800,
    seo: 1400,
    google: 490,
  },
  {
    name: "Tuesday",
    media: 868,
    adds: 967,
    seo: 1506,
    google: 590,
  },
  {
    name: "Wednesday",
    media: 1397,
    adds: 1098,
    seo: 989,
    google: 350,
  },
  {
    name: "Thursday",
    media: 1480,
    adds: 1200,
    seo: 1228,
    google: 480,
  },
  {
    name: "Friday",
    media: 1520,
    adds: 1108,
    seo: 1100,
    google: 460,
  },
  {
    name: "Saturday",
    media: 1400,
    adds: 680,
    seo: 1700,
    google: 380,
  },
  {
    name: "Sunday",
    media: 1480,
    adds: 1200,
    seo: 1228,
    google: 480,
  },
];

function EntryFrom() {
  return (
    <>
      <div className="entry-from">
        <h3>Entry in a week</h3>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 15,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="media"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="adds" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="seo" stroke="#ff7300" />
            <Scatter dataKey="google" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default EntryFrom;
