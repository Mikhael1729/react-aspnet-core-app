import React, { Component } from 'react';
import { DetalleSituacion } from "../../models/detalles-situacion";
import {
  TableContainer,
  Avatar,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Box,
  Divider
} from "@material-ui/core";
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';
import { lightBlue, pink } from "@material-ui/core/colors"

interface IForecastState {
  detalles: DetalleSituacion[];
  loading: boolean;
}

export class FetchData extends Component<any, IForecastState> {
  static displayName = FetchData.name;

  constructor(props: any) {
    super(props);
    this.state = { detalles: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  private computeSumarization(detalles: DetalleSituacion[]) {
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

  static renderForecastsTable(detalles: DetalleSituacion[]) {
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

  render() {
    const { nuevosConfirmados, nuevosFallecidos, nuevosRecuperados, nuevosDescartados } = this.computeSumarization(this.state.detalles || []);

    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.detalles);

    return (
      <div>
        <Box
          display="flex"
          flexDirection="row"
          justifyItems="center">
          <Box alignSelf="center">
            <Box 
              bgcolor="#000000" 
              borderColor={pink[300]} 
              border={2} 
              borderRadius="50%"
              width={50}
              display="flex"
              alignItems="center"
              justifyContent="center"
              alignContent="center"
              height={50}>
              <Box alignSelf="center">
                <EqualizerRoundedIcon width={40} height={40} color="secondary" />
              </Box>
            </Box>
          </Box>
          <Box p={2}>
            <Typography variant="h3">
              Detalle de Situación
            </Typography>
          </Box>
        </Box>

        <br />

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

        <br />

        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('covid/detalles-situacion');
    const data = await response.json();
    this.setState({ detalles: data, loading: false });
  }
}
