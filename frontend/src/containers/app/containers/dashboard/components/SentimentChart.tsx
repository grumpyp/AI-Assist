import * as React from 'react';
import { Scatter, ScatterChart, ZAxis, XAxis, YAxis, Legend, Tooltip, CartesianGrid } from 'recharts';


const data01 = [
  {
    "x": "January",
    "y": 0.5,
    "z": 1200
  },
  {
    "x": "February",
    "y": 0.55,
    "z": 260
  },
  {
    "x": "March",
    "y": 0.2,
    "z": 1400
  },
      {
    "x": "April",
    "y": 0.22,
    "z": 1400
  },
      {
    "x": "May",
    "y": 0.3,
    "z": 1400
  },
      {
    "x": "June",
    "y": 0.5,
    "z": 800
  },
      {
    "x": "July",
    "y": 0.6,
    "z": 700
  },
      {
    "x": "August",
    "y": 0.5,
    "z": 200
  },

  {
    "x": "September",
    "y": 0.6,
    "z": 1080
  },
  {
    "x": "October",
    "y": 0.7,
    "z": 1988
  },
  {
    "x": "November",
    "y": 0.8,
    "z": 1238
  },
    {
    "x": "December",
    "y": 0.72,
    "z": 2055
  }
];

const PieChartExample: React.FC = () => {
  return (
<ScatterChart width={1200} height={250}
  margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="x" name="Month" />
  <YAxis dataKey="y" name="Sentiment Score" label={{ value: "Sentiment Score", angle: -90, position: 'insideLeft'}}/>
  <ZAxis dataKey="z" range={[64, 144]} name="Calls"/>
  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
  <Legend />
  <Scatter name="Calldata" data={data01} fill="#8884d8" />
</ScatterChart>
  );
};

export default PieChartExample;
