import React, { Component } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@material-ui/core";

interface IForecast {
  date: number;
  temperatureC: number;
  temperatureF: number;
  summary: string
}

interface IForecastState {
  forecasts: IForecast[];
  loading: boolean;
}

export class FetchData extends Component<any, IForecastState> {
  static displayName = FetchData.name;

  constructor(props: any) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts: IForecast[]) {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell>Temperatura (C)</TableCell>
              <TableCell>Temperatura (F)</TableCell>
              <TableCell>Summary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {forecasts.map((forecast: IForecast) => (
              <TableRow key={forecast.summary}>
                <TableCell component="th" scope="row">
                  {forecast.date}
                </TableCell>
                <TableCell align="right">{forecast.temperatureC}</TableCell>
                <TableCell align="right">{forecast.temperatureF}</TableCell>
                <TableCell align="right">{forecast.summary}</TableCell>
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
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
