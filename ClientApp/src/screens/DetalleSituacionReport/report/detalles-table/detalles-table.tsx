import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper
} from "@material-ui/core";
import { DetalleSituacion } from "../../../../models/detalles-situacion";

interface IDetallesTableProps {
  detalles?: DetalleSituacion[];
}

export function DetallesTable({ detalles }: IDetallesTableProps) {
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
          {!detalles
            ? <>Cargando...</>
            : detalles.map((detalle: DetalleSituacion) => {
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