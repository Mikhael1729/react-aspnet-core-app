import React, { Component } from 'react';
import { DetalleSituacion } from "../../models/detalles-situacion";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Button,
  Box,
  Divider,
  Avatar,
} from "@material-ui/core";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Pdf from "react-to-pdf";
import { Modal } from './report/modal';
import { Report } from "./report/report";
import reportImage from "../../images/report.png";

interface IForecastState {
  detalles: DetalleSituacion[];
  loading: boolean;
  modalIsOpen: boolean;
}

export class FetchData extends Component<any, IForecastState> {
  static displayName = FetchData.name;
  ref: any = React.createRef() as any;

  constructor(props: any) {
    super(props);
    this.state = { detalles: [], loading: true, modalIsOpen: false };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  private handleOpen = () => {
    this.setState({ modalIsOpen: true });
  }

  private handleClose = () => {
    this.setState({ modalIsOpen: false });
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
    const theme = createMuiTheme({
      palette: {
        background: {
          default: "#ffffff",
          paper: "#ffffff"
        },
      }
    });

    const { nuevosConfirmados, nuevosFallecidos, nuevosRecuperados, nuevosDescartados } = this.computeSumarization(this.state.detalles || []);
    const options = {
        orientation: 'landscape',
    };
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.detalles);

    return (
      <div ref={this.ref}>
        <Box
          display="flex"
          flexDirection="row"
          justifyItems="center">
          <Box alignSelf="center">
            <Box alignSelf="center">
              <Avatar src={reportImage} variant="square" />
            </Box>
          </Box>
          <Box p={2} flexGrow={1}>
            <Typography variant="h3">
              Reporte de Situación
            </Typography>
          </Box>
          <Box alignSelf="center">
            <Button
              variant="outlined"
              color="default"
              onClick={this.handleOpen}
              startIcon={<PictureAsPdfIcon />}
            >
              Convertir a PDF
            </Button>
          </Box>
        </Box>

        <Box m={7} />

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

        <ThemeProvider theme={theme}>
          <Modal
            open={this.state.modalIsOpen}
            handleClose={this.handleClose}
            title="Guardar reporte"
            actionButtonText="Exportar a PDF"
          >
            <Report detalles={this.state.detalles} />
          </Modal>
        </ThemeProvider>
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('covid/detalles-situacion');
    const data = await response.json();
    this.setState({ detalles: data, loading: false });
  }
}
