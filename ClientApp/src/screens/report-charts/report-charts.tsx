import React from "react";
import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import { Typography } from "@material-ui/core"

const data01 = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];

export function ReportCharts() {
  return (
    <>
      <Typography variant="h2">Gráficos</Typography>

      <PieChart width={400} height={400} style={{ margin: 0, padding: 0 }}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx={200}
          cy={200}
          fill="#8884d8"
          label
        />
        <Pie
          dataKey="value"
          data={data02}
          cx={500}
          cy={200}
          innerRadius={40}
          outerRadius={80}
          fill="#82ca9d"
        />
        <Tooltip />
      </PieChart>
    </>
  );
}
