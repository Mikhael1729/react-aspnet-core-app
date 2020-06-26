import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { Button } from "@material-ui/core";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { DetalleSituacion } from "../../models/detalles-situacion";
import { Modal } from './modal/modal';
import { Report } from "./report/report";

interface IForecastState {
  detalles: DetalleSituacion[];
  loading: boolean;
  modalIsOpen: boolean;
}

export class DetalleSituacionReport extends Component<any, IForecastState> {
  static displayName = DetalleSituacionReport.name;

  constructor(props: any) {
    super(props);
    this.state = { detalles: [], loading: true, modalIsOpen: false };
  }

  componentDidMount() {
    this.populateDetallesData();
  }

  private handleOpen = () => {
    this.setState({ modalIsOpen: true });
  }

  private handleClose = () => {
    this.setState({ modalIsOpen: false });
  }

  private renderSaveButton = () => (
    <Button
      variant="outlined"
      color="default"
      onClick={this.handleOpen}
      startIcon={<PictureAsPdfIcon />}
    >
      Convertir a PDF
    </Button>
  );

  render() {
    const title = "Reporte de Detalle de Situación"
    const theme = createMuiTheme({
      palette: {
        background: {
          default: "#ffffff",
          paper: "#ffffff"
        },
      }
    });

    return (
      <div>
        <Report
          title={title}
          detalles={this.state.detalles}
          actions={this.renderSaveButton()}
          loadingData={this.state.loading} />

        <ThemeProvider theme={theme}>
          <Modal
            open={this.state.modalIsOpen}
            handleClose={this.handleClose}
            title="Guardar reporte"
            actionButtonText="Exportar a PDF"
          >
            <Report
              detalles={this.state.detalles}
              title={title}
              loadingData={this.state.loading} />
          </Modal>
        </ThemeProvider>
      </div>
    );
  }

  async populateDetallesData() {
    const response = await fetch('covid/detalles-situacion');
    const data = await response.json();
    this.setState({ detalles: data, loading: false });
  }
}
