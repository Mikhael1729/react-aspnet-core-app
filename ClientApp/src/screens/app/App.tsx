import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from '../../layout/Layout';
import { Home } from '../home/Home';
import { DetalleSituacionReport } from '../DetalleSituacionReport/DetalleSituacionReport';
import { Counter } from '../counter/Counter';
import { SituacionActual } from "../report-charts/report-charts"
import { AddTreatment } from "../add-treatment/add-treatment";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path="/" component={DetalleSituacionReport} />
        <Route path="/counter" component={Counter} />
        <Route path="/situacion-actual" component={SituacionActual} />
      </Layout>
    );
  }
}
