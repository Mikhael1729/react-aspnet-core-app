import React, { Component } from 'react';
import { Treatment } from "../../models/treatment";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from "@material-ui/core";

interface IForecastState {
  treatments: Treatment[];
  loading: boolean;
}

export class FetchData extends Component<any, IForecastState> {
  static displayName = FetchData.name;

  constructor(props: any) {
    super(props);
    this.state = { treatments: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(treatments: Treatment[]) {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Cédula</TableCell>
              <TableCell>Medicina</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Enfermera</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Fecha de registro</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {treatments.map((treatment: Treatment) => (
              <TableRow key={treatment.id}>
                <TableCell component="th" scope="row">
                  {treatment.id}
                </TableCell>
                <TableCell align="left">{treatment.idCard}</TableCell>
                <TableCell align="left">{treatment.medicine}</TableCell>
                <TableCell align="left">{treatment.quantity}</TableCell>
                <TableCell align="left">{treatment.nurse}</TableCell>
                <TableCell align="left">{treatment.doctor}</TableCell>
                <TableCell align="left">{treatment.registrationDate!.toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.treatments);

    return (
      <div>
        <Typography variant="h3">Tratamientos</Typography>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('treatments');
    const data = await response.json();
    this.setState({ treatments: data, loading: false });
  }
}
