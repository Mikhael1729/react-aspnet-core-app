import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import { Typography } from "@material-ui/core"
import { SituacionActual as SituacionActualModel } from "../../models/situacion-actual";

export function SituacionActual() {
  const [state, setState] = useState({ situaciones: [] as SituacionActualModel[], loading: true });

  async function populateWeatherData() {
    const response = await fetch('covid/situacion-actual');
    const data = await response.json() as SituacionActualModel[];

    setState({
      loading: false,
      situaciones: data
    });
  }

  function renderChart() {
    const { confirmados, descartados, fallecidos, recuperados }: SituacionActualModel = state.situaciones[0];

    const data = [
      { name: "Confirmados", value: confirmados },
      { name: "Descartados", value: descartados },
      { name: "Fallecidos", value: fallecidos },
      { name: "Recuperados", value: recuperados },
    ];

    return (
      <PieChart width={400} height={400} style={{ margin: 0, padding: 0 }}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          fill="#8884d8"
          label={true}

        />
        <Tooltip />
      </PieChart>
    );
  }

  useEffect(() => {
    populateWeatherData();
  }, [])

  return (
    <>
      <Typography variant="h2">Situacion Actual</Typography>

      {state.loading
        ? <p><em>Loading...</em></p>
        : renderChart()}
    </>
  );
}
