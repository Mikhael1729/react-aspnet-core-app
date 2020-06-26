import react from "react";
import { Theme, createMuiTheme, useTheme, ThemeProvider } from "@material-ui/core/styles"
import { Modal } from "./modal";
import { DetalleSituacion } from "../../../models/detalles-situacion";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box, Typography, Divider, Avatar } from "@material-ui/core";
import React from "react";
import { pink, grey } from "@material-ui/core/colors";
import reportImage from "../../../images/report.png";

interface IReportProps {
  detalles: DetalleSituacion[];
}

function computeSumarization(detalles: DetalleSituacion[]) {
  let nuevosConfirmados = 0;
  let nuevosFallecidos = 0;
  let nuevosRecuperados = 0;
  let nuevosDescartados = 0;
  detalles.forEach(detalle => {
    nuevosConfirmados += detalle.nuevosConfirmados;
    nuevosFallecidos += detalle.nuevosFallecidos;
    nuevosRecuperados += detalle.nuevosRecuperados;
    nuevosDescartados += detalle.nuevosDescartados;
  });

  return ({
    nuevosConfirmados,
    nuevosFallecidos,
    nuevosRecuperados,
    nuevosDescartados,
  })
}

function renderForecastsTable(detalles: DetalleSituacion[]) {
  let key = 0;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Pais</TableCell>
            <TableCell>Usuario</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>NuevosConfirmados</TableCell>
            <TableCell>NuevosFallecidos</TableCell>
            <TableCell>NuevosRecuperados</TableCell>
            <TableCell>NuevosDescartados</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {detalles.map((detalle: DetalleSituacion) => {
            return (
              <TableRow key={key++}>
                <TableCell component="th" scope="row">{detalle.pais}</TableCell>
                <TableCell align="left">{detalle.usuario}</TableCell>
                <TableCell align="left">{detalle.fecha}</TableCell>
                <TableCell align="left">{detalle.nuevosConfirmados}</TableCell>
                <TableCell align="left">{detalle.nuevosFallecidos}</TableCell>
                <TableCell align="left">{detalle.nuevosRecuperados}</TableCell>
                <TableCell align="left">{detalle.nuevosDescartados}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function Report(props: IReportProps) {
  const { nuevosConfirmados, nuevosFallecidos, nuevosRecuperados, nuevosDescartados } = computeSumarization(props.detalles || []);
  return (
    <div>
       <Box
          display="flex"
          flexDirection="row"
          justifyItems="center">
          <Box alignSelf="center">
            <Box alignSelf="center">
              <Avatar src={reportImage} variant="square" />
            </Box>
          </Box>
          <Box p={2}>
            <Typography variant="h3">
              Reporte de Situación
            </Typography>
          </Box>
        </Box>
      <Box height={30} />

      <Box display="flex" justifyContent="space-around" alignItems="flex-start" alignContent="flex-start">
        <Box flexGrow={1}>
          <Typography variant="h6"><b>Confirmados: </b> {nuevosConfirmados}</Typography>
        </Box>
        <Box flexGrow={1}>
          <Typography variant="h6"><b>Fallecidos: </b> {nuevosFallecidos}</Typography>
        </Box>
        <Box flexGrow={1}>
          <Typography variant="h6"><b>Recuperados: </b> {nuevosRecuperados}</Typography>
        </Box>
        <Box flexGrow={1}>
          <Typography variant="h6"><b>Descartados: </b> {nuevosDescartados}</Typography>
        </Box>
      </Box>

      <br />

      <Divider />

      <Box height={30} />

      {renderForecastsTable(props.detalles)}
    </div>
  );
}