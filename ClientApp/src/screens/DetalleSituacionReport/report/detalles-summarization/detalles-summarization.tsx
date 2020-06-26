import React from "react";
import { DetalleSituacion } from "../../../../models/detalles-situacion";
import { Box, Typography } from "@material-ui/core";

interface IDetallesSummarizationProps {
  detalles?: DetalleSituacion[];
}

function computeSumarization(detalles?: DetalleSituacion[]) {
  let totalConfirmados = 0;
  let totalFallecidos = 0;
  let totalRecuperados = 0;
  let totalDescartados = 0;

  if(detalles)
    detalles.forEach(detalle => {
      totalConfirmados += detalle.nuevosConfirmados;
      totalFallecidos += detalle.nuevosFallecidos;
      totalRecuperados += detalle.nuevosRecuperados;
      totalDescartados += detalle.nuevosDescartados;
    });

  return ({
    totalConfirmados,
    totalFallecidos,
    totalRecuperados,
    totalDescartados,
  })
}

export function DetallesSummarization(props: IDetallesSummarizationProps) {
  const { totalConfirmados, totalFallecidos, totalRecuperados, totalDescartados } = computeSumarization(props.detalles);
  
  return (
    <Box display="flex" justifyContent="space-around" alignItems="flex-start" alignContent="flex-start">
      <Box flexGrow={1}>
        <Typography variant="h6"><b>Confirmados: </b> {totalConfirmados}</Typography>
      </Box>
      <Box flexGrow={1}>
        <Typography variant="h6"><b>Fallecidos: </b> {totalFallecidos}</Typography>
      </Box>
      <Box flexGrow={1}>
        <Typography variant="h6"><b>Recuperados: </b> {totalRecuperados}</Typography>
      </Box>
      <Box flexGrow={1}>
        <Typography variant="h6"><b>Descartados: </b> {totalDescartados}</Typography>
      </Box>
    </Box>
  );
} 