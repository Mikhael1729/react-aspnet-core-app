import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from '../../layout/Layout';
import { DetalleSituacionReport } from '../DetalleSituacionReport/DetalleSituacionReport';
import { SituacionActual } from "../report-charts/report-charts"

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path="/" component={DetalleSituacionReport} />
        <Route path="/situacion-actual" component={SituacionActual} />
      </Layout>
    );
  }
}
